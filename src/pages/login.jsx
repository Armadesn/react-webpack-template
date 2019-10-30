import React                    from 'react'
import { withRouter }           from 'react-router-dom'


class Login extends React.Component{
    constructor( props ){
        super(props)
    }
    componentWillMount(){
    }

    
    render(){
        return (
            <div className='login'>
                <h1>登录页面</h1>
            </div>
        )
    }

}


export default withRouter(Login);