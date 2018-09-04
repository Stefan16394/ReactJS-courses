import Observer from "./Observer";

export default (data) => {
        console.log(data)
        Observer.trigger('notify',data)
        setTimeout(() => {
            Observer.trigger('notifyOff')
        }, 3000)
    }

