import React, { useState } from 'react';
import axios from 'axios';
import './AddAdmin.css';

const AddAdmin = () => {
    const [newUser, setNewUser] = useState({
        name: '',
        surname: '',
        birthdate: '',
        photo: '',
        role: 'full', // Default role to 'Full Access'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('birthdate', newUser.birthdate);
        formData.append('name', newUser.name);
        formData.append('surname', newUser.surname);
        formData.append('role', newUser.role);

        axios.post('http://localhost:5000/admin/add/', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
    }

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewUser({...newUser, photo: e.target.files[0]});
    }

    return (
        <div className="form-container">
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <input 
                    type="file" 
                    accept=".png, .jpg, .jpeg"
                    name="photo"
                    onChange={handlePhoto}
                />

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    placeholder="Surname"
                    name="surname"
                    value={newUser.surname}
                    onChange={handleChange}
                />

                <input 
                    type="date"
                    name="birthdate"
                    value={newUser.birthdate}
                    onChange={handleChange}
                />

                <select
                    name="role"
                    value={newUser.role}
                    onChange={handleChange}
                >
                    <option value="full">Full Access</option>
                    <option value="partial">Partial Access</option>
                </select>

                <input 
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
}

export default AddAdmin;
