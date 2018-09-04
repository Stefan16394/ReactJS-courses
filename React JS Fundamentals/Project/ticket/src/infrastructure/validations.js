export default {
    user: (obj) => {
        const { username, password, repeatPassword } = obj
        if (username.trim() === '' ){
            return 'Username should not be empty.'
        }
        if(password.trim().length<5){
            return 'Password should be at least 5 characters long.'
        }
        if (repeatPassword!==undefined && password !== repeatPassword) {
            return 'Passwords do not match'
        }
        return false
    },
    event: (obj) => {
        let keys=Object.keys(obj)
        for(let x of keys){
            if(obj[x].trim()===''){
                return 'Fields should not be empty.'
            }
        }
        return false
    }
}