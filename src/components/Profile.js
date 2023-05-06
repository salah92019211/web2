import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>Welcome to your profile
     <Link to ='settings'><button>update profile</button></Link> 
     <Outlet/>
    </div>
  )
}

export default Profile