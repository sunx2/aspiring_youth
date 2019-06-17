const BASE_PATH = "https://zenith-dirigible.glitch.me"

const register = async (name, email, password) => {
    const url = `${BASE_PATH}/api/auth/register`
    try {
        const data = { name, email, password }
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return await resp.json()
    } catch (error) {
        console.log(error)
        return { success: false, message: 'some thing went wrong' }
    }
}

const login = async (email, password) => {
    const url = `${BASE_PATH}/api/auth/authenticate`
    try {
        const data = { email, password }
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        return await resp.json()
    } catch (error) {
        console.log(error)
        return { success: false, message: 'some thing went wrong' }
    }
}

const AuthApi = { register, login }

export default AuthApi;