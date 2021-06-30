import React, { Component } from 'react'
import Ninja from "./ninja";
import  Appdata from "./Appdata";
import { connect } from "react-redux";
 class App extends Component {
 state={
   val:''
 }
 handling=()=>{
  this.setState({
    val:'slfj'
  })
 }
  render() {
    const {post}=this.props;
    
    console.log(post,"in App js");
    return (
      <div>
        <h1>My first react with redux app</h1>
       {post.map((ninja,id)=>{
        return (
          <div key={id.toString()}>
         <Ninja ninja={ninja} />
         <button  id={id}>delete</button>
         </div>)
         }
       )}
       <Appdata changing={this.handling}/>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    post:state.post
  }
}
export default connect(mapStateToProps)(App)