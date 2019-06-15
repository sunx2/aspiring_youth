const login = (data) => {
    data.token = 'abcd'
    sessionStorage.setItem('AspiringYouthUser', JSON.stringify(data))
} 

const getUser = () => {
    let user = sessionStorage.getItem('AspiringYouthUser')
    return JSON.parse(user)
}

const logout = () => {
    sessionStorage.removeItem('AspiringYouthUser')
}

const isAuthenticated = () => {
    let user = sessionStorage.getItem('AspiringYouthUser')
    if(!user) return false;
    try {
        user = JSON.parse(user)
        if(!user.token) return false;
        return true;
    } catch (error) {
        return false
    }
}

const UserAuth = {
    login,
    getUser,
    logout,
    isAuthenticated
}

export default UserAuth;