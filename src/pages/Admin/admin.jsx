import React, { Component } from "react";
import storeUtils from "../../utils/storageutils";
import { Redirect,Route} from "react-router-dom";
import { Layout, } from "antd";
import Header from '../../component/header/header';
import Leftside from '../../component/leftside/leftside'
import './admin.css'
import Home from '../Home/home'
import Category from '../Category/category'
import Products from '../Products/product'
import User from '../User/user'
import Role from '../Role/role'
import Bar from '../Charts/bar'
import Pie from '../Charts/pie'
import Line from '../Charts/line'


const { Footer, Sider, Content } = Layout;
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // 判断下如果登录过了  输入login进不去
    const user = storeUtils.getUser() || "";
    if (!user || !user._id) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Layout  >
          <Sider>
            <Leftside/>
          </Sider>
          <Layout>
            <Header/>
            <Content>
              <Route path='/home' component={Home} />
              <Route path='/category' component={Category} />
              <Route path='/products' component={Products} />
              <Route path='/user' component={User} />
              <Route path='/role' component={Role} />
              <Route path='/charts/bar' component={Bar} />
              <Route path='/charts/pie' component={Pie} />
              <Route path='/charts/line' component={Line} />
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Admin;
