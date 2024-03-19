import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserData = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('http://10.248.1.56:8080/users/usersWithQualificationsAndSkills')
            .then((response) => {
                console.log(response.data);
                setUserData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    return (
        <div>
            {userData.map((item, index) => (
                <div key={index}>
                    <h1>Name: {item.user.first_name} {item.user.middle_name} {item.user.last_name}</h1>
                    <p>Email: {item.user.email_id}</p>
                    <p>Mobile Number: {item.user.mobile_number}</p>
                </div>
            ))}
        </div>
    );
};

export default UserData;
