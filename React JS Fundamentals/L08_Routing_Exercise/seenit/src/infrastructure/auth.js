import Observer from './Observer'

export default{
    login:(res,message)=>{
        sessionStorage.setItem('authtoken', res._kmd.authtoken)
        sessionStorage.setItem('username',res.username)
        sessionStorage.setItem('userid',res._id)
        Observer.trigger(Observer.events.loginUser, res.username)
        Observer.trigger(Observer.events.notifications,{message,type:'success'}) 
    }
}