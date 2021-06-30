import React, { Component } from 'react'
import { connect  } from "react-redux";
class Appdata extends Component {
    state={
        name:"",
        age:"",
        belt:""
    }
    handlechange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handlesubmit = (e) => {
        e.preventDefault();
        this.props.addPost(this.state);
        this.props.changing();
        // this.props.addninja(this.state);
        this.setState({
             name: "",
            age: "",
            belt: ""
        })
    }
    
    render() {
        console.log(this.props,"in App data in ");
       
        return (
            <div>
             <label> Name </label>
             <form onSubmit={this.handlesubmit}>
            <input  type="text" id="name"value={this.state.name} onChange={this.handlechange}/>   
             <label> Age </label>
             <input  type="text" value={this.state.age} id="age" onChange={this.handlechange}/>   
             <label> Belt </label>
             <input  type="text" id="belt" value={this.state.belt} onChange={this.handlechange}/>   
             <button type="submit" >submit</button>
           
             </form>
              </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return {
        post:state.post 
    }
}
const addDataToProps=(dispatch)=>{
    return{
        addPost:(body)=>dispatch({type:"ADD_POST",body:body})
    }
}
export default connect(mapStateToProps,addDataToProps)(Appdata);