import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import EventDriven from './event-driven'
import ManagerFilm from './Slice/managerFilm'

const rootReducer = combineReducers({
    ManagerFilm
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
