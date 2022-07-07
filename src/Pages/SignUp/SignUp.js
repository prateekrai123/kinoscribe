import React,{useState} from 'react';

import classes from './SignUp.module.css';


const SignUp = () => {
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');


  const handleChange = (e) => {
    setName(e.target.value);
  }
 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
 
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    if (password != confPassword) {
      console.log("password Not Match");
    } else {
      console.log('A form was submitted with Name :"' + name + '" and Email :"' + email + '"');
    }
    e.preventDefault();
  }
  
  return (
    <div className={classes.siginup}>
      <header className={classes.signup_header}>
        <form onSubmit={(e) => { handleSubmit(e) }}>
          <h2> KINOSCRIBE</h2>
          <h3> Sign-up Form </h3>
          <label >
            Name:
          </label><br />
          <input type="text" value={name} required onChange={(e)=> { handleChange(e) }} /><br />
          <label>
            Email:
          </label><br />
          <input type="email" value={email} required onChange={(e) => { handleEmailChange(e) }} /><br />
          <label>
            Password:
          </label><br />
          <input type="password" value={password} required onChange={(e) => { handlePasswordChange(e) }} /><br />
          <label>
            Confirm Password:
          </label><br />
          <input type="password" value={confPassword} required onChange={(e) => { handleConfPasswordChange(e) }} /><br />
          <input type="submit" value="Submit" />
        </form>
      </header>
      </div>
  )
}

export default SignUp;