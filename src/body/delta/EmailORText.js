import React from 'react';
import '../../App.css';

export class AddContactField extends React.Component {
    render() {
        return(
            <div className="form">
                    <form>
                        <input id="shareName" type="text" name="shareName" placeholder="friend's name" />
                    </form>
                    <form>
                        <input id="shareEmail" type="text" name="shareEmail" placeholder="friend's email address" />
                    </form>
                    <p>OR</p>
                    <form>
                        <input id="shareobile" type="text" name="shareMobile" placeholder="friend's mobile number" />
                    </form>
                </div>
        )
    }
}