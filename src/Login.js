import React from 'react'
import userService from './service/userService'
import ShouldRender from './utils/ShouldRender'



class Login extends React.Component {
    
    state = { 
        user:{
            email:"",password:""
        },
        error:false
     }

    onTextChange = (evt)=>{
        const newUser = {...this.state.user,[evt.target.name]:evt.target.value}
        this.setState({user:newUser})
    }

    onLogin =async ()=>{
        try{
            const res = userService.login(this.state.user)
            userService.saveUser(res.data)
            window.location.assign('/users')
            console.log(res.data)
            }
        catch(error){
            this.setState({error:true})
            console.log(error)
        } 
           
    }

    render() { 
        return <div className='col-md-4 m-3'>
                <h1>Login</h1>
                <hr />

            {/* alert for wrong credentials */}

            <ShouldRender cond={this.state.error}>
                <div className='alert alert-danger'>Wrong Username or Password</div>
            </ShouldRender>

            {/* email */}
            <div className="mb-3">
            <label for='email' className="form-lable" >Email </label>
            <input onChange={this.onTextChange} id="email" name="email" type='email' className='form-control'></input>
            </div> 

            {/* password */}
            <div className="mb-3">
            <label for='pwd' className="form-lable" >Password </label>
            <input onChange={this.onTextChange} id="pwd" name="password" type='password' className='form-control'></input>
            </div>  

            <button className='btn btn-primary' onClick={this.onLogin}>
                    Login
            </button>
        </div>  
    }



}

 
export default Login;