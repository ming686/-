import React, { Component } from 'react'
import { Menu} from 'antd';
import{Link} from 'react-router-dom'
import {
    AppstoreOutlined,
    PieChartOutlined,
    MailOutlined,
  } from '@ant-design/icons';



const { SubMenu } = Menu;
class Leftside extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    state = {
        collapsed: false,
      };
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };
    
    render() { 
        return ( 
            <div>
                  <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            首页
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
            <Menu.Item key="2">分类管理</Menu.Item>
            <Menu.Item key="3">商品管理</Menu.Item>
          </SubMenu>
          <Menu.Item key="4" icon={<PieChartOutlined />}>
            角色管理
          </Menu.Item>
          <Menu.Item key="5" icon={<PieChartOutlined />}>
            用户管理
          </Menu.Item>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="图形图标">
            <Menu.Item key="6">饼状图</Menu.Item>
            <Menu.Item key="7">柱状图</Menu.Item>
            <Menu.Item key="8">折线图</Menu.Item>
          </SubMenu>
        </Menu>
            </div>
         );
    }
}
 
export default Leftside;