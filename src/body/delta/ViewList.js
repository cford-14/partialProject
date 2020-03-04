import React from 'react';
import '../../App.css';


export class View extends React.Component {
    render() {
        if (this.props.store === 'master') {
            return(
                <div className="Box" >
                    <div className="boxTitle">
                        <h3>Master List</h3>
                </div>
                    <table style={{margin: "5%"}}>
                        <tr>
                            <th>item</th>
                            <th>quantity</th>
                            <th>units</th>
                            <th>notes</th>
                            <th>stores</th>
                        </tr>
                    {this.props.list.map(line => {
                            return (
                                <tr>
                                    <td>{line.item}</td>
                                    <td style={{textAlign: "center"}}>{line.quantity}</td>
                                    <td>{line.units}</td>
                                    <td>{line.notes}</td>
                                    <td>{line.stores}</td>
                                </tr>
                            )
                        }
                    )}
                    </table>
                </div>
            );
        } else {
        return(
            <div className="Box" >
                <div className="boxTitle">
                    <h3>{this.props.store}</h3>
                </div>
                <table style={{margin: "5%"}}>
                    <tr>
                        <th>item</th>
                        <th>quantity</th>
                        <th>units</th>
                        <th>notes</th>
                    </tr>
                {this.props.list.map(line => {
                    if (line.stores.indexOf(this.props.store) !=-1) {
                        return (
                            <tr>
                                <td>{line.item}</td>
                                <td style={{textAlign: "center"}}>{line.quantity}</td>
                                <td>{line.units}</td>
                                <td>{line.notes}</td>
                            </tr>
                        )
                    }
                })}
                </table>
            </div>
        );
    }
}
}