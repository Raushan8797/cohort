import React from 'react'
import { useState } from 'react'


const Web = () => {
    const [formdata, setFormData] = useState({})
    console.log(formdata);
    
  return (
    <div className='flex flex-col gap-5 w-60 pl-10 pt-3'>
 <input
    onChange={(e) =>
      setFormData({ ...formdata, name: e.target.value })
    }
    className="border-2"
    type="text"
    placeholder="Name"
  />

  <input
    onChange={(e) =>
      setFormData({ ...formdata, email: e.target.value })
    }
    className="border-2"
    type="text"
    placeholder="Email"
  />
    <input
     onChange={(e) =>
      setFormData({ ...formdata, passward: e.target.value })
    }
    className='border-2'
    type="password"
    placeholder='password'/>
    <button className='border-2'>Submit</button>
    <h1>This is name - {name}</h1>
    </div>
  )
}

export default Web
