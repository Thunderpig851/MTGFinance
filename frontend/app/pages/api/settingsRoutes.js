const cookie = require('cookie-cutter');

export async function getUserData(req) {
    console.log(cookie.get('access_token'));
    try {
        const url = 'http://localhost:8000/api/users/me';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'access_token': cookie.get('access_token'),
            }
        })

        if (response.ok) {
            return response.json()
        }

    } catch(err) {
        console.log(err);
    }
};