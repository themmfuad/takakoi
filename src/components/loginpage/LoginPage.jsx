import './LoginPage.css';
// import euro from '../../assets/euro.jpg';
// import wallet from '../../assets/wallet.png';
import LoginPageButtons from './LoginPageButtons';
import LoginPageForm from './LoginPageForm';
import { useState } from 'react';

export default function LoginPage() {
  const [buttonState, setButtonState] = useState('login');
  return (
    <>
      {/* <img src={wallet} alt="wallet image" id="wallet-image" />
      <img src={euro} alt="euro image" id="euro-image" /> */}
      <div className="login-page-container">
        <h1 id="title">Takakoi???</h1>
        <h3 id="subtitle">Open source | Anonymous | Quick - Expense Tracker</h3>
        <LoginPageButtons buttonState={buttonState} setButtonState={setButtonState}/>
        <LoginPageForm buttonState={buttonState} />
      </div>
    </>
  );
}
