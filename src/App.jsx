import './App.css'
import {  useEffect, useState } from 'react';
// import User from './User';

function App() {
  
  return (
      <div>
      {/* <Counter></Counter> */}
      <ExtarnalUser></ExtarnalUser>
      </div>
  );
}

function ExtarnalUser(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);

  return(
    <div style={{textAlign:'center'}}>
      <h2>Extarnal User</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name={user.name}  username={user.username} email={user.email}></User>)
      }
      {/* {
        users.map(user => <User user={user} ></User>)
      } */}
    </div>
  )
}

function User(props){
  console.log(props);
  return(
    <div style={{border:'2px solid red', margin:'20px',textAlign:'center'}}>
      <h3>Name: {props.name}</h3>
      <h4>User Name: {props.username}</h4>
      <p>Email: {props.email}</p>
    </div>
  )
}

// function Counter(){
//   const [count, setCount] = useState(0)
//   if(count < 0){
// alert(' ')
//   }
//     const increaseCount = () =>setCount(count + 1)
//     const decreaseCount = () =>setCount(count - 1)
  
//   // const increaseCount = () =>{
//   //   const newCount = count + 1;
//   //   setCount(newCount)
//   // }
//   return(
//     <div className=''>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

export default App
