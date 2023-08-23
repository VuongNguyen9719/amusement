import { create } from "~common/services/instance-axios"

const ajax = create({

})

export default {
    login: (data) => {
        return ajax.get("/login", {
            params: data
        })
            .then(res => {
                if (res && res.data && res.data.status) {
                    return res.data.data;
                }
                return Promise.reject(res?.data?.msg);
            })
            .catch(reject => Promise.reject(reject))
    },

    getCapcha: () => {
        return ajax.get("/generate_captcha", {
            responseType: 'arraybuffer',
        })
            .then((response) => {
                // Chuyển dữ liệu array buffer sang Blob
                const blob = new Blob([response.data], { type: 'image/jpeg' });

                // Tạo URL tạm thời từ Blob
                const url = URL.createObjectURL(blob);
                return url;
            })
    }
}