import './App.css';
import Form from './Components/Form'
import Title from './Components/Title'
import AuthButton from './Components/AuthButton'

function App() {

  return (
    <div className='flex justify-center'>
      <div className=''>
        <Title />
        <Form />
        <AuthButton />
      </div>
    </div>
  );
}

export default App;
