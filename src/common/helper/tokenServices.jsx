

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
    }
    emitChange();
}
const setSecretkey = (secretkey) =>{
    token = Object.assign({} , token , {secretkey})
}
const setpageId= (pageId) =>{
    token = Object.assign({} , token , {pageId})
}
const getToken = () => {
    return token
}
const tokenServices = {
    onChange,
    getToken,
    setToken,
    setSecretkey,
    setpageId
}

export default tokenServices;
