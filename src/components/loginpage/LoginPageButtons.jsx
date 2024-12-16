import './LoginPageButtons.css';

export default function LoginPageButtons({ buttonState, setButtonState }) {
  return (
    <>
      <div className="login-page-button-container">
        <button
          className={buttonState == 'login' ? 'active' : ''}
          onClick={() => {
            buttonState == 'login'
              ? console.log('submit')
              : setButtonState('login');
          }}
        >
          Login
        </button>
        {console.log(buttonState)}
        <button>Demo</button>
        <button
          className={buttonState == 'signup' ? 'active' : ''}
          onClick={() => {
            buttonState == 'signup'
              ? console.log('submit signup')
              : setButtonState('signup');
          }}
        >
          Signup
        </button>
      </div>
    </>
  );
}
