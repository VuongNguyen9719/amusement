import { create } from "~common/services/instance-axios"

const ajax = create({

})

export default {
    getFilmByDate: (data) => {
        return ajax.get("/movies/movie-by-date", {
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

    getListShowTime: (data) => {
        return ajax.get("/movies/show-times-by-calendar-day", {
            params: data
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