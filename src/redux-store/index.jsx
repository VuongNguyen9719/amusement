import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import EventDriven from './event-driven'
import ManagerFilm from './Slice/managerFilm'
import ManagerMovieShowTimes from './Slice/manage-movie-showtimes'

const rootReducer = combineReducers({
    ManagerFilm,
    ManagerMovieShowTimes
});

const store = createStore(rootReducer,
    applyMiddleware(thunk, () => next => action => {
        EventDriven.emit(action);
        return next(action)
    },
    )
);

store.onDispatch = (callback, dependency) => {
    return EventDriven.register(callback, dependency);
};

export default store;
