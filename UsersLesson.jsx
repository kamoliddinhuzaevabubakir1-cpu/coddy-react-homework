import React,{useState,useEffect} from 'react';
const URL='https://jsonplaceholder.typicode.com/users';
export default function UsersLesson(){
 const [users,setUsers]=useState([]),[loading,setLoading]=useState(true),[error,setError]=useState(''),[diagnostic,setDiagnostic]=useState('');
 useEffect(()=>{let cancelled=false;fetch(URL).then(response=>{if(!response.ok)throw Error('HTTP '+response.status);return response.json();}).then(data=>{if(!cancelled)setUsers(data);}).catch(e=>{if(!cancelled)setError(e.message);}).finally(()=>{if(!cancelled)setLoading(false);});return()=>{cancelled=true;};},[]);
 async function test404(){setDiagnostic('Tekshirilmoqda…');try{const response=await fetch('https://jsonplaceholder.typicode.com/userz');console.error('GET /userz → HTTP '+response.status);setDiagnostic('GET /userz → HTTP '+response.status);}catch(e){console.error(e);setDiagnostic(e.message);}}
 return <><h1>Foydalanuvchilar</h1><p>{URL}</p><button className="secondary" onClick={test404}>404 xatosini tekshirish</button>{diagnostic && <p role="status">{diagnostic}</p>}{loading?<p role="status">Yuklanmoqda…</p>:error?<p role="alert">{error}</p>:<><p>{users.length} ta foydalanuvchi</p><div className="grid users">{users.map(user=><article className="card" key={user.id}><h2>{user.name}</h2><p>{user.email}</p><p>📍 {user.address.city}</p></article>)}</div></>}</>;
}
