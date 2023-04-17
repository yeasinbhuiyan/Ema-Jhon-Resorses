import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { createAccount } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const confirmPassword = form.confirmPass.value


setError('')
        if (password != confirmPassword) {
            form.reset()

            return setError('Your Confirm Password is not Correct')
        }
        if(password.length && confirmPassword.length < 6){
            form.reset()

            return setError('Please Give me at least 6 digit password')
        }
        createAccount(email, password)
            .then(result => {
                const logged = result.user
                console.log(logged)
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
                setError(error.messaged)
                form.reset()

            })

    }


    return (
        <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Register</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='confirmPass' type="password" placeholder="Confirm Password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Register</button>
                        </div>
                        <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                        <p className='text-red-400'>{error}</p>

                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;