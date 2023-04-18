import { useState } from 'react';
import './App.css'
import FormInput from './components/FormInput';

const App = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data));
  }

  return (
    <form onSubmit={ handleSubmit }>
      <FormInput name="Username" placeholder="Username" />
      <FormInput name="Email Address" placeholder="Email"/>
      <FormInput name="First Name" placeholder="First Name"/>
      <FormInput name="Last Name" placeholder="Last Name"/>
      <button>SUBMIT</button>
    </form>
  )
}

export default App;