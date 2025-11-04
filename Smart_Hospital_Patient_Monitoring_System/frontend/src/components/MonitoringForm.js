import React, {useState} from 'react';
import API from '../api';

export default function MonitoringForm(){
  const [patientId,setPatientId] = useState('');
  const [heartRate,setHeartRate] = useState('');
  const [spo2,setSpo2] = useState('');
  const [temp,setTemp] = useState('');
  const [bp,setBp] = useState('');
  const [msg,setMsg] = useState('');

  async function submit(e){
    e.preventDefault();
    try{
      const res = await API.post('/vitals', {
        patientId, heartRate: Number(heartRate), spo2: Number(spo2), temperature: Number(temp), bloodPressure: bp
      });
      setMsg('Saved vital id: ' + res.data._id);
    }catch(err){
      console.error(err);
      setMsg(err?.response?.data?.error || 'Failed');
    }
  }

  return (
    <div style={{maxWidth:520}}>
      <h3>Submit Vitals</h3>
      <form onSubmit={submit}>
        <div><input placeholder='Patient ID' value={patientId} onChange={e=>setPatientId(e.target.value)} required/></div>
        <div><input placeholder='Heart Rate' value={heartRate} onChange={e=>setHeartRate(e.target.value)} /></div>
        <div><input placeholder='SpO2' value={spo2} onChange={e=>setSpo2(e.target.value)} /></div>
        <div><input placeholder='Temperature' value={temp} onChange={e=>setTemp(e.target.value)} /></div>
        <div><input placeholder='Blood Pressure (e.g. 120/80)' value={bp} onChange={e=>setBp(e.target.value)} /></div>
        <button>Submit</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
