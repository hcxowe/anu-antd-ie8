import React, { Component } from 'react'
import { Input } from 'antd'
import './index.less'

class HInput extends Component {
    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)
    }

    getSelectPosition(input){
        var nullvalue = -1;
        var selectStart ;
        var selectEnd ;
        var position;
        var selectText;
        if(input.setSelectionRange){
            selectStart= input.selectionStart;
            selectEnd = input.selectionEnd;
            if(selectStart == selectEnd){
                position = input.selectionStart;
                selectStart = nullvalue;
                selectEnd = nullvalue;
            }else{
                position = 	nullvalue;
            }
            selectText = input.value.substring(selectStart,selectEnd);
        }else{
            var range = document.selection.createRange();
            selectText=range.text;
            range.moveStart("character",-input.value.length);
            position = range.text.length;
            selectStart = position - (selectText.length);
            selectEnd = selectStart + (selectText.length);
            if(selectStart != selectEnd){
                position = nullvalue;
            }else{
                selectStart = nullvalue;
                selectEnd = nullvalue;
            }
        }

        return {
            position,
            selectStart,
            selectEnd,
            selectText
        }
    }
    setSelectPosition(input, pos){
        if (pos < 0) {
            pos = input.value.length;
        }

        if (input.setSelectionRange) { //兼容火狐,谷歌
            /* setTimeout(function () {
                input.setSelectionRange(pos, pos);
                input.focus();
            }, 0); */
        } 
        else if (input.createTextRange) { //兼容IE
            var rng = input.createTextRange();
            rng.move('character', pos);
            rng.select();
        }
    }

    onChange(e) {
        this.props.onChange && this.props.onChange(e)
    } 

    render() {
        return (
            <span class="h-input-wrapper">
                <input class="h-input" style={this.props.style} defaultValue="" type="text" onChange={this.onChange} ref={(input) => this.input = input} />
            </span>
        )
    }
}

export default HInput