import React from 'react';
import '../../App.css';

export class AddField extends React.Component {
    constructor(props){
        super(props); 
    }

    render() {
        return(
            <div className="form">
                <form>
                    <input id="item" type="text" name="item" placeholder="item name" />
                </form>
                <form>
                    <input id="quantity" type="number" name="quantity" placeholder="#" />                    
                </form>
                <form>
                    <input id="units" type="text" name="units" placeholder="units" />                    
                </form>
                <textarea name="message" rows="1" cols="20" placeholder="notes"></textarea>                    
                <select name="lists" size="3"   multiple>
                {this.props.storesArray().map(store => {
                        return (
                    <option value="userlist1">{store}</option>
                        )})}
                </select>
                
            </div>
        );
    }
};