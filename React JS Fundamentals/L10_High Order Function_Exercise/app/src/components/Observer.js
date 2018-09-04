const functions={}

export default{
    subscribe:(name,fn)=>{
        functions[name]=fn
    },
    trigger:(name)=>{
        functions[name]()
    }
}

