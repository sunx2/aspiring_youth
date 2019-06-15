const BASE_PATH = "https://zenith-dirigible.glitch.me"

const register = async (name, email, password) => {
    const url = `${BASE_PATH}/add/post?name=${name}&email=${email}&password=${password}`
    try {
        const response = await fetch(url, {method: 'POST'});
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}  

const AuthApi = {register}

export default AuthApi;