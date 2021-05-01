import React,{Component} from 'react'
import 'antd/dist/antd.css'
import {Route} from 'react-router-dom'
import Login from './pages/Login/login';
import Admin from './pages/Admin/admin';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
     
        <Route path='/login' component={Login} /> 
        {/* exact精准匹配   影响/ */}
        <Route path='/' component={Admin} /> 
      </div>
     );
  }
}
 
export default App;