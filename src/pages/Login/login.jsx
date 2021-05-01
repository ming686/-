import React, { Component } from 'react'
import Header from './Header/header';
import { Form, Icon, Input, Button, message} from 'antd';
import './login.css'
// import ajax from '../../api/axios'
import {reqlogin} from '../../api/index'
import storeUtils from '../../utils/storageutils'
import { Redirect } from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

// 表单
handleSubmit = (e )=> {
  e.preventDefault();
  this.props.form.validateFields(async (err, values) => {
    if (!err) {
      console.log('Received values of form: ', values);
        // 请求接口   在package.json里面配置
        const {username,password}=values
      const result=await reqlogin(username,password)
      //  ajax('/login',{...values},'POST')
      console.log(result);
       
      // 登录成功 提示 跳转
      if(result.status==0){
        message.success('登陆成功')
        storeUtils.saveUser(result.data)
        this.props.history.push('/')
      }
    }
  });
};

//表达自定义验证
handleConfirmPassword = (rule, value, callback)=>{
      if(!value){
        callback('密码不能为空')
      }else if(value.length<5){
        callback('密码长度不能小于5位')
      }else if(value.length>16){
        callback('密码长度不能大于16')
      }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
        callback('密码是数字字母下划线')
      }else{
        callback()
      }
   }

    render() { 
      // 判断下如果登录过了  输入login进不去
       const user=storeUtils.getUser() || ''
       if(user&&user._id){
         return <Redirect to='/' />
       }
      // 表单
      const { getFieldDecorator } = this.props.form;
        return ( 
            <div>
               <Header/>
                <div className='login-text'>
                  {/* 表单 */}
                <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            // 表单验证 第一种行内样式
            rules: [
              { required: true, message: '请输入用户名!' },
              {min:5,message:'最少5位'},
              {man:5,message:'最多16位'},
              {
                pattern:/^[a-zA-Z0-9_]+$/,
                message:'用户名是数字字母下划线'
              }
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            //zi定义表单验证
            rules: [
              { required: true, message: '请输入密码!' },
              {validator: this.handleConfirmPassword}
            ],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
       
        </Form.Item>
      </Form>
                </div>
            </div>
         );
    }
}
 
//form表单是高阶组件  传入一个组件返回一个新的组件
export default Form.create()(Login);