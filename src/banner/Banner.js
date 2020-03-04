import React from 'react';
import '../App.css';
import image from './storefront.jpg';

export class Banner extends React.Component {
    render() {
        return(
            <div class="banner">
                <img class="storefront" src={image} alt="storefront" />
                <div class="title">
                    <h1>Project Title</h1>
                </div>
            </div>
        );
    }
}