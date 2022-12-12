import React, { useState } from 'react'
import axios from 'axios'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom';

const Form = ({setLinkedInPostData}) => {
    const [formValues, setFormValues] = useState({
        prompt: '',
        modifier: 'none',
        level: 0
    })
    const [loadingState, setLoadingState] = useState(false)

    const navigation = useNavigate();

    const handleInput = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const levelToWord = (level) => {
        if (level === '1') {
            return ' vaguely'
        }else if (level === '2') {
            return ' slightly'
        }else if (level === '3') {
            return ' moderately'
        }else if (level === '4') {
            return ' strongly'
        }else if (level === '5') {
            return 'n extremely'
        }    
    }

    const submitPost = async () => {
        setLoadingState(true)
        let newPrompt = ''

        if (formValues.modifier !== 'none') {
            console.log('Hit condition')
            newPrompt = formValues.prompt.concat(`. Make a${levelToWord(formValues.level)} ${formValues.modifier} and lengthy LinkedIn-style post about this.`)
        }

        const resp = await axios.post('https://backend-production-5112.up.railway.app/createPost', {
            prompt: newPrompt || formValues.prompt,
            modifier: formValues.modifier,
            modifierLevel: parseInt(formValues.level)
        }, {
            'Access-Control-Allow-Origin': '*'
        })

        // resp.data.split('\n')

        setLinkedInPostData(resp.data);
        
        navigation("/post")
    }



  return (
    <div className='bg-darkmode-grey w-full  rounded-lg mt-10'>
        <div className='flex justify-center pt-6'>
            <div className='p-4'>
                {loadingState ? <Loading/> : (
                    <div>
                        <label className='text-white text-2xl'>Write a post about:</label>
                        <textarea value={formValues.prompt} name='prompt' onChange={handleInput} placeholder='Ex. Today, I used an API for the first time after 6 months of learning JavaScript...' className='w-full h-32 bg-gray-600 text-white placeholder:text-slate-300 rounded-md mt-2'></textarea>

                        <label className='text-white text-2xl mt-6 block'>Add some "special sauce" to your post:</label>
                        <select className='w-full mt-2 rounded-md bg-blue-200' name='modifier' value={formValues.modifier} onChange={handleInput}>
                            <option value='none'>None</option>
                            <option value='inspirational'>Inspirational</option>
                            <option value='cringey'>Cringey</option>
                            <option value='arrogant'>Arrogant</option>
                            <option value='philosophical'>Philosophical</option>
                        </select>

                        <label htmlFor="default-range" className="block mb-2 text-lg font-medium text-white dark:text-white mt-6">How much sauce would you like?</label>
                        <input id="default-range" type="range" value={formValues.level} min="0" max="5" step="1" name='level' onChange={handleInput} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 "></input>

                        <button className='bg-li-blue rounded-full px-5 py-2 drop-shadow-md my-10 text-slate-100 w-full text-xl hover:bg-li-blue-hover' onClick={submitPost}>
                            Create Post
                        </button>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Form

