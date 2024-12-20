// inputRules {
//     minLength, maxLength: {
//         value: Number,
//         warning: String,
//     }
//     pattern: {
//         value: String,
//         warning: String,
//     }
// }

import { startTransition } from "react";

export default function InputField({
  buttonState,
  inputName,
  inputTitle,
  inputRules,
  inputValue,
  setInputValue,
  inputStates,
  setInputStates,
}) {
  // feedback color for input feild rules
  const correctColor = '#0096ff',
    errorColor = '#e30b5c';

  // user started to typing
  // function hasStarted(inputValue, inputStates, setInputStates) {
  //   inputValue.length >= 1
  //     ? setInputStates({
  //         ...inputStates,
  //         started: true,
  //       })
  //     : setInputStates({
  //         ...inputStates,
  //         started: false,
  //       });
  // }

  function hasBrokenMin(inputValue) {
    inputValue.length < inputRules.minLength
      ? setInputStates((prevInputStates) => ({
          ...prevInputStates,
          broken: { ...prevInputStates.broken, min: true },
        }))
      : setInputStates((prevInputStates) => ({
          ...prevInputStates,
          broken: { ...prevInputStates.broken, min: false },
        }));
  }

  function hasBrokenMax(inputValue) {
    inputValue.length > 21
      ? setInputStates((prevInputStates) => ({
          ...prevInputStates,
          broken: { ...prevInputStates.broken, max: true },
        }))
      : setInputStates((prevInputStates) => ({
          ...prevInputStates,
          broken: { ...prevInputStates.broken, max: false },
        }));
  }

  function hasBrokenPattern(inputValue) {
    inputRules.pattern.value.test(inputValue)
      ? setInputStates((prevInputStates) => ({
          ...prevInputStates,
          broken: { ...prevInputStates.broken, pattern: false },
        }))
      : setInputStates((prevInputStates) => ({
          ...prevInputStates,
          broken: { ...prevInputStates.broken, pattern: true },
        }));
  }

  function changeInputStates(inputValue) {
    // hasStarted(inputValue, usernameInputStates, setUsernameInputStates);
    hasBrokenMin(inputValue);
    hasBrokenMax(inputValue);
    hasBrokenPattern(inputValue);
  }

  function test(){
    
  }


  return (
    <>
      <label htmlFor={inputName + '-input'}>{inputTitle + ':'}</label>
      <input
        type="text"
        name={inputName}
        id={inputName + ':'}
        maxLength={inputRules.maxLength}
        value={inputValue}
        onFocus={() =>
          setInputStates((prevInputStates) => ({
            ...prevInputStates,
            broken: { ...prevInputStates.broken,},
            focused: true,
          }))
        }
        onBlur={(event) => {
          event.relatedTarget?.click(); // when losing focus simulate click on the outside click event first 
          setInputStates((prevInputStates) => ({ // after the new click event update the state
              ...prevInputStates,
              broken: { ...prevInputStates.broken,},
              focused: false,
            }));
          }
        }
        onChange={(event) => {
          setInputValue(event.target.value);
          changeInputStates(event.target.value);
        }}
      />

      {/*  Non blocking UI as onBlur doesn't block other changes in the UI*/}
      <ul
        style={{
          display: `${inputStates.focused && buttonState == 'signup' ? 'block' : 'none'}`,
        }}
        id="input-rules"
      >
        {/* minimum warning */}
        <li
          style={{
            color: `${inputStates.broken.min ? errorColor : correctColor}`,
          }}
        >
          minimum {inputRules.minLength} character
        </li>

        {/* maximum warning */}
        <li
          style={{
            color: `${inputStates.broken.max ? errorColor : correctColor}`,
          }}
        >
          not more than {inputRules.maxLength} character
        </li>

        {/* pattern warning */}
        {inputName != 'password' ? (
          <li
            style={{
              color: `${inputStates.broken.pattern ? errorColor : correctColor}`,
            }}
          >
            {inputRules.pattern.warning}
          </li>
        ) : (
          ''
        )}
      </ul>

    </>
  );
}
