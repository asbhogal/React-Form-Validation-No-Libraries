import { useRef, useState } from 'react';
import './App.css'
import FormInput from './components/FormInput';

const App = () => {

  //const [username, setUsername] = useState("");

  const usernameRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef);
  }

  

  return (
    <form onSubmit={ handleSubmit }>
      <FormInput 
        refer={ usernameRef }  
        placeholder="Username" 
      />
      <FormInput placeholder="Email"/>
      <FormInput name="First Name" placeholder="First Name"/>
      <FormInput name="Last Name" placeholder="Last Name"/>
      <button>submit</button>
    </form>
  )
}

export default App;