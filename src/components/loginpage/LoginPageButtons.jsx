import './LoginPageButtons.css';

export default function LoginPageButtons({
  buttonState,
  setButtonState,
  invalidFields,
}) {
  function handleSubmit(action) {
    invalidFields.forEach((value, key) => {
      if (value == true) {
        setButtonState((prevButtonState) => ({
          ...prevButtonState,
          after: 'invalid',
        }));
      } else
        setButtonState((prevButtonState) => ({
          ...prevButtonState,
          after: 'valid',
        }));
    });
  }

  return (
    <>
      <div className="login-page-button-container">
        <button
          className={buttonState.now == 'login' ? 'active' : ''}
          onClick={() => {
            console.log('clicked on login');
            setButtonState((prevButtonState) =>
              prevButtonState.now == 'login'
                ? handleSubmit('login')
                : {
                    ...prevButtonState,
                    now: 'signup',
                  }
            );
          }}
        >
          Login
        </button>
        <button>Demo</button>
        <button
          className={buttonState.now == 'signup' ? 'active' : ''}
          onClick={() => {
            console.log('clicked on signup');
            setButtonState((prevButtonState) =>
              prevButtonState.now == 'signup'
                ? handleSubmit('signup')
                : {
                    ...prevButtonState,
                    now: 'login',
                  }
            );
          }}
        >
          Signup
        </button>
      </div>
    </>
  );
}
