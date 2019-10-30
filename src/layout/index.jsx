import React                    from 'react'
import { Layout }               from 'antd';
import 'style/layout.less'


const { Header, Footer, Sider, Content } = Layout;


class layout extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Layout>
                {this.props.children}
            </Layout>
        )
    }
}


export default layout