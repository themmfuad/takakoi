import { useState } from 'react';
import './LoginPageForm.css';
import InputField from './InputField';

export default function LoginPageForm({ buttonState }) {
  // common states that all input field has
  const commonInputFieldStates = {
    focused: false,
    started: false,
    broken: {
      min: false,
      max: false,
      pattern: false,
    },
  };

  //username input value and states
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [usernameInputStates, setUsernameInputStates] = useState(
    commonInputFieldStates
  );

  //nickname input value and states
  const [nickNameInputValue, setNickNameInputValue] = useState('');
  const [nickNameInputStates, setNickNameInputStates] = useState(
    commonInputFieldStates
  );

  //password input value and states
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [passwordInputStates, setPasswordInputStates] = useState(
    commonInputFieldStates
  );

  return (
    <form id="login-form-container" onSubmit={(event) => {}}>
      {(() => {
        if (buttonState == 'signup') {
          return (
            <InputField
              inputName={'nickname'}
              inputTitle={'Nickname'}
              inputRules={{
                minLength: 3,
                maxLength: 21,
                pattern: {
                  value: /^[a-zA-Z0-9]*$/,
                  warning: 'No sign or symbols only alpha-numeric characters',
                },
              }}
              inputValue={nickNameInputValue}
              setInputValue={setNickNameInputValue}
              inputStates={nickNameInputStates}
              setInputStates={setNickNameInputStates}
            />
          );
        }
      })()}
      {/* <label htmlFor="username-input">Username:</label>
      <input
        maxLength={21}
        type="text"
        name="username"
        id="username-input"
        value={usernameInputValue}
        onFocus={() =>
          setUsernameInputStates({ ...usernameInputStates, focused: true })
        }
        onBlur={() =>
          setUsernameInputStates({ ...usernameInputStates, focused: false })
        }
        onChange={(event) => {
          setUsernameInputValue(event.target.value);
          changeUsernameInputStates(event.target.value);
        }}
      />
      <ul
        style={{
          display: `${usernameInputStates.focused ? 'block' : 'none'}`,
        }}
        id="username-input-rules"
      >
        <li
          style={{
            color: `${usernameInputStates.broken.min ? errorColor : correctColor}`,
          }}
        >
          minimum 3 alpha-numeric character
        </li>
        <li
          style={{
            color: `${usernameInputStates.broken.pattern ? errorColor : correctColor}`,
          }}
        >
          no sign or symbols
        </li>
        <li
          style={{
            color: `${usernameInputStates.broken.max ? errorColor : correctColor}`,
          }}
        >
          not more than 21 character
        </li>
      </ul> */}

      <label htmlFor="password-input">Password:</label>
      <input
        // disabled="disabled"
        type="text"
        name="password"
        id="password-input"
      />
    </form>
  );
}
