const axios = require('axios')

export async function registerUser(req) {
    try {
        const options = {
            method: 'post',
            url: 'http://localhost:8000/api/auth/register',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                'email': req.email,
                'name': req.name,
                'password': req.password,
                'passwordConfirm': req.passwordConfirm
            },
        }
        const {data:response} = await axios(options);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export async function loginUser(req) {
    try {
        const options = {
            method: 'post',
            url: 'http://localhost:8000/api/auth/login',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                'email': req.email,
                'password': req.password
            }
        };
        const {data:response} = await axios(options);
        return response;
    }
    catch (error) {
        console.log(error);
    }

};

export async function logoutUser(req) {
    try {
        options = {
            method: 'get',
            url: 'http://localhost:8000/api/auth/logout',
            withCredentials: true
        }
        const {data:response} = await axios(options);
        return response;
    }
    catch (error) {
        console.log(error);
    }
};

export async function getLoginImage() {
    try {
        const options = {
            method: 'get',
            url: 'https://api.scryfall.com/cards/random'
        }
        const {data:response} = await axios(options);
        return response;
    }
    catch(error) {
        console.log(error);
    }
};

