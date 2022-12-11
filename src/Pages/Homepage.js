import React from 'react'
import Form from '../Components/Form'
import Title from '../Components/Title'
import AuthButton from '../Components/AuthButton'
import { useNavigate } from 'react-router'

const Homepage = ({setLinkedInPostData}) => {
  let navigate = useNavigate();
  
    return (
    <div>
        <Title />
        <Form  setLinkedInPostData={setLinkedInPostData}/>
        <AuthButton />
        <div className='flex justify-center'>
            <button className='bg-li-blue px-5 py-2 rounded-md text-white hover:bg-li-blue-hover' onClick={() => navigate('/playground')}>Go to the playground</button>
        </div>
    </div>
  )
}

export default Homepage