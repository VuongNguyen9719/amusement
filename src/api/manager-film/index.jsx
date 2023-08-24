import { create } from "~common/services/instance-axios"
import qs from 'qs'

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
    },

    createMovie: (data) => {
        return ajax.post("/movies/create-movie", JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res && res.data && res.data.status) {
                    return res.data.data;
                }
                return Promise.reject(res?.data?.msg);
            })
            .catch(reject => Promise.reject(reject))
    },
    updateMovie: (data) => {
        return ajax.put("/movies/update-movie", JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res && res.data && res.data.status) {
                    return res.data.data;
                }
                return Promise.reject(res?.data?.msg);
            })
            .catch(reject => Promise.reject(reject))
    },
    deleteFilm: (data) => {
        return ajax.delete("/movies/delete-movie", {
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
    toggleMovie: (data) => {
        ajax.post("movies/hide-show-movie", JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            if (res && res.data && res.data.status) {
                return res.data.data;
            }
            return Promise.reject(res?.data?.msg);
        })
            .catch(reject => Promise.reject(reject))
    },
    getDetailFilm: (data) => {
        return ajax.get("/movies/movie", {
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