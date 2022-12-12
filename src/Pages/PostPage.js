import React from 'react'
// import PostTop from '../assets/postTop.png'
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

        <div className='bg-darkmode-grey w-full rounded-t-md mt-10'>
            <div className="flex items-center pl-3 pt-5">
                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt='profile-avatar'/>
                <div className="ml-2">
                    <div className="text-sm ">
                    <span className="font-semibold text-white">LinkedIn member</span>
                    <span className="text-gray-400"> • 1st</span>
                    </div>
                    <div className="text-gray-400 text-xs ">The greatest influencer on this planet</div>
                    <div className="text-gray-400 text-xs flex">
                    <span className="inline-block">3d • Edited • </span>
                    <svg className="inline-block ml-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" width="16" height="16" focusable="false">
                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                    </svg>
                    </div>
                </div>
            </div>

            <div className='flex justify-center '>
                <div className='p-4'>
                    {tokens.map((string, i) => {
                        return <p key={i} className='text-white'>{string}<br/><br/></p>
                    })}
                </div>
            </div>
        </div>
        <div className='bg-darkmode-grey rounded-b-xl'> 
            <img src={PostBottom} alt='linkedin-post' />
        </div>

        <div className='flex justify-center mt-8'>
            <button className='bg-li-blue px-5 py-2 rounded-md text-white hover:bg-li-blue-hover' onClick={() => navigation('/')}><VscDebugRestart className='inline text-xl' /><span className='pl-1' >Create another post</span></button>
        </div>
    </div>  
  )
}

export default PostPage