import { useState } from 'react';
import './LoginPageForm.css';
import InputField from './InputField';

export default function LoginPageForm({
  buttonState,
  invalidFields,
  setInvalidFields,
}) {
  // common states that all input field has
  const commonInputFieldStates = {
    focused: false,
    started: false,
    broken: {
      min: true,
      max: false,
      pattern: true,
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
  const [passwordInputStates, setPasswordInputStates] = useState({
    // copying focused and started
    ...commonInputFieldStates,
    broken: {
      // copying min and max
      ...commonInputFieldStates.broken,
      // new value for pattern object
      pattern: {
        upper: true,
        lower: true,
        digit: true,
        symbol: true,
      },
    },
  });

  return (
    <form id="login-form-container">
      {(() => {
        if (buttonState == 'signup') {
          return (
            <InputField
              buttonState={buttonState}
              inputName={'nickname'}
              inputTitle={'Nickname'}
              inputRules={{
                minLength: 3,
                maxLength: 21,
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  warning: 'only alpha-numeric characters',
                },
              }}
              inputValue={nickNameInputValue}
              setInputValue={setNickNameInputValue}
              inputStates={nickNameInputStates}
              setInputStates={setNickNameInputStates}
              invalidFields={invalidFields}
              setInvalidFields={setInvalidFields}
            />
          );
        }
      })()}
      <InputField
        buttonState={buttonState}
        inputName={'username'}
        inputTitle={'Username'}
        inputRules={{
          minLength: 3,
          maxLength: 21,
          pattern: {
            value: /^[a-zA-Z0-9]+$/,
            warning: 'only alpha-numeric characters',
          },
        }}
        inputValue={usernameInputValue}
        setInputValue={setUsernameInputValue}
        inputStates={usernameInputStates}
        setInputStates={setUsernameInputStates}
        invalidFields={invalidFields}
        setInvalidFields={setInvalidFields}
      />
      <InputField
        buttonState={buttonState}
        inputName={'password'}
        inputTitle={'Password'}
        inputRules={{
          minLength: 8,
          maxLength: 21,
        }}
        inputValue={passwordInputValue}
        setInputValue={setPasswordInputValue}
        inputStates={passwordInputStates}
        setInputStates={setPasswordInputStates}
        invalidFields={invalidFields}
        setInvalidFields={setInvalidFields}
      />
    </form>
  );
}
