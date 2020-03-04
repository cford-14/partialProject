import React from 'react';
import { AddInviteField } from './AddInviteField';
import '../../App.css';

const styleHide = {height: 0, overflow: 'hidden' };
const styleShow = {height: 'auto'};

export class NewList extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state = {
            style1: styleShow,
            style2: styleHide,
            style3: styleHide,
        }
    }
    handleClick(id){
        if (id === 'one') {
            this.setState({style2: styleShow})
        } if (id==='two') {
            this.setState({style3: styleShow})
        } 
    }
    
    render() {
        return(
            <div className="Box">
                <div className="boxTitle">
                    <h3>Create New List</h3>
                </div>
                <div className="form">
                    <form>
                        <input id="listName" type="text" name="listName" placeholder="list name" />
                    </form>
                </div>
                <div >
                    <p className="subtitle">invite contributors</p>
                </div>
                <div style={this.state.style1} className='formFields'>
                    <AddInviteField />
                    <button className="addField" type="button" onClick={(e) => this.handleClick('one')}>+</button>
                </div>
                <div style={this.state.style2} className='formFields'>
                    <AddInviteField />
                    <button className="addField" type="button" onClick={(e) => this.handleClick('two')}>+</button>
                </div>
                <div style={this.state.style3} className='formFields'>
                    <AddInviteField />
                </div>
                <div>
                    <button className="submit" type="submit" >submit</button>
                </div>
            </div>

        )
    }
};