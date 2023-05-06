import React from 'react'
import { Link } from 'react-router-dom'

const Settings = () => {
  return (
    <div>
        <Link to ='/Profile'><button>go back to Profile</button></Link>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <button>update</button>
    </div>
  )
}

export default Settings