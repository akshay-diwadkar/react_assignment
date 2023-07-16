import { useState } from 'react';
import './App.css';
import LoginForm from './MyComponents/LoginForm/LoginForm';
import MyButton from './MyComponents/MyButton/MyButton';
import MyTextField from './MyComponents/MyTextField/MyTextField';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const content = isAuthenticated ? <h1>Hello</h1> : <LoginForm authenticate={(val) => setIsAuthenticated(val)} />
  return (
      <div>
        {content}
      </div>
  );
}

export default App;
