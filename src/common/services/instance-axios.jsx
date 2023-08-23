import axios from 'axios'
import qs from 'qs'
import tokenServices from './token'

export const create = (options) => {
    let configs = Object.assign({}, options, {
        transformRequest: [
            (data, headers) => {
                headers.common = {};
                let token = tokenServices.getToken();
                const { access_token } = token || null;
                if (access_token && Object.keys(access_token).length > 0) {
                    headers.common.Authorization = `Bearer ${access_token}`;
                }

                if (options && options.requester) {
                    headers.common.requester = options.requester
                }
                return data
            },
        ]
    })


    const instance = axios.create(configs);
    instance.defaults.baseURL = `${import.meta.env.VITE_API_DOMAIN}`

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
