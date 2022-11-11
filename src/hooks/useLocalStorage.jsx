const useLocalStorage = (key = null) => {
    if (key == null) return {
        account: JSON.parse(localStorage.getItem('account')),
        user: JSON.parse(localStorage.getItem('user'))
    }

    return JSON.parse(localStorage.getItem(key))
}

export default useLocalStorage