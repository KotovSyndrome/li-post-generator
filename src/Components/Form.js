import React, { useState } from 'react'
// import axios from 'axios'

const Form = () => {
    const [formValues, setFormValues] = useState({
        prompt: '',
        modifier: 'none',
        level: 0
    })

    const handleInput = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const submitPost = () => {
        // convert level to number
        console.log('write a linked post about ....... that is very ____ ')
    }


  return (
    <div className='bg-darkmode-grey w-full h-full rounded-lg mt-10'>
        <div className='flex flex-col items-center pt-6'>

            <label className='text-white text-2xl'>Write a post about:</label>
            <textarea value={formValues.prompt} name='prompt' onChange={handleInput} placeholder='Ex. Today I used an API for the first time after 6 months of learning JavaScript...' className='w-10/12 h-32 bg-gray-600 text-white placeholder:text-slate-300 rounded-md mt-2'></textarea>

            <label className='text-white text-2xl mt-6'>Add some "special sauce" to your post:</label>
            <select className='w-48 mt-2 rounded-md bg-blue-200' name='modifier' value={formValues.modifier} onChange={handleInput}>
                <option value='none'>None</option>
                <option value='inspirational'>Inspirational</option>
                <option value='cringey'>Cringeyness</option>
                <option value='platitude'>Platitudinousness</option>
                <option value='arrogant'>Alpha male CEO</option>
                <option value='philosophical'>Philosophization</option>
            </select>

            <label htmlFor="default-range" className="block mb-2 text-lg font-medium text-white dark:text-white mt-6">Default range</label>
            <input id="default-range" type="range" value={formValues.level} min="0" max="5" step="1" name='level' onChange={handleInput} className="w-8/12 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>

            <button className='bg-li-blue rounded-full px-5 p-1 drop-shadow-md mt-10 text-slate-100 w-6/12 text-xl' onClick={submitPost}>
                Create Post
            </button>
        </div>
    </div>
  )
}

export default Form

