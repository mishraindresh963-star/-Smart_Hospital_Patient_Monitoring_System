import React, {useEffect, useState} from 'react';
import API, {setAuthToken} from '../api';

export default function Dashboard(){
  const [patients,setPatients] = useState([]);
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(token) setAuthToken(token);
    API.get('/patients')
      .then(r=> setPatients(r.data))
      .catch(e=> console.log('error', e));
  },[]);
  return (
    <div>
      <h3>Dashboard</h3>
      <p>List of patients (requires login)</p>
      <ul>
        {patients.map(p => (
          <li key={p._id}>{p.user?.name} — {p.age || 'age N/A'} — {p.contact || 'contact N/A'}</li>
        ))}
      </ul>
    </div>
  );
}
