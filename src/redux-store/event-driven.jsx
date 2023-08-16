import helper from '~helper'

class EventDriven {
    constructor() {
        this.callbacks = [];
    }

    emit(action) {

        try {
            this.callbacks
                .filter(({dependency}) => {
                    return !dependency || dependency.indexOf(action.type) !== -1;
                })
                .forEach(({callback}) => {
                    callback(action)
                })
        } catch (reason) {
            console.error(reason)
        }
    }

    register(callback, dependency) {
    let token = helper.getUniqueString();
        this.callbacks = this.callbacks.filter(cb => cb.token !== token);
        this.callbacks.push({token, callback, dependency});

        return () => {
            this.callbacks = this.callbacks.filter(cb => cb.token !== token);
        }
    }
}

export default new EventDriven()
