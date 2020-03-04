import React from 'react';
import '../../App.css';
import { AddInviteField } from './AddInviteField';
import { AddContactField } from './EmailORText'

const styleHide = {height: 0, overflow: 'hidden' };
const styleShow = {height: 'auto'};

export class Share extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state = {
            style1: styleShow,
            style2: styleHide,
            style3: styleHide,
            emailStyle2: styleHide,
            emailStyle3: styleHide
        }
    }
    handleClick(id){
        if (id === 'one') {
            this.setState({style2: styleShow})
        } if (id==='two') {
            this.setState({style3: styleShow})
        } if (id === 'email1') {
            this.setState({emailStyle2: styleShow})
        } if (id==='email2') {
            this.setState({emailStyle3: styleShow})
        }
    }
    
    render() {
        return(
            <div className="Box">
                <div className="boxTitle">
                    <h3>Share List</h3>
                </div>
                <p className="subtitle">select list</p>
                        <form>
                            <select id="selectList" name='selectList' className='selectBox'>
                                <option value='null'>select list</option>
                                {this.props.storesArray().map(store => {
                                    return (
                                        <option value={store}>{store}</option>
                                )})}
                            </select>
                            <button className="submit" type="submit">submit</button>
                        </form>
                <div>
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
                    <p className="subtitle">share via email or text</p>
                </div>
                <div className='formFields' style={this.state.style1}>
                    <AddContactField />
                    <button className="addField" type="button" onClick={(e) => this.handleClick('email1')}>+</button>
                </div>
                <div className='formFields' style={this.state.emailStyle2}>
                    <AddContactField />
                    <button className="addField" type="button" onClick={(e) => this.handleClick('email2')}>+</button>
                </div>
                <div className='formFields' style={this.state.emailStyle3}>
                    <AddContactField />
                </div>
                <div>
                    <button className="submit" type="submit" >submit</button>
                </div>
            </div>

        )
    }
};