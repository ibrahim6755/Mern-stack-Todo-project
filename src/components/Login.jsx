import React from 'react'
import { Link } from 'react-router-dom';
function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
           <div className="display d-flex align-items-center justify-content-center">
           <h2 className='conatiner text-center my-5 active'>Login</h2>
            <h2 className='conatiner text-center my-5 ms-5'>Signup</h2>
           </div>
            
            <form onSubmit={handleSubmit} className='container'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <Link to='/todo' type="submit" class="btn btn-primary">Submit</Link>
            </form>
        </>
    )
}

export default Login