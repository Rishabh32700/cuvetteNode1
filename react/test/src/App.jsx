import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/api/users").then((data)=>{
      return data.json()    
    }).then((data)=>{
        console.log(data);
        setUsers(data)
    })
  }, [])

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

            </div>
            </>
          )
        })
      }
    </>
  )
}

export default App
