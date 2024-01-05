'use client'
import React from 'react'
import './page.scss'
import axios from 'axios'
const page = () => {
    const [loginInput, setLoginInput] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [err, setErr] = React.useState(false);



    const login = async () => {
        try {
            const res = await axios.post(process.env.NEXT_PUBLIC_BE_URL + '/login', {
                "login": loginInput,
                "password": password
            })
        
            if(res.status === 200){
                localStorage.setItem("token", res.data.token);
                window.location.href = "/replicas"
            }
        } catch (err) {
            setErr(err);
            setTimeout(() => {
                setErr(false);
            }, 2000);
            return err;
        }
    }

  return (
    <div className='login-page-wrap'>
      <div className='login-page-block'>
        <input className='login-input' type='text' placeholder='login' value={loginInput} onChange={(event) => {setLoginInput(event.target.value)}}></input>
        <input className='login-input' type='password' placeholder='password' value={password} onChange={(event) => {setPassword(event.target.value)}}></input>
        <button className='login-button' onClick={() => {login()}}>Войти</button>
        {err ? <p>{err.response.data.message}</p> : null}
      </div>
    </div>
  )
}

export default page
