export async function registerUser(req) {
    try {
        const url = 'http://localhost:8000/api/auth/register'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(req)
        })
        if (response.ok) {
            return response.json()
        }
    } catch(err) {
        console.log(err)
    }
}

export async function loginUser(req) {
    try {
        const url = 'http://localhost:8000/api/auth/login'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(req)
        })
        // Keep for testing.
        if (response.ok){
            return response.json();
            }
    } catch(err) {
        alert('Incorrect login credentials.');
        console.log(err);
    }
};

export async function getLoginImage() {
    try {
        const url = 'https://api.scryfall.com/cards/random'
        const response = await fetch(url);
        if (response.ok){
            return response.json();
            }
    } catch(err) {
        console.log(err);
    } 
};

