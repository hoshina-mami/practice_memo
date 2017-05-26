// src/components/btn_favorite.jsx
import React from 'react';
import { Component } from 'react';

export default class BtnFavorite extends Component {

    constructor(props) {
        super(props);

        //bind
        this.selectHeart = this.selectHeart.bind(this);

        //init state
        this.state = {
            isFavorited: props.data
        };
    }

    render() {
        var favoriteClass = this.state.isFavorited == true ? 'btn_like_active' : 'btn_like';
        return (
            <div className={favoriteClass} onClick={this.selectHeart}></div>
        )
    }

    selectHeart(e) {
        this.setState({isFavorited: this.state.isFavorited ? false : true });
    }
};