import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export const Registration = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
 
  

  const dispatch = useDispatch()
  const register = () => {
    dispatch({
      type : 'REGISTER',
      payload : {
        id : (new Date).getTime(),
        name, username, 
      }
    })
  }
  
  return (
    <form className='register'>
        <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
        <input type='text' placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
        <input type='button'  value="Register" onClick={register} />
    </form>
  )
}

 