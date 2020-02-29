import React, { Component } from 'react'
import { Button, Card,CardGroup} from 'react-bootstrap';
import axios from 'axios'
import {Link} from 'react-router-dom';

class Admin extends Component {
    constructor(props){
        super(props)
       this.state = {
          name: '',
          discription: '',
          image:'',
        };
      
      }
    
     
      render(){
        return(
          <div>
        Name :<input type="text" placeholder="search Recipes" onChange={(event)=> this.setState({'name':event.target.value})}  /><br></br>
       image: <input type="file" placeholder="search Recipes" onChange={(event)=> this.setState({'image':event.target.value})}  /><br></br>
       discription:<input type="text" placeholder="search Recipes" onChange={(event)=> this.setState({'discription':event.target.value})}  /> <br></br>
           <input type="text" placeholder="search Recipes" onChange={(event)=> this.props.searchInfo(event.target.value)}  /><br></br>
           </div>
           
        )
      }
    }
    
     class Adminpage extends Component {
      constructor(props) {
        super(props)
        this.state = {
          recipes: [],
          query: '',
        }
        this.refreshList=this.refreshList.bind(this);
        this.DeleteList=this.DeleteList.bind(this);
        this.searchField=this.searchField.bind(this);
      }
    
    
      textshow(recipes)
      { 
      
        axios.post('http://127.0.0.1:8000/recipes/post',recipes) .then(res =>{
          this.refreshList();
        });
      }
      refreshList() {
        axios.get("http://127.0.0.1:8000/recipes/")
          .then(res => {
            this.setState({
              recipes: res.data
            })
            
          })
      }
      DeleteList(pk)
    {
      axios.delete('http://127.0.0.1:8000/recipes/delete/'+pk.toString()+'/').then(res =>{
        this.refreshList();
      })
    }
    componentDidMount()
    {
      this.refreshList();
    }
    searchField(text) 
    {
      this.setState({
        query: text
      })
    }
    
    
    
      render() {
        return (
          <div style={{marginTop:'100px'}}>
        
          <Admin recipesinfo={this.textshow} searchInfo={this.searchField}/>
          <div style={{display: 'flex',justifyContent:'flex-start',flexDirection:'row', flexWrap: "wrap"}}>
          {this.state.recipes.filter((bname) => {
              return bname.name.toLowerCase().includes(this.state.query.toLowerCase())
            })
           .map((item,index)=>(
            
            <CardGroup style={{ paddingTop: 20, paddingLeft: 10, paddingRight: 10, }} key={index}>
              <Card style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20,background:'none' }}>
              <Card.Img variant="top" style={{ width: 200, height: 200 }} src={item.image} />  
                <Card.Body>
                  <Card.Title style={{ flexWrap: "nowrap", width: 200 }} >{item.name} </Card.Title>
                  <Card.Text style={{ flexWrap: "nowrap", width: 200 }} >  {item.discription}  </Card.Text>
                  <Card.Text>
                     <Link to="/details" target="#blank">  <Button >More De..</Button></Link>
                    
                     </Card.Text> 
                    
               </Card.Body>
              </Card>
            </CardGroup>
          
          
            ))}
          </div>
          </div>
        
        )
      }
    }
    export default  Adminpage;
