
import axios from 'axios'
import{message}from 'antd'

export default function ajax(url,data={},type='GET'){
    // promise 封装
    return new Promise((resolve,reject)=>{
        let promise
        //异步执行axios
        if(type=='GET'){
            promise=axios.get(url,{params:data})
        }else{
            promise=axios.post(url,data)
        }

        //成功调用resolve(value)
        promise.then(response=>{
            resolve(response.data)
            //失败的话提示信息
        }).catch(error=>{
            message.error('请求出错了:' + error.message)
        })
    })
}