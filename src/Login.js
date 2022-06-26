import React from 'react'



class Login extends React.Component {
    
    state = { 
        user:{
            email:"",password:""
        }
     }
    render() { 
        return <div className='col-md-4 m-3'>
                <h1>Login</h1>
                <hr />

            {/* email */}
            <div className="mb-3">
            <label for='email' className="form-lable" >Email </label>
            <input id="email" name="email" type='email' className='form-control'></input>
            </div> 

            {/* password */}
            <div className="mb-3">
            <label for='pwd' className="form-lable" >Password </label>
            <input id="pwd" name="password" type='password' className='form-control'></input>
            </div>  

            <button className='btn btn-primary'>
                    Login
            </button>
        </div>  
    }



}

 
export default Login;