import './App.css';
import Homepage from './Pages/Homepage'
import { Route, Routes } from 'react-router';
// import LinkedInPost from './Components/LinkedInPost';
import PostPage from './Pages/PostPage';
import { useState } from 'react';

function App() {
  const [linkedInPostData, setLinkedInPostData] = useState('')

  return (
    <div className='flex justify-center'>
      <Routes>
        <Route path='/' element={<Homepage setLinkedInPostData={setLinkedInPostData}/>} />
        <Route path='/post' element={<PostPage linkedInPostData={linkedInPostData} />}/>
      </Routes>
    </div>
  );
}

export default App;
