import './LoginPageForm.css'

export default function LoginPageForm({buttonState}){
    return (
        <form id="login-form-container">
            {(()=>{
                if(buttonState=='signup'){
                    return (
                        <>
                        <label htmlFor="nickname-input">Nickname:</label>
                        <input type="text" name="nickname" id="nickname-input" />
                        </>
                    );
                }
            })()}
            <label htmlFor="username-input">Username:</label>
            <input type="text" name="username" id="username-input" />

            <label htmlFor="password-input">Password:</label>
            <input type="text" name="password" id="password-input" />
        </form>
    );
}