import React, {useState} from 'react';
import API, {setAuthToken} from '../api';

export default function Login(){
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [msg,setMsg] = useState('');

  async function submit(e){
    e.preventDefault();
    try{
      const res = await API.post('/auth/login', {email,password});
      const {token,user} = res.data;
      localStorage.setItem('token', token);
      setAuthToken(token);
      setMsg('Logged in as ' + user.name);
    }catch(err){
      console.error(err);
      setMsg(err?.response?.data?.error || 'Login failed');
    }
  }

  return (
    <div style={{maxWidth:420}}>
      <h3>Login</h3>
      <form onSubmit={submit}>
        <div><input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} required/></div>
        <div><input placeholder='Password' type='password' value={password} onChange={e=>setPassword(e.target.value)} required/></div>
        <button>Login</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
