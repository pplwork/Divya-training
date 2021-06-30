import React, { Component } from 'react'
export default class Ninja extends Component {

    render() {

        const {name,age,belt}=this.props.ninja;
        console.log(this.props);
        return (
            <div>
               <div>Name:{name}</div>
               <div>Age:{age}</div> 
               <div>Belt: {belt}</div>
            </div>
        )
    }
}
