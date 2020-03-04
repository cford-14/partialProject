import React from 'react';
import '../../App.css';

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(window) {
        this.props.setDeltaView(window);
    }
    render() {
        return (
            <div className="nav" >
                <h3 className="menuOption" onClick={(e) => this.handleClick('new')}>New List</h3>
                <h3 className="menuOption" onClick={(e) => this.handleClick('manage')}>Manage Lists</h3>
                <h3 className="menuOption" onClick={(e) => this.handleClick('share')}>Share</h3>
            </div>
        );
    }
}
