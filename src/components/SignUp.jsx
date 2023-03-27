import React, { useState } from 'react'
function SignUp() {

    const [formData, setFormData] = useState({
        fullName:'',
        userName:'',
        email:'',
        password:''
    })

    
  const handleInputChange = (event) => {
    const { fullName, value } = event.target.value;
    setFormData({ ...formData, [fullName]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    const userData = {};
    formData.forEach((value, key) => {
      userData[key] = value;
    });
  
    // Make API request to save user data
    const response = await fetch('http://localhost:8000/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
  
    if (response.ok) {
      // handle success
      console.log('User data saved successfully');
    } else {
      // handle error
      console.error('Error saving user data');
    }
  };
    return (
        <>
        <h1 className='text-warning bg-dark p-3 mb-5'style={{marginTop:'0px'}}>SignUp</h1>
            <form onSubmit={handleSubmit} className='container'>
                <div className="mb-3 w-75">
                    <input type="text" className="form-control" value={formData.fullName}  onChange={handleInputChange} id="fullName" aria-describedby="emailHelp" placeholder='Full Name'/>
                </div>
                <div className="mb-3 w-75">
                    <input type="text" className="form-control" value={formData.userName}   onChange={handleInputChange}id="userName" aria-describedby="emailHelp" placeholder='User Name'/>
                </div>
                <div className="mb-3 w-75">
                    <input type="email" className="form-control" value={formData.email}  onChange={handleInputChange} id="email" aria-describedby="emailHelp" placeholder='Email '/>
                </div>
                <div className="mb-3 w-75">
                    <input type="password" className="form-control" value={formData.password}  onChange={handleInputChange} id="password" placeholder='Password'/>
                </div>
                <button type="submit" className="btn  text-warning bg-dark">SignUp</button>
            </form>
        </>
    )
}

export default SignUp