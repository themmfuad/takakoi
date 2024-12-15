import './LoginPageButtons.css';

export default function LoginPageButtons({buttonState, setButtonState}){
    return(
        <>
        <div className="login-page-button-container">
        <button className={buttonState == 'login' ? 'active' : ''} onClick={()=>{
            setButtonState('login');
        }}>Login</button>
        {console.log(buttonState)}
        <button>Demo</button>
        <button className={buttonState == 'signup' ? 'active' : ''} onClick={()=>{
            setButtonState('signup');
        }}>Signup</button>
        </div>
        </>
    );
}