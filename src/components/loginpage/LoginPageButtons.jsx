import './LoginPageButtons.css';

export default function LoginPageButtons(csb){
    return(
        <>
        <div className="login-page-button-container">
        <button className='{csb.buttonState && "active"}'>Login</button>
        <button>Demo</button>
        <button>Sign Up</button>
        </div>
        </>
    );
}