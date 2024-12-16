import { useState } from 'react';
import './LoginPageForm.css';

export default function LoginPageForm({ buttonState }) {
  const [usernameInput, setUsernameInput] = useState({
    currentValue: '',
    isFocused: false,
    isStarted: false,
    isRuleFollower: false,
    inputStates: {
      breakMin: false,
      breakMax: false,
      noSign: true,
    },
  });

  return (
    <form id="login-form-container">
      {(() => {
        if (buttonState == 'signup') {
          return (
            <>
              <label htmlFor="nickname-input">Nickname:</label>
              <input type="text" name="nickname" id="nickname-input" />
            </>
          );
        }
      })()}
      <label htmlFor="username-input">Username:</label>
      <input
        maxLength={21}
        type="text"
        name="username"
        id="username-input"
        value={usernameInput.currentValue}
        onFocus={() => setUsernameInput({ ...usernameInput, isFocused: true })}
        onBlur={() => setUsernameInput({ ...usernameInput, isFocused: false })}
        onChange={(event) => {
          event.target.value.length >= 1
            ? setUsernameInput({
                ...usernameInput,
                currentValue: event.target.value,
                isStarted: true,
              })
            : setUsernameInput({
                ...usernameInput,
                currentValue: event.target.value,
                isStarted: false,
              });
        }}
      />
      <ul
        style={{
          display: `${usernameInput.isFocused == true && usernameInput.isStarted ? 'block' : 'none'}`,
        }}
        id="username-input-rules"
      >
        <li>minimum 3 alpha-numeric character</li>
        <li>no sign or symbols</li>
        <li>not more than 21 character</li>
      </ul>

      <label htmlFor="password-input">Password:</label>
      <input type="text" name="password" id="password-input" />
    </form>
  );
}
