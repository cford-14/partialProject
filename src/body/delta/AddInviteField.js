import React from 'react';
import '../../App.css';

export class AddInviteField extends React.Component {
    render() {
        return(
            <div>
                <div className="form">
                    <form>
                        <input id="inviteName" type="text" name="inviteName" placeholder="friend's name" />
                    </form>
                    <form>
                        <input id="inviteEmail" type="text" name="inviteEmail" placeholder="friend's email address" />
                    </form>
                    <form>
                        <div className='stackedRadio'>
                            <div className='radioOption'>
                                <input id="contribute" type="radio" name="inviteStatus" value="contribute" /><p className='radioLabel'>view and edit</p> 
                            </div>
                            <div className='radioOption'>
                            <input id="viewOnly" type="radio" name="inviteStatus" value="view" /><p className='radioLabel'>view only</p>
                            </div>
                        </div>
                        
                        
                    </form>
                </div>
            </div>
        );
    }
};