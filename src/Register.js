import axios from "axios";
import React from "react";

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
      firstName:'',
      lastName:'',
      email:'',
      password:''
      }

    onRegisterClick = ()=>{
      axios.post('localost').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
    }

    onFirstNameChange = (evt)=>{
     this.setState( {firstName:evt.target.value})
    }
    onLastNameChange = (evt)=>{
     this.setState( {LastName:evt.target.value})
    }
    onEmailChange = (evt)=>{
     this.setState( {email:evt.target.value})
    }
    onPwdChange = (evt)=>{
     this.setState( {password:evt.target.value})
    }

    render() { 
        return ( <div style={{margin:'10px'}} className="col-md-3">
          <h1>Register</h1>
          <hr/>
          <div className="mb-3">
            <label for='fname' className="form-lable" >Firstname</label>
            <input id="fname" onChange={this.onFirstNameChange} type={'text'} className='form-control'></input>
            </div>
            <div className="mb-3">
            <label for='lname' className="form-lable" >Lastname</label>
            <input id="lname"  onChange={this.onLastNameChange} type={'text'} className='form-control'></input>
            </div> <div className="mb-3">
            <label for='email' className="form-lable" >email</label>
            <input id="email" onChange={this.onEmailChange} type={'text'} className='form-control'></input>
            </div>
            <div className="mb-3">
            <label for='pwd' className="form-lable" >password </label>
            <input id="pwd"  onChange={this.onPwdChange} type='password' className='form-control'></input>
            </div>
            <button onClick={this.onRegisterClick} className="btn btn-danger">Register</button>
        </div>);
    }
}
 
export default Register;