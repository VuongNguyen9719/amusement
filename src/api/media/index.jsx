import { create } from "~common/services/instance-axios"

const ajax = create({

}, import.meta.env.VITE_API_DOMAIN_MEDIA)

export default {
    uploadFile: (image) => {
        const formData = new FormData();
        formData.append('image', image)
        return ajax.post(`/1/upload?expiration=600&key=f18c736d9b5af32739cc34a24963451f`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data', // Đặt header phù hợp cho form data
            },
        })
            .then(res => {
                if (res && res.data && res.data.status) {
                    return res.data.data;
                }
                return Promise.reject(res?.data?.msg);
            })
            .catch(reject => Promise.reject(reject))
    }
}