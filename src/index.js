import React from 'react'
import ReactDOM from 'react-dom'
import 'create-react-class'
import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory } from 'react-router'

import './antd.css'
import { Button } from 'antd'

import ChessGame from './components/ChessGame'

class App extends React.Component{
    render() {
        return (
            <div>
                <p>anu&&react-router</p>
                <ul>
                    <li><Link to="/about" activeStyle={{color:'red'}}>About</Link></li>
                    <li><Link to="/repos" activeStyle={{color:'red'}}>Repos</Link></li>
                    <li><Link to="/game" activeStyle={{color:'red'}}>Game</Link></li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

const Home = () => {
    return (
        <div>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="ghost">Ghost</Button>
            <Button type="dashed">Dashed</Button>
        </div>
    )
}

const Repos = () => {
    return (
        <div>
            repos
        </div>
    )
}

const About = (props) => {
    return (
        <div>
            about
        </div>
    )
}

const Game = () => {
    return (
        <div>
            <ChessGame />
        </div>
    )
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="repos" component={Repos} />
            <Route path="about" component={About} />
            <Route path="game" component={Game} />
        </Route>
    </Router>, 
    document.getElementById("root")
)
