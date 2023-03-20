import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../imgs/overlay.jpg'
import Styles from '../pages/HomePageStyles.css'

function HomePage() {
  return (
   <>
   <div className= {`bg ${Styles.bg}`}>
      <img className='w-100' src={bg} alt="" />
    </div>
   <div className="row">
    <div className="col-md-12 ">
    <h1 className='mt-5 text-light'>Welcome to Todo App</h1>
    <h5 className='text-center text-light'>If you want to create Todo First Signup and if already have a account then Login..</h5>
    <div className="display d-flex align-items-center justify-content-center">
    <Link to="/login"><h2 className='conatiner text-center mt-5 active text-light'>Login</h2></Link>
     <Link to="/signup"><h2 className='conatiner text-center mt-5 ps-5 text-light'>SignUp</h2></Link>
    </div>
   </div>
    </div>
   
   </>
  )
}

export default HomePage