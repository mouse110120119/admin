import React from 'react'
import { Menu, Icon } from 'antd';
// import {withRouter,Link} from 'react-router-dom'
// import {BrowserRouter} from 'react-router-dom'

const { SubMenu } = Menu;

class Sider extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4','sub5','sub6','sub7','sub8','sub9'];

    state = {
        openKeys: ['sub1'],
        path:'/'
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    jump=(path)=>{
        console.log(this)
        this.props.history.push(path)
    }

    // componentWillReceiveProps(){

    // }

    render() {
        return (
            <div>
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 256 }}
                    theme='dark'
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
              <Icon type="dashboard" />
              <span>Dashboard</span>
            </span>
                        }
                    >
                        <Menu.Item key="1">分析页</Menu.Item>
                        <Menu.Item key="2">监控页</Menu.Item>
                        <Menu.Item key="3">工作台</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
              <Icon type="form" />
              <span>表单页</span>
            </span>
                        }
                    >
                        <Menu.Item key="4">基础表单</Menu.Item>
                        <Menu.Item key="5">分布表单</Menu.Item>
                        <Menu.Item key="6">高级表单</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
              <Icon type="table" />
              <span>列表页</span>
            </span>
                        }
                    >
                        <SubMenu key="sub3" title="搜索列表">
                            <Menu.Item key="7">搜索列表(文章)</Menu.Item>
                            <Menu.Item key="8">搜索列表(项目)</Menu.Item>
                            <Menu.Item key="9">搜索列表(应用)</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="10">查询表格</Menu.Item>
                        <Menu.Item key="11">标准列表</Menu.Item>
                        <Menu.Item key="12">卡片列表</Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub5' title={
                        <span>
            <Icon type="profile" />
            <span>详情页</span>
          </span>
                    }>
                        <Menu.Item key='13'>基础详情页</Menu.Item>
                        <Menu.Item key='14'>高级详情页</Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub6' title={
                        <span>
            <Icon type="check-circle" />
            <span>结果页</span>
          </span>
                    }>
                        <Menu.Item key='15'>成功页</Menu.Item>
                        <Menu.Item key='16'>失败页</Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub7' title={
                        <span>
            <Icon type="warning" />
            <span>异常页</span>
          </span>
                    }>
                        <Menu.Item key='17'>403</Menu.Item>
                        <Menu.Item key='18'>403</Menu.Item>
                        <Menu.Item key='19'>500</Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub8' title={
                        <span>
            <Icon type="user" />
            <span>个人页</span>
          </span>
                    }>
                        <Menu.Item key='20'>个人中心</Menu.Item>
                        <Menu.Item key='21'>个人设置</Menu.Item>
                    </SubMenu>
                    <SubMenu key='sub9' title={
                        <span>
            <Icon type="highlight" />
            <span>图形编辑器</span>
          </span>
                    }>
                        <Menu.Item key='22'>流程编辑器</Menu.Item>
                        <Menu.Item key='23'>脑图编辑器</Menu.Item>
                        <Menu.Item key='24'>拓补编辑器</Menu.Item>
                    </SubMenu>
                </Menu>

            </div>
        );
    }
}

// let newSider = withRouter(Sider)

export default Sider