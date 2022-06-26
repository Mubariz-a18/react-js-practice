import axios from "axios";
import React from "react";
import Error from "./utils/Error";
import ShouldRender from "./utils/ShouldRender";

class Register extends React.Component {
    
    state = {
      user:{
      firstName:'',
      lastName:'',
      email:'',
      password:''
    },
      success:false,
      error:false,
      ifExists:false
      }

    onRegisterClick = ()=>{
     
      axios.post("http://localhost:9002/signup",this.state.user)
      .then((res)=>this.setState({firstName:"",lastName:"",email:"",password:"",success:true,ifExists:false,error:false}))
      .catch((err)=>{
        if(err.message.indexOf('409')>-1){
          this.setState({ifExists:true,sucess:false})
        }else{

          this.setState({error:true,success:false})
        }
      }
        )
    
    }
    invalid=()=>{
        const {firstName,lastName,email,password} = this.state.user
        return !firstName || !lastName || !email || !password
    }

    onTextChange =(evt)=>{
      const newUser = {...this.state.user,[evt.target.name]:evt.target.value}
      this.setState({user:newUser})
    }


    render() { 
        return ( 
          <div style={{margin:'10px'}} className="col-md-3">
          <ShouldRender cond={this.state.success}>
          <div className="mb-3  alert alert-success">
            Successfully Register
          </div>
          </ShouldRender>
           <ShouldRender cond={this.state.ifExists}>
            <div className="mb-3 alert alert-danger">
              user alreay exists
            </div>
          </ShouldRender>
          <ShouldRender cond={this.state.error}>
          <div className="mb-3">
            <Error/>
          </div>
          </ShouldRender>
         

          <h1>Register</h1>
          <hr/>

          {/* firstname */}
          <div className="mb-3">
            <label for='fname' className="form-lable" >Firstname</label>
            <input id="fname" name="firstName" value={this.state.firstName} onChange={this.onTextChange} type={'text'} className='form-control'></input>
            <ShouldRender cond={!this.state.user.firstName}>
            <span className="text-danger">Required</span>
            </ShouldRender>
            <ShouldRender cond={this.state.user.firstName && this.state.user.firstName.length < 3}>
            <span className="text-danger">minimum 3 letters</span>
            </ShouldRender>
            </div>

            {/* lasname */}
            <div className="mb-3">
            <label for='lname' className="form-lable" >Lastname</label>
            <input id="lname" name="lastName" value={this.state.lastName} onChange={this.onTextChange} type={'text'} className='form-control'></input>
            <ShouldRender cond={!this.state.user.lastName}>
            <span className="text-danger">Required</span>
            </ShouldRender>
            <ShouldRender cond={this.state.user.lastName && this.state.user.lastName.length < 3}>
            <span className="text-danger">minimum 3 letters</span>
            </ShouldRender>
            </div> 

            {/* email */}
            <div className="mb-3">
            <label for='email' className="form-lable" >email</label>
            <input id="email" name="email" value={this.state.email} onChange={this.onTextChange} type={'text'} className='form-control'></input>
            <ShouldRender cond={!this.state.user.email}>
            <span className="text-danger">Required</span>
            </ShouldRender>
            <ShouldRender cond={this.state.user.email && !this.state.user.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)}>
                <span className="text-danger"> Invalid email </span>
            </ShouldRender>
            </div>


            {/* password */}
            <div className="mb-3">
            <label for='pwd' className="form-lable" >password </label>
            <input id="pwd" name="password" value={this.state.password} onChange={this.onTextChange} type='password' className='form-control'></input>
            <ShouldRender cond={!this.state.user.password}>
            <span className="text-danger">Required</span>
            </ShouldRender>
            </div>
            <button onClick={this.onRegisterClick} disabled={this.invalid()} className="btn btn-danger">Register</button>
        </div>);
    }
}
 
export default Register;