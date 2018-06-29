import React from 'react'
import ReactDOM from 'react-dom'
import 'create-react-class'
import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory } from 'react-router'

import './index.css'
import './antd.css'

import Login from './components/Login'
import Home from './components/Home'
import ButtonView from './components/ButtonView'
import IconView from './components/IconView'
import LayoutView from './components/LayoutView'
import CascaderView from './components/CascaderView'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                { this.props.children }
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/login" />
            <Route path="login" component={Login} />
            <Route path="home" component={Home} >
                <IndexRedirect to="/home/button" />
                <Route path="button" component={ButtonView} />
                <Route path="icon" component={IconView} />
                <Route path="layout" component={LayoutView} />
                <Route path="cascader" component={CascaderView} />
            </Route>
        </Route>
    </Router>, 
    document.getElementById("root")
)
