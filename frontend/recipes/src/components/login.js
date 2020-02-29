import React, { Component } from 'react'
import { Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class Login extends Component {
    constructor(props)
{
    super(props)
    this.state={
        name:'',
        password:''
    }
}
    render() {
        return (
            <div id='login'>
                <form className="loginpage">
                username: <input type="text"  onChange={(event)=>this.setState({'name':event.target.value})}/>
                <br></br>
                password:<input type='password' onChange={(event)=>this.setState({'name':event.target.value})}/>
                <br></br> <Link to='admin'><Button type='button' onClick=" ">Login</Button></Link> 
               <Link to='/signup'><p>create new account </p></Link> 
                </form>
            </div>
        )
    }
}
