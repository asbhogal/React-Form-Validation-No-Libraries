import { useState } from 'react';
import './App.css'
import FormInput from './components/FormInput';
import inputs from './constants';

const App = () => {

  const [values, setValues] = useState({
    username: "",
    emailAddress: "",
    birthday: "",
    password: "",
    repeatPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  console.log(values);

  return (
    <>
      <h1>React Form Validation</h1>

      <form onSubmit={ handleSubmit }>
        { inputs.map((input) => (
          <FormInput 
            key={ input.id } 
            {...input} 
            value={ values[input.name] }
            onChange={ onChange }
            />
        ))}
        <button>SUBMIT</button>
      </form>

      <span className='warning-message'>THIS FORM IS FOR FRONT-END DEMONSTRATION PURPOSES ONLY. PLEASE DO NOT ENTER IN VALID, IDENTIFIABLE DATA AS ANY INFORMATION ENTERED IS NOT ENCRYPTED</span>
    </>
    
  )
}

export default App;