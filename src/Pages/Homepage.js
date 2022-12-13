import React from 'react'
import Form from '../Components/Form'
import Title from '../Components/Title'
import CreatedBy from '../Components/CreatedBy'

const Homepage = ({setLinkedInPostData}) => {
  
    return (
    <div>
        <Title />
        <Form  setLinkedInPostData={setLinkedInPostData}/>
        <CreatedBy />
    </div>
  )
}

export default Homepage