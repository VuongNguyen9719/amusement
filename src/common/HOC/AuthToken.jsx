import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import tokenServices from "~common/services/token";
import { toast } from "react-toastify";
import Loading from "~formControls/Loading";
import { useNavigate, useLocation } from 'react-router-dom';

const AuthToken = ({ children, ...props }) => {
    const dispatch = useDispatch();
    const { getToken } = props || null;
    const tokenCacheStore = localStorage.getItem('tokendata');
    const tokenData = JSON.parse(tokenCacheStore);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [mounted, setMount] = useState(false)
    const [token, setTokenState] = useState(tokenData?.access_token);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (!token && location.pathname !== '/login') {
            navigate("/login");
        } else {
            if (location.pathname === '/login' && token) {
                navigate("/");
            }
        }
    }, [])

    useEffect(() => {
        const check = () => {
            if (!token) return;
            const { expires_in } = token;
            // tokenServices.setToken(token);
            // if (!expires_in) return;
            // let lifeTime = new Date(expires_in * 1000).getTime() - new Date().getTime();
            // if (lifeTime <= 30 * 1000 && !isLoading) {
            //     // nếu mounted rồi thì k loading nữa
            //     if (!mounted) {
            //         setIsLoading(true)
            //     }

            //     // getToken((data) => { // todo here
            //     //     if (!mounted) {
            //     //         setIsLoading(false)
            //     //     }
            //     //     setMount(true)
            //     //     setTokenState(data && data.data)
            //     //     tokenServices.setToken(data && data.data);
            //     // })

            // }
        }
        const id = setInterval(check, 6000)
        check();
        return () => clearInterval(id)
    }, [token])
    if (error) return null;
    if (!token && location.pathname !== '/login') return <Loading />;

    return children
}
export default AuthToken;