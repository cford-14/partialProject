//ADD MANAGE LIST MODULE
//DELETE LIST COMPLETELY
//REORDER LISTS

import React from 'react';
import '../../App.css';

export class Manage extends React.Component {
    render() {
        return(
            
            <div className="Box" >
                <div className="boxTitle">
                    <h3>Manage Lists</h3>
                </div>
                <div className="twoColumns">
                    <div id="reorder">
                        <p className="subtitle">reorder lists</p>
                        <ul>
                        {this.props.storesArray().map(store => {
                        return (
                            <li className="reorder">{store}</li>
                        )})}
                        </ul>
                    </div>
                    <div id="deleteList">                            
                        <p className="subtitle">delete list</p>
                        <form>
                            <label for="deleteList">select list to delete:<br/></label>
                            
                            <select id="deleteList" name='deleteList' className='selectBox'>
                                <option value='null'>select list</option>
                                {this.props.storesArray().map(store => {
                                    return (
                                        <option value={store}>{store}</option>
                                )})}
                            </select>
                            <button className="submit" type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}