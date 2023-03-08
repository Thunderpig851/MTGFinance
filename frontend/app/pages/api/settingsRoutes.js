const axios = require('axios');

export async function getUserData(req, res) {
    try {
        const options = {
            method: 'get',
            url: 'http://localhost:8000/api/users/me',
            withCredentials: true,
        };
        const {data:response} = await axios(options);
        return response;
    } 
    catch (error) {
        console.log(error);
    }
};