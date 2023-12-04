import {useState} from 'react';

export default function LoginPage(){
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');

    const onLogin=async ()=>{
        const response = await fetch('https://jobminartask.onrender.com/login',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'},
            credentials:'include'
        })
        if(response.status===200){
            console.log(response);
            alert("Login Succesful");
        }else{
            alert('wrong credentials')
        }
    }

    return(
        <div className='register'>
            <h1>Login Page</h1>
            <form onSubmit={onLogin} className='register-content'>
                <div className='input-field-container'>
                <label htmlFor='username'>UserName</label>
                <input id='username' placeholder='Enter UserName' type="text" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
                </div>
                <div className='input-field-container'>
                <label htmlFor='password'>Password</label>
                <input id="password" placeholder='Enter Password' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <button type='submit'>Login</button>
            </form>
            <a href='/'>Return Home</a>
        </div>
    )
}