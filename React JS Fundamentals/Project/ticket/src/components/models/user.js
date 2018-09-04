import requester from "../../infrastructure/requester";

export default {
    register: {
        DEFAULT_STATE: {
            username: '',
            password: '',
            repeatPassword: ''
        },
        send: (data) => {
            let { username, password } = data
            data = { username, password, subs: "[]" }
            return requester.post('user', '', 'basic', data)
        }
    },
    login: {
        DEFAULT_STATE: {
            username: '',
            password: ''
        },
        send: (data) => {
            return requester.post('user', 'login', 'basic', data)
        }
    }
}
