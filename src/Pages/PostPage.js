import React from 'react'
import PostTop from '../assets/postTop.png'
import PostBottom from '../assets/postBottom.png'
import { VscDebugRestart } from 'react-icons/vsc'
import { useNavigate } from 'react-router';


const PostPage = ({linkedInPostData}) => {
    const navigation = useNavigate();

    let tokens = linkedInPostData.split('\n').filter((element) => element.length > 0);

  return (
    <div className='max-w-lg mt-10'>
        <div className='bg-darkmode-grey w-full rounded-lg'>
            <div className='px-12 py-5'>
            <p className='text-white text-center text-3xl'>Here's your LinkedIn post!</p>
            <p className='text-slate-300 mt-2'>See how AI can help you win friends and influence people!</p>
            </div>
        </div>

        <div className='rounded-t-md mt-10'>
            <img src={PostTop} alt='linkedin-post' />
        </div>
        <div className='bg-darkmode-grey w-full '>
            <div className='flex justify-center '>
                <div className='p-4'>
                    {tokens.map((string) => {
                        return <p className='text-white'>{string}<br/><br/></p>
                    })}
                </div>
            </div>
        </div>
        <div className='bg-darkmode-grey rounded-b-xl'> 
            <img src={PostBottom} alt='linkedin-post' />
        </div>

        <div className='flex justify-center mt-8'>
            <button className='bg-li-blue px-5 py-2 rounded-md text-white hover:bg-li-blue-hover' onClick={() => navigation('/')}><VscDebugRestart className='inline text-xl' /><span className='pl-3`'>Create another post</span></button>
        </div>
    </div>  
  )
}

export default PostPage