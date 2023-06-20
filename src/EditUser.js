import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { useNavigate } from 'react-router-dom';
import TableCell from "@mui/material/TableCell";

// EditUser component
const EditUser = () => {
    const navigate = useNavigate(); // Use useNavigate instead of history
    const { id: userId } = useParams();
    const [user, setUser] = useState({ username: '' });

    useEffect(() => {
        // Fetch the user's data when the component mounts
        fetch(`http://localhost:8080/user/edit/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => {
                // Handle the error here
                console.error('Error:', error);
            });
    }, [userId]);


    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handleCancel = () => {
        history.goBack();
    };

    const handleSave = () => {
        fetch('http://localhost:8080/api/user/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(() => {
            history.goBack();
        });
    };

    const createUser = () => {
        fetch(`http://localhost:8080/user/update/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(() => {
            history.goBack();
        });
    };


    const updateUser = () => {
        fetch('http://localhost:8080/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(() => {
            history.goBack();
        });
    };


    return (
        <form>
            <label>
                Username:
                <input type="text" name="userid" value={user.id} onChange={handleInputChange} />

                Middle Initial
                <input type="text" name="givenname" value={user.givenname} onChange={handleInputChange} />

                Middle Initial
                <input type="text" name="middleinitial" value={user.middleinitial} onChange={handleInputChange} />

                Surname
                <input type="text" name="surname" value={user.surname} onChange={handleInputChange} />
            </label>
            {/* Other fields here */}
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="button" onClick={handleSave}>Save</button>
        </form>
    );
};

export default EditUser;