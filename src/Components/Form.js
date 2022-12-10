import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [formValues, setFormValues] = useState({
        prompt: '',
        modifier: '',
        level: 0
    })

    const submitPost = () => {
        console.log('write a linked post about ....... that is very ____ ')
    }


  return (
    <div className='bg-darkmode-grey w-full h-full rounded-lg mt-10'>
        <div className='flex flex-col items-center pt-6'>

            <label className='text-white text-2xl'>Write a post about:</label>
            <textarea placeholder='Ex. Today I used an API for the first time after 6 months of learning JavaScript...' className='w-10/12 h-32 bg-gray-600 text-white placeholder:text-slate-300 rounded-md mt-2'></textarea>

            <label className='text-white text-2xl mt-6'>Add some "special sauce" to your post:</label>
            <select className='w-40 mt-2 rounded-md bg-blue-200'>
                <option>Inspirational</option>
                <option>Cringeyness</option>
                <option>Platitudinousness</option>
                <option>Alpha male CEO</option>
                <option>Philosophization</option>
            </select>

            <label for="default-range" class="block mb-2 text-lg font-medium text-white dark:text-white mt-6">Default range</label>
            <input id="default-range" type="range" value="50" class="w-8/12 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input>

            <button className='bg-li-blue rounded-full px-5 p-1 drop-shadow-md mt-10 text-slate-100 w-6/12 text-xl' onClick={submitPost}>
                Create Post
            </button>
        </div>
    </div>
  )
}

export default Form