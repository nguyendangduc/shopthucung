class EventEmitter {
    constructor() {
        this.events = {}
    }
    _getEventByName(name) {
        if(this.events[name] === undefined) {
            this.events[name] = new Set()
        }
        return this.events[name]
    }
    on (eventName, fn) {
        this._getEventByName(eventName).add(fn)
    }
    emit (eventName, ...args) {
        this._getEventByName(eventName).forEach(fn => {
            fn.apply(this, args)
        })
    }
    removeListener (eventName, fn) {
        this.events[eventName].delete(fn)
    }
}
export default EventEmitter
