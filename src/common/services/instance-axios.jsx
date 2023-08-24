import axios from 'axios'
import qs from 'qs'
import tokenServices from './token'

export const create = (options, baseUrl = `${import.meta.env.VITE_API_DOMAIN}`) => {

    let token = localStorage.getItem('tokendata')
    const tokenData = JSON.parse(token);
    const access_token = tokenData?.access_token;
    let configs = Object.assign({},
        options,
        {
            transformRequest: [
                (data, headers) => {
                    headers.common = {};
                    // let token = tokenServices.getToken();
                    if (access_token && access_token.length > 0) {
                        headers.common.authorization = `Bearer ${access_token}`;
                    }

                    if (options && options.requester) {
                        headers.common.requester = options.requester
                    }
                    return data
                },
            ],
            headers: {
                'Authorization': `Bearer ${access_token}`, // Thêm header Authorization mặc định
                'Content-Type': 'application/json',
            },
        },

    )


    const instance = axios.create(configs);
    instance.defaults.baseURL = baseUrl

    instance.interceptors.request.use(function (config) {
        let data = config.data;
        if (typeof data === "object" && !(data instanceof FormData)) {
            let nextData = Object.assign({}, data);

            return Object.assign({}, config, {
                data: qs.stringify(nextData)
            })
        }
        return config;
    });


    return instance;
}
