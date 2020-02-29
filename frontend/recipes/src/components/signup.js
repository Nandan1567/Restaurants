import React, { Component } from 'react'
import { Button, Form} from 'react-bootstrap';
export default class Signup extends Component {
    render() {
        return (
            <div id="signup">
             <form className="signuppage">
                username: <input type="text"  onChange={(event)=>this.setState({'name':event.target.value})}/>
                <br></br>
                email: <input type="text"  onChange={(event)=>this.setState({'name':event.target.value})}/>
                <br></br>
                password:<input type='password' onChange={(event)=>this.setState({'name':event.target.value})}/>
                <br></br>  
              confirm password:<input type='password' onChange={(event)=>this.setState({'name':event.target.value})}/>
                <br></br> 
                <Button type='button' onClick=" ">Signup</Button>
                
                </form>
            </div>
        )
    }
}
