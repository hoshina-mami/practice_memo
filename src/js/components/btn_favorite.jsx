// @flow

// src/components/btn_favorite.jsx
import React from 'react';
import { Component } from 'react';

type Props = {
    data: boolean
};

type State = {
    isFavorited: boolean
};

export default class BtnFavorite extends Component {
    state: State;
    selectHeart: Function;

    constructor(props: Props) {
        super(props);

        //bind
        this.selectHeart = this.selectHeart.bind(this);

        //init state
        this.state = {
            isFavorited: props.data != null ? props.data : false
        };
    }

    render() {
        var favoriteClass = this.state.isFavorited == true ? 'btn_like_active' : 'btn_like';
        return (
            <div className={favoriteClass} onClick={this.selectHeart}></div>
        )
    }

    selectHeart(e: Event) {
        this.setState({isFavorited: this.state.isFavorited ? false : true });
    }
};