import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
function Login() {
    const [userName,setUserName] = useState('')
    const [password, setPassword]=useState('')

    async function submit(e){
        e.preventDefault();
        try {
            
            await axios.post("http://localhost:8000/auth/login",{
                userName,password
            })
        } catch (e) {
            console.log(e)
            
        }
    }

    return (
        <>
            <h1 className='text-warning bg-dark p-3 mb-5'style={{marginTop:'0px'}}>Login</h1>
            <form action='POST' className='container'>
                <div className="mb-3 w-75">
                    <input type="email" onChange={(e)=>{setUserName(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='User Name'/>
                </div>
                <div className="mb-3 w-75">
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} className="form-control" id="exampleInputPassword1" placeholder='Password'/>
                </div>
                <input type="submit" onClick={submit}/>
                <Link to='/todo' type="submit" className="btn  text-warning bg-dark">Login</Link>
            </form>
        </>
    )
}

export default Login