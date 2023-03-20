import React from 'react'
import { Link } from 'react-router-dom';
function SignUp() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <h1 className='text-warning bg-dark p-3 mb-5'style={{marginTop:'0px'}}>SignUp</h1>
            <form onSubmit={handleSubmit} className='container'>
                <div className="mb-3 w-75">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Full Name'/>
                </div>
                <div className="mb-3 w-75">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='User Name'/>
                </div>
                <div className="mb-3 w-75">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email '/>
                </div>
                <div className="mb-3 w-75">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'/>
                </div>
                <Link to='/todo' type="submit" className="btn  text-warning bg-dark">SignUp</Link>
            </form>
        </>
    )
}

export default SignUp