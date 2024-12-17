import { useState } from 'react';
import './LoginPageForm.css';

export default function LoginPageForm({ buttonState }) {
  const correctColor = '#0096ff',
    errorColor = '#e30b5c';

  const [usernameInputValue, setUsernameInputValue] = useState('');

  const [usernameInputState, setUsernameInputState] = useState({
    isFocused: false,
    isStarted: false,
    inputStates: {
      breakMin: false,
      breakMax: false,
      hasSign: false,
    },
  });

  function changeUsernameInputState(value) {
    // is started
    value.length >= 1
      ? setUsernameInputState({
          ...usernameInputState,
          isStarted: true,
        })
      : setUsernameInputState({
          ...usernameInputState,
          isStarted: false,
        });

    // break min
    value.length < 3
      ? setUsernameInputState((usernameInputState) => ({
          ...usernameInputState,
          inputStates: { ...usernameInputState.inputStates, breakMin: true },
        }))
      : setUsernameInputState((usernameInputState) => ({
          ...usernameInputState,
          inputStates: { ...usernameInputState.inputStates, breakMin: false },
        }));

    // break max
    value.length > 21
      ? setUsernameInputState((usernameInputState) => ({
          ...usernameInputState,
          inputStates: { ...usernameInputState.inputStates, breakMax: true },
        }))
      : setUsernameInputState((usernameInputState) => ({
          ...usernameInputState,
          inputStates: { ...usernameInputState.inputStates, breakMax: false },
        }));

    // no sign
    /^[a-zA-Z0-9]+$/.test(value)
      ? setUsernameInputState((usernameInputState) => ({
          ...usernameInputState,
          inputStates: { ...usernameInputState.inputStates, hasSign: false },
        }))
      : setUsernameInputState((usernameInputState) => ({
          ...usernameInputState,
          inputStates: { ...usernameInputState.inputStates, hasSign: true },
        }));
  }

  return (
    <form id="login-form-container" onSubmit={(event) => {}}>
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
        value={usernameInputValue}
        onFocus={() =>
          setUsernameInputState({ ...usernameInputState, isFocused: true })
        }
        onBlur={() =>
          setUsernameInputState({ ...usernameInputState, isFocused: false })
        }
        onChange={(event) => {
          setUsernameInputValue(event.target.value);
          changeUsernameInputState(event.target.value);
        }}
      />
      <ul
        style={{
          display: `${usernameInputState.isFocused && usernameInputState.isStarted ? 'block' : 'none'}`,
        }}
        id="username-input-rules"
      >
        <li
          style={{
            color: `${usernameInputState.inputStates.breakMin ? errorColor : correctColor}`,
          }}
        >
          minimum 3 alpha-numeric character
        </li>
        <li
          style={{
            color: `${usernameInputState.inputStates.hasSign ? errorColor : correctColor}`,
          }}
        >
          no sign or symbols
        </li>
        <li
          style={{
            color: `${usernameInputState.inputStates.breakMax ? errorColor : correctColor}`,
          }}
        >
          not more than 21 character
        </li>
      </ul>

      <label htmlFor="password-input">Password:</label>
      <input
        disabled="disabled"
        type="text"
        name="password"
        id="password-input"
      />
    </form>
  );
}
