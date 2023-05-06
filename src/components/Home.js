import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({getProfile}) => {
  const navigate=useNavigate();
  return (
    <div>
        <h1>This is Home page</h1>
        <button onClick={()=>{navigate('/Contact')}}>GetContact</button>
        <button onClick={getProfile}>GetProfile</button>

    </div>
  )
}

export default Home