import Navbar from '../navigation/navbar';
import { useEffect } from 'react';

import { getUserData } from '../api/settingsRoutes';

export default function AccountSettings() {
    // build some state here

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    
    useEffect(() => {
        getUserData()
            .then((data) => {
                console.log(data);
            })  
    }, []);

    return (
        <div>
            <Navbar />
            {/* List out current settings,
                maybe figure out the CSS I want to use,
                add button to alter these settings,
                look up user flow on preferred website
             */}

        </div>
    )
};