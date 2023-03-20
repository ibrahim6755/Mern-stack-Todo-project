import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
   <>
   <div className="row">
    <div className="col-md-6">
    <h1 className='mt-5'>Welcome to Todo App</h1>
    <p className='text-center'>If you want to create Todo First Signup and if already have a account then Login..</p>
    <div className="display d-flex align-items-center justify-content-center">
    <Link to="/login"><h2 className='conatiner text-center mt-5 active'>Login</h2></Link>
     <Link to="/signup"><h2 className='conatiner text-center mt-5 ms-5'>Signup</h2></Link>
    </div>
   </div>
   
    </div>
   </>
  )
}

export default HomePage