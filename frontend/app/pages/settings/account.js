import Navbar from '../navigation/navbar';
import { useEffect, useState } from 'react';

import { getUserData } from '../api/settingsRoutes';

export default function AccountSettings() {
    // build some state here
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [userSince, setUserSince] = useState('')
    const [photo, setPhoto] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    useEffect(() => {
        getUserData()
            .then((data) => {
                console.log(data);
                setName(data.user.name);
                setEmail(data.user.email);
                setPhoto(data.user.photo);
                setUserSince(data.user.created);
            });  
    }, []);

    return (
        <div>
            <Navbar />
            
        </div>
    )
};