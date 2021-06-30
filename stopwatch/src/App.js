import React, { Component } from 'react'
import "./App.css"
export default class App extends Component {
   state = {
     ms: 0,
     s: 0,
     m: 0,
     h: 0,
    running : true,
    disabled:false,
    takelap:[]
   };
    takelap=()=>{
      const obj={
        ms:this.state.ms%1000,
        s:Math.floor(this.state.ms/1000)%60,
        m:this.state.s%60,
        h:Math.floor(this.state.m/60)
      }
      
      this.setState({
        takelap:[...this.state.takelap,obj]
      })
      console.log(this.state.takelap);
    }
   run=()=>{
        
       let milis=this.state.ms+10,sec=Math.floor(this.state.ms/1000),mnts=Math.floor(this.state.s/60),hrs=Math.floor(this.state.m/60);
       this.setState({
        ms:milis,
        s:sec,
        m:mnts,
        h:hrs
       })
     }
     start=()=>{
       this.setState({disabled:true})
      this.setState({
        running: setInterval(() => {
        this.run();
       }, 10)})

     }
   
    stop = () => {
        this.setState({
          disabled: false
        })
     this.setState({running:clearInterval(this.state.running)});
      // this.state.running=false;

   }
  render() {
   
    return (
      <div>
        <div className="heading">
        <h1>Stopwatch</h1>
      </div>
      <div className="center">
      <h2>{ `${this.state.h}:${this.state.m}:${this.state.s}:${this.state.ms%1000}`}</h2>
      </div>
        <div className="buttons">
     <button type="button" className="btn btn-primary" onClick={this.start} disabled={this.state.disabled}>Start</button>
     <button type="button" className="btn btn-primary" onClick={this.takelap} disabled={!this.state.disabled}>Lap</button>
     <button type="button" className="btn btn-primary" onClick={this.stop}>Pause</button>
     <button type="button" className="btn btn-danger" 
     onClick={()=>{
       this.stop();
       this.setState({
                ms: 0,
                s: 0,
                m: 0,
                h: 0,
                running: true,
                disabled: false,
                takelap: []
       })}}>reset</button>
        </div>
        <div className="center">
          {this.state.takelap.map((ele,id)=>{
            return(
              <h3 key={id.toString()}>{`${ele.h}:${ele.m}:${ele.s}:${ele.ms}`}</h3>
            )
          })}
        </div>
      </div>
          )
  }
}
