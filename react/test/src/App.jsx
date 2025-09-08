import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetchAllUsers()
  }, [])

  function fetchAllUsers (){
    fetch("http://localhost:8000/api/users").then((data)=>{
      return data.json()    
    }).then((data)=>{
        console.log(data);
        setUsers(data)
    })
  }

  function  getSpecificDetails (id) {
    fetch(`http://localhost:8000/api/users/${id}`).then((data)=>{
      return data.json()    
    }).then((data)=>{
        console.log(data);
    })
  }
  function  delSpecificDetails (id) {
    fetch(`http://localhost:8000/api/users/${id}`,{
      method:"DELETE"
    }).then((data)=>{
      return data.json()    
    }).then((data)=>{
        console.log(data);
        fetchAllUsers()
    })
  }

  return (
    <>
      {
        users?.map((ele)=>{
          return(
            <>
            <div key={ele._id}>
              <h1>{ele.id}</h1>
              <p>{ele.first_name}</p>
              <p>{ele.last_name}</p>
              <button onClick={()=>{
                getSpecificDetails(ele._id)
              }} >get details</button>
              <button onClick={()=>{
                delSpecificDetails(ele._id)
              }} >Delete</button>
            </div>
            </>
          )
        })
      }
    </>
  )
}

export default App
