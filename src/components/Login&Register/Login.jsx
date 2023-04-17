import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {loginAccount} = useContext(AuthContext)
    const [error,setError] = useState('')
    const navigate =useNavigate()
    const location = useLocation()
    console.log(location)

    const from = location.state?.from.pathname || '/'
    
    const handleLogin=(event)=>{
        event.preventDefault()
        const form = event.target 
        const email = form.email.value 
        const password = form.password.value 
      
        loginAccount(email,password)
        .then(result =>{
            console.log(result)
            navigate(from, { replace: true })
            form.reset()
        })
        .catch(error=>{
            console.log(error)
            form.reset()
            setError(error.message)
        })


    }
    return (
        <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Login</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="text" placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              
              <div className="form-control mt-6">
                <button className="btn btn-warning">Login</button>
              </div>
              <p><small>Dont you have Account? <Link to='/register'>Register</Link></small></p>
              <p className='text-red-400'><small>{error}</small></p>

            </div>
          </div>
        </div>
      </form>
    );
};

export default Login;