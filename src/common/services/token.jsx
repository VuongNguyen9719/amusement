

let callbacks = [];

let token = {};


const onChange = (cb) => {
    callbacks.push(cb);
    return () => {
        callbacks = callbacks.filter(f => f !== cb)
    }
}

const emitChange = () => {
    callbacks.forEach(f => f(token))
}

const setToken = (newToken) => {

    if (newToken) {
        token = newToken;
        localStorage.setItem('tokendata', JSON.stringify(token))
    } else {
        localStorage.removeItem('tokendata')
    }
    emitChange();
}
const getToken = () => {
    return token
}
const tokenServices = {
    onChange,
    getToken,
    setToken,
}

export default tokenServices;
