import React from 'react';
import '../../App.css';
import { AddField } from './addFields';

const styleHide = {height: 0, overflow: 'hidden' };
const styleShow = {height: 'auto'};

export class AddNew extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state = {
            style1: styleShow,
            style2: styleHide,
            style3: styleHide,
            style4: styleHide,
            style5: styleHide
        }
    }
    handleClick(id){
        if (id === 'one') {
            this.setState({style2: styleShow})
        } if (id==='two') {
            this.setState({style3: styleShow})
        } if (id === 'three') {
            this.setState({style4: styleShow})
        } if (id==='four') {
            this.setState({style5: styleShow})
        }
    }
    render() {
        return(
            <div className="addBox">
                <h3 className="boxTitle">Add to Lists</h3>
                <div style={this.state.style1} className='formFields'>
                    <AddField storesArray={this.props.storesArray} update={this.updateState}/>
                    <button className="addField" type="button" onClick={(e) => this.handleClick('one')}>+</button>
                </div>
                <div style={this.state.style2} className='formFields'>
                    <AddField storesArray={this.props.storesArray} update={this.updateState}/>
                    <button className="addField" type="button" onClick={(e) => this.handleClick('two')}>+</button>
                </div>
                <div style={this.state.style3} className='formFields'>
                    <AddField storesArray={this.props.storesArray} update={this.updateState}/>
                    <button className="addField" type="button" onClick={(e) => this.handleClick('three')}>+</button>
                </div>
                <div style={this.state.style4}className='formFields'>
                    <AddField storesArray={this.props.storesArray} update={this.updateState}/>
                    <button className="addField" type="button" onClick={(e) => this.handleClick('four')}>+</button>
                </div>
                <div style={this.state.style5}className='formFields'>
                    <AddField storesArray={this.props.storesArray} update={this.updateState}/>
                </div>


                {this.addFieldToShow}
                <div>
                    <button className="submit" type="submit" >submit</button>
                </div>
            </div>
        );
    }
}