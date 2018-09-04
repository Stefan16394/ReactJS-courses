const subs={}

export default{
    subscribe:(name,fn)=>{
        subs[name]=fn
    },
    trigger:(name,data)=>{
        subs[name](data)
    }
}