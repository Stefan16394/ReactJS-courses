let subscriptions = {
    'loginUser': [],
    'logoutUser':[],
    'notifications':[],
    'update':[]
}

export default {
    events: {
        loginUser: 'loginUser',
        logoutUser:'logoutUser',
        notifications:'notifications',
        update:'update'
    },
    subscribe: (eventname, fn) => {
        subscriptions[eventname].push(fn)
    },
    trigger: (eventname, data) => {
        subscriptions[eventname].forEach(fn => {
            fn(data)
        })
    }
}