import React from 'react'
import { Menu, Icon, Switch } from 'antd';
import {withRouter} from "react-router-dom";

const { SubMenu } = Menu;

let newData = [
    {name:'首页',path:'/admin/home'},
    {name:'设置',path:'/setting'},
    {
        name:'用户',
        path:'/admin/user',
        children:[
            {name:'用户添加',path:'/admin/user/add'},
            {
                name:'用户删除',
                path:'/admin/user/del',
                children:[
                    {name:'用户添加',path:'/admin/user/del/add'},
                    {
                        name:'用户删除',
                        path:'/admin/user/del/del'
                    }
                ]
            }
        ]
    }
]

class customNav extends React.Component {
    initData(data){
      return data.map((item,index)=>{
          if (item.children) {
              return (
                  <SubMenu title={item.name} key={index}>
                      {this.initData(item.children)}
                  </SubMenu>
              )
          } else {
              return (
                  <Menu.Item key={index} onClick={this.jump.bind(this,item.path)}>
                      {item.name}
                  </Menu.Item>
              )
          }
      })
    }

    jump=(path)=>{
        this.props.history.push(path)
    }

    render() {
        console.log(this)
        return (
            <div>
                <Menu style={ {width:200} }>
                    {this.initData(newData)}
                    {/*<Menu.Item>首页</Menu.Item>*/}
                    {/*<Menu.Item>设置</Menu.Item>*/}
                    {/*<SubMenu title='用户'>*/}
                    {/*    <Menu.Item>用户添加</Menu.Item>*/}
                    {/*    <SubMenu title="用户删除">*/}
                    {/*        <Menu.Item>用户添加</Menu.Item>*/}
                    {/*        <Menu.Item>用户删除</Menu.Item>*/}
                    {/*    </SubMenu>*/}
                    {/*</SubMenu>*/}
                </Menu>
            </div>
        );
    }
}

export default withRouter(customNav)