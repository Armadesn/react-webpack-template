import React                 from 'react'
import Loadable              from 'react-loadable';
import Bundle                from '../Bundle/index.jsx';
import Layout                from '../layout/index.jsx'
import { Provider }          from 'react-redux'; 
import store                 from '../store/index.jsx'

import AnimatedRouter from 'react-animated-router'; //导入我们的的AnimatedRouter组件
import './router.less'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom' 


/**
 * @param {[type]} opstion [首页] 
*/
import Index from 'bundle-loader?lazy&name=app-[index]!../pages/index';
const IndexPage = () => (<Bundle load={Index}>{(Page) => <Page />}</Bundle>)


/**
 * @param {[type]} opstion [登录] 
*/
import Login from 'bundle-loader?lazy&name=app-[Login]!../pages/login';
const LoginPage = () => (<Bundle load={Login}>{(Page) => <Page />}</Bundle>)


/**
 * @param {[type]} opstion [二级路由] 
*/
class LayoutRouter extends React.Component{
    render(){
        return(
            <Layout>
                <AnimatedRouter>  
                    <Route path='/' exact component={IndexPage}></Route>
                </AnimatedRouter>  
            </Layout>
        )
    }
}
/**
 * @param {[type]} opstion [主体路由] 
*/
class RouterComponent extends React.Component{
    render(){
        return (
            <Router>
                <Provider store={store}>
                    <Switch>
                        <Route path='/login' component={LoginPage}></Route>
                        <Route path="/" render={ () => <LayoutRouter></LayoutRouter>} />
                    </Switch>
                </Provider>
            </Router>
        )
    }
}


export default RouterComponent