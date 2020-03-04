import React from 'react';
import '../../App.css';

export class Lists extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(store){
        
        this.props.setStore(store);
        this.props.setDeltaView('view');
        
    }
    
    render() {
            return(
                <div className="listBox">
                    <div className="listBoxTitle">
                        <h3>Shopping <br/> Lists</h3>
                    </div>
                    <div className="listButtonArray">
                    {this.props.storesArray().map(store => {
                        return (
                            <div >
                                <button className="listButton"  
                                onClick={(e) => this.handleClick(store)}><p className="buttonText" >{store}</p></button>
                            </div>
                        );
                    })}
                    <div>
                        <div className="listButton">
                            <p className="buttonText" onClick={(e) => this.handleClick('master')}>Master List</p>
                        </div> 
                    </div> 
                    </div> 
                </div>
            );
        }
    
};