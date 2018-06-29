import React, { Component } from 'react'
import { Input } from 'antd'
import HInput from '../../base/HInput'
import './index.less'

class InputView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            baseValue: 'ddd'
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        console.log(e.target.value)
        this.setState({
            baseValue: e.target.value
        })
    }

    render() {
        return (
            <div class="input-wrap">
                <div>
                    <label>{this.state.baseValue}</label>
                    <Input style={{width: '100px'}} value={this.state.baseValue} onChange={this.handleInputChange} placeholder="基本使用" />

                    <input value={this.state.baseValue} onChange={this.handleInputChange} />

                    <textarea value={this.state.baseValue} onChange={this.handleInputChange} ></textarea>

                    <HInput style={{width: '250px'}} onChange={this.handleInputChange} />
                </div>
            </div>
        )
    }
}

export default InputView