import React, { Component } from 'react';
import axios from 'axios'
export default class Details extends Component {
  constructor(props){
    super(props)
    this.state={
      recipes:[]
    }
  }
  componentDidMount(){
    axios.get("http://127.0.0.1:8000/recipes/")
    .then(res => {
      this.setState({
        recipes: res.data
      })
      
    })
}
  render() {
    return (
      <div>
      {this.state.recipes.map((item,index)=>(
      <div id="box" key={index}>
        
        <div className="image">
          <img src={item.image} width='400px' height='400px'/>
          
        </div>
        <div className="title">
          <p id="heading"> {item.name}</p>
          <div className="disp">
          <p id="descriptions">{item.discription} </p>
          </div>
          
          
        </div>
         
      </div>
      ))}
      </div>
    )
  }
}
