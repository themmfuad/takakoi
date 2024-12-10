import './LoginPage.css';
import euro from '../../assets/euro.jpg';
import wallet from '../../assets/wallet.png';

export default function LoginPage() {
  return (
    <>
      <img src={wallet} alt="wallet image" id="wallet-image" />
      <div className="login-page-container">
        <img src={euro} alt="euro image" id="euro-image" />
        <h1 id="title">Takakoi???</h1>
        <h3 id="subtitle">Open source | Anonymous | Quick - Expense Tracker</h3>
      </div>
    </>
  );
}
