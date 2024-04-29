import { useState } from 'react';
import reactLogo from './assets/react.svg'; // Assuming this import is correct
import Axios from 'axios'; // Correcting the import statement for Axios
import './App.css';

function App() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  
  const register = () => {
    Axios.post('http://localhost:5174/register', { // Adding a colon after localhost
      username: usernameReg, 
      password: passwordReg
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error('Error registering:', error);
    });
  };

  return (
    <div className="app">
      <div className='Login'>
        <h1>Login</h1>
        <label>Username</label>
        <input type='text' onChange={(e) => setUsernameReg(e.target.value)} /> {/* Adding onChange event handler */}
        <label>Password</label>
        <input type='text' onChange={(e) => setPasswordReg(e.target.value)} /> {/* Adding onChange event handler */}
        <button>Login</button>
      </div>

      <div className='Registration'>
        <h1>Register</h1>
        <label>Username</label>
        <input type='text' onChange={(e) => setUsernameReg(e.target.value)} /> {/* Adding onChange event handler */}
        <label>Password</label>
        <input type='text' onChange={(e) => setPasswordReg(e.target.value)} /> {/* Adding onChange event handler */}
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default App;
