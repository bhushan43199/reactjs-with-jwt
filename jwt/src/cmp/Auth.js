import React, { Component } from 'react';

class Auth extends Component {

    login() {
       // alert("login")
       // we got our value in console 
        console.warn(this.state);
        
        // now sending value to api 
        fetch('https://reqres.in/api/login',
            {
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Content -Type":"application/json"
                },
                body:JSON.stringify(this.state)
            }
            )
    }
    render() {

        return (
            <div>
                <h1>Auth Component </h1>
                <div>
                    <input type="text" onChange={(e)=>{this.setState({email:e.target.value})}}>

                    </input>
                    <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}}>

                    </input>
                    <button onClick={() => this.login()}>
                        Login
                      </button>
                </div>

            </div>
        );
    }
}

export default Auth;