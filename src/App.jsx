import { useState } from 'react';
import './App.css';
import LoginPage from './components/loginpage/LoginPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
