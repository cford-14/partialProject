import React from 'react';
import '../App.css';
import { AddNew } from './addNew/AddNew';
import { Lists } from './list/Lists';
import { Nav } from './nav/Nav';
import { NewList } from './delta/NewList';
import { Manage } from './delta/Manage';
import { Share } from './delta/Share';
import { View } from './delta/ViewList';
import { Master } from './delta/MasterList';
import practiceList from '../practiceList';


const styleHide = {height: 0, overflow: 'hidden' };
const styleShow = {height: 'auto'};

export class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: practiceList,
            store: 'Publix', //change initial state
            manageStyle: styleHide,
            viewListStyle: styleHide,
            newListStyle: styleShow,
            shareStyle: styleHide,
            masterStyle: styleHide
        };
        this.storesArray=this.storesArray.bind(this);
        this.setDeltaView=this.setDeltaView.bind(this);
        this.setStore=this.setStore.bind(this);
    }
    
    storesArray() {
        let allStores = this.state.list.map(line => line.stores);
        let stores = [];
        for (let itemList of allStores) {
            for (let store of itemList) {
                if (stores.indexOf(store) === -1) {
                    stores.push(store);
                }
            }
        }
        return stores;
    }
    setDeltaView(window) {
        if (window === 'view') {
            this.setState({
                manageStyle: styleHide,
                viewListStyle: styleShow,
                newListStyle: styleHide,
                shareStyle: styleHide, 
                masterStyle: styleHide 
            })
        } if (window === 'manage') {
            this.setState({
                manageStyle: styleShow,
                viewListStyle: styleHide,
                newListStyle: styleHide,
                shareStyle: styleHide, 
                masterStyle: styleHide 
            })
        } if (window === 'new') {
            this.setState({
                manageStyle: styleHide,
                viewListStyle: styleHide,
                newListStyle: styleShow,
                shareStyle: styleHide, 
                masterStyle: styleHide
            })
        } if (window === 'share') {
            this.setState({
                manageStyle: styleHide,
                viewListStyle: styleHide,
                newListStyle: styleHide,
                shareStyle: styleShow, 
                masterStyle: styleHide 
            })
        } if (window === 'master') {
            this.setState({
                manageStyle: styleHide,
                viewListStyle: styleHide,
                newListStyle: styleHide,
                shareStyle: styleHide,
                masterStyle: styleShow 
            })
        }
    }
    setStore(storeToShow) {
        this.setState({store: storeToShow});
    }

    render() {
        return(
            <div> 
                <Nav setDeltaView={this.setDeltaView}/>

                <Lists className='listBox' storesArray={this.storesArray} setStore={this.setStore} setDeltaView={this.setDeltaView} store={this.state.store}/>

                <div className='functionBox'>
                    <div className='functiobBoxGrid'> 
                        <AddNew storesArray={this.storesArray} />
                        
                        <div style={this.state.viewListStyle}>
                            <View list={this.state.list} store={this.state.store}/>
                        </div>
                        
                        <div style={this.state.newListStyle}>
                            <NewList />
                        </div>
                        
                        <div style={this.state.manageStyle}>
                            <Manage storesArray={this.storesArray} />
                        </div>
                        
                        <div style={this.state.shareStyle}>
                            <Share storesArray={this.storesArray}/>
                        </div>
                        <div style={this.state.masterStyle} >
                            <Master list={this.state.list}/>
                        </div>
                    </div>
                </div>
            </div>                
        );
    }
}