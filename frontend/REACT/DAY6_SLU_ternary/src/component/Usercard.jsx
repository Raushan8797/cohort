import React from 'react'

const Usercard = ({user}) => {
  return ( <div className='p-4 flex flex-col gap-4 border-gray-400 rounded-2xl bg-white'>
    <div className='w-50 h-55 rounded-2xl overflow-hidden '  > 
        <img className='w-full h-full' src={user.image} alt="image"/>
    </div>
    <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
    </div>
    <button className='bg-red-600 border-black rounded-3xl p-2'>Delete</button>
  </div>

  )
}

export default Usercard
  


