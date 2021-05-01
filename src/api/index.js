
import ajax from './axios'

//登录接口封装
export const reqlogin=(username,password)=>ajax('/login',{username,password},'POST')