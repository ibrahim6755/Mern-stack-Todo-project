import React, { useState } from 'react'
import axios from 'axios';

function SignUp() {

  const [fullName, setFullName] = useState('');
const [userName, setUserName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
/********************************* */

const baseUrl = 'http://localhost:8000/v1'
const addUser = (fullName, userName, email, password,) => {
  // Make a POST request to the /auth/register endpoint with user data
  axios.post(`${baseUrl}/auth/register`, {
      fullName,
      userName,
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      setFullName('');
      setUserName('');
      setEmail('');
      setPassword('');
      
    })
    .catch((error) => {
      console.log(error);
    });
};






  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'fullName') {
      setFullName(value);
    } else if (id === 'userName') {
      setUserName(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event)=>{
    event.preventDefault();
    addUser(fullName, userName, email, password);
  }

  return (
    <>
      <h1 className='text-warning bg-dark p-3 mb-5' style={{ marginTop: '0px' }}>SignUp</h1>
      <form onSubmit={handleSubmit} className='container'>
        <div className="mb-3 w-75">
          <input type="text" className="form-control" onChange={handleInputChange} id="fullName" aria-describedby="emailHelp" placeholder='Full Name' />
        </div>
        <div className="mb-3 w-75">
          <input type="text" className="form-control" onChange={handleInputChange} id="userName" aria-describedby="emailHelp" placeholder='User Name' />
        </div>
        <div className="mb-3 w-75">
          <input type="email" className="form-control" onChange={handleInputChange} id="email" aria-describedby="emailHelp" placeholder='Email ' />
        </div>
        <div className="mb-3 w-75">
          <input type="password" className="form-control" onChange={handleInputChange} id="password" placeholder='Password' />
        </div>
        <button type="submit" className="btn  text-warning bg-dark">SignUp</button>
      </form>
    </>
  );
}

export default SignUp;
