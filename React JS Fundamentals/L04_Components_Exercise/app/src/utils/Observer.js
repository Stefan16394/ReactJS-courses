let arr={}

module.exports={
     addObserver(name,func){
         arr[name]=func
     },
     execute(name,params){
         arr[name](params)
     }
}