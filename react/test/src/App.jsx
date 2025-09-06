import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/api/users").then((data)=>{
      return data.json()    
    }).then((data)=>{
        console.log(data);
        setUsers(data)
    })
  }, [])

  function  getSpecificDetails (id) {
    fetch(`http://localhost:8000/api/users/${id}`).then((data)=>{
      return data.json()    
    }).then((data)=>{
        console.log(data);
    })
  }

  return (
    <>
      {
        users?.map((ele)=>{
          return(
            <>
            <div key={ele.id}>
              <h1>{ele.id}</h1>
              <p>{ele.first_name}</p>
              <p>{ele.last_name}</p>
              <button onClick={()=>{
                getSpecificDetails(ele.id)
              }} >get details</button>
            </div>
            </>
          )
        })
      }
    </>
  )
}

export default App
