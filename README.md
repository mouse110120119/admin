### 主程搭建
1. 预处理语言 less sass stylus  unit 
    将config下的webpack.config.js里的sass全改成less
    npm install less less-loader
    样式冲突：
        1. BEM命名法，保证类名不重复，组件名-功能名-具体名称
        2. css in js，不能使用预处理语言
        3. 模块样式化
2. ui框架
    antd
    antd和less
    将less的版本从3版降低到2.7.3  npm install less@2,7,3
3. 公有插件
    redux
    router
    axios拦截器
    webStorage
    react-loadable
4. 页面文件目录
5. 指定开发规范
6. 公有组件
7. 公有模块

#### 异步中间件
react-redux 中 actionCreatore 处理异步问题
react 全局状态管理中如何处理异步问题
react-thunk react-sage redux-promise ...
把所有的异步请求放到actionCreator中，方便管理
1. store.js
const {createStore,applyMiddle} from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
export default createStore(reducer,applyMiddle(thunk))
2. actionCreator
````javascript
export default{
    changeName(params){
        let action = {}
        return action
    }
}
````