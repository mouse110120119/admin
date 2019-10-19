import React,{Component} from 'react'
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'

import Admin from './component/admin'
import Login from './component/login'
import Setting from './component/setting'
import Home from './component/home'
// import User from './component/user'
import List from './component/user/list.js'
import Del from './component/user/del.js'

class RootRouter extends Component{
    render(){
        return(
            <HashRouter>
                {/*  导航  */}
                {/*  路由  */}
                <Switch>
                    <Redirect exact from='/' to='/login'/>
                    <Route path='/login' component={Login}/>
                    <Route path='/setting' component={Setting}/>
                    <Route path='/admin' render={()=>{
                        return(
                            <Admin>
                                <Route path='/admin/home' component={Home}/>
                                {/*<Route path='/admin/user' component={User}/>*/}
                                <Route path='/admin/user/add' component={List}/>
                                <Route path='/admin/user/del' component={Del}/>
                            </Admin>
                        )
                    }}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default RootRouter