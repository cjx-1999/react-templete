// use session storage
const storage = sessionStorage;
const getToken = () => {
    return storage.getItem('token');
};

const setToken = (token) => {
    return storage.setItem('token', token);
};

const removeToken = () => {
    return storage.removeItem('token');
};

export {
    getToken,
    setToken,
    removeToken,
};