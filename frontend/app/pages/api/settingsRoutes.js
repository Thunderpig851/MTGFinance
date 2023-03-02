export async function getUserData(req) {
    try {
        const url = 'http://localhost:8000/api/users/me';
        const response = await fetch(url, {
            
        })

        if (response.ok) {
            return response.json()
        }

    } catch(err) {
        console.log(err);
    }
};