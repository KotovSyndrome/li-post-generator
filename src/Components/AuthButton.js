import React from 'react'
import { BsLinkedin } from 'react-icons/bs'

const AuthButton = () => {
  return (
    <div className='mt-12'>
        <div className='flex justify-center'>
            <button className='bg-li-blue px-3 py-2 text-white hover:bg-li-blue-hover'><BsLinkedin className='text-white inline-block text-3xl'/><span className='pl-2'>Sign with LinkedIn</span></button>
        </div>
        <div className='text-slate-300 mt-2 text-sm text-center'> Share posts directly to your network!</div>
        
    </div>
  )
}

export default AuthButton