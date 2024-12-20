import './LoginPageButtons.css';

export default function LoginPageButtons({ buttonState, setButtonState }) {
  return (
    <>
      <div className="login-page-button-container">
        <button
          className={buttonState == 'login' ? 'active' : ''}
          onClick={() => {
            console.log('clicked on login');  
            setButtonState((prevButtonState)=>prevButtonState == 'login' ? console.log('submit') : 'login');
          }}
        >
          Login
        </button>
        <button>Demo</button>
        <button
          className={buttonState == 'signup' ? 'active' : ''}
          onClick={() => {
            console.log('clicked on signup');
            setButtonState((prevButtonState)=>prevButtonState == 'signup' ? console.log('submit') : 'signup');
          }}
        >
          Signup
        </button>
      </div>
    </>
  );
}
