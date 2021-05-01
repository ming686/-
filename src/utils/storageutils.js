
import store from 'store'
const User_KEY='suer_key'
//导出模块 
export default{
    saveUser(user){
        store.set(User_KEY,user)
    },
    getUser(){
        return store.get(User_KEY)
    },
    removeUser(){
        store.removu(User_KEY)
    }
}
