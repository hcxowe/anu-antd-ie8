import React, { Component } from 'react'

import {Menu, Card} from 'antd'
import { hashHistory } from 'react-router'

import './index.less'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            curMenuKey: props.location.pathname
        }

        this.handleClick = this.handleClick.bind(this)
        this.onMenuClick = this.onMenuClick.bind(this)
    }

    handleClick() {

    }

    onMenuClick(e) {
        hashHistory.push(e.key)

        this.setState({
            curMenuKey: e.key
        })
    }


    render() {
        return (
            <div class="home">
                <div class="home-head">
                    <div class="home-head-icon">
                        <img src={require('../../static/logo.jpg')}/>
                    </div>
                    <Menu className="home-head-menu" mode="horizontal">
                        <Menu.SubMenu title="拉夫堡">
                        <Menu.Item key="setting:1">个人信息</Menu.Item>
                        <Menu.Item key="setting:2">账号设置</Menu.Item>
                        <Menu.Item key="setting:4">退出登录</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </div>
                <div class="home-main">
                    <div class="home-main-left">
                        <Menu theme="light" style={{ width: '100%', height: '100%' }} onClick={this.onMenuClick} selectedKeys={[this.state.curMenuKey]} mode="inline">
                            <Menu.Item key="/home/button">Button 按钮</Menu.Item>
                            <Menu.Item key="/home/Icon">Icon 图标</Menu.Item>
                            <Menu.Item key="/home/layout">Layout 栅格</Menu.Item>
                            <Menu.Item key="/home/cascader">Cascader 级联选择</Menu.Item>
                            <Menu.Item key="5">选项5</Menu.Item>
                            <Menu.Item key="6">选项6</Menu.Item>
                            <Menu.Item key="7">选项7</Menu.Item>
                            <Menu.Item key="8">选项8</Menu.Item>
                            <Menu.Item key="9">选项9</Menu.Item>
                            <Menu.Item key="10">选项10</Menu.Item>
                            <Menu.Item key="11">选项11</Menu.Item>
                            <Menu.Item key="12">选项12</Menu.Item>
                        </Menu>
                    </div>
                    <div class="home-main-center">
                        { this.props.children }
                    </div>
                </div>
            </div>
        )
    }
}

export default Home