import React, { Component } from 'react'
import Log from '../img/log.jpg'
import './header.css'
 class Header extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     render() { 
         return ( 
             <div className='header'>
                 <img src={Log} alt=""/>
                 <h1>后台管理系统</h1>
             </div>
          );
     }
 }
  
 export default Header;