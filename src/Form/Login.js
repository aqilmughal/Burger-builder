import React from 'react';
import './Login.css';
import Header from '../Components/Header/Header';

function Login() {
    return (
      <>
      <Header/>
      <div className='login_main'>
          <form >
            <label for="fname">Email_Exists</label>
            <input type="text" id="fname" name="fname"></input><br></br>
          
          <input type="text" id="lname" name="lname"></input><br></br>
          <button style={{color:'green'}}>Submit</button>
          <button style={{color:'red'}}> Cancel</button>
        </form>
     </div>
     </>
    );
  }
  export default Login 