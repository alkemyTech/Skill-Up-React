const useUser = (key = null) => {
    const fullUser = JSON.parse(localStorage.getItem('user'))
    if (key == null) return fullUser
    if (key != 'token' && key != 'isLogin') return fullUser.user[key]
    return JSON.parse(localStorage.getItem('user'))[key]
}

export default useUser