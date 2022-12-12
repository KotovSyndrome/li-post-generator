import React from 'react'
import Form from '../Components/Form'
import Title from '../Components/Title'

const Homepage = ({setLinkedInPostData}) => {
  
    return (
    <div>
        <Title />
        <Form  setLinkedInPostData={setLinkedInPostData}/>
    </div>
  )
}

export default Homepage