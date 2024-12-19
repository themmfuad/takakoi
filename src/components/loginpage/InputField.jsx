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

export default function InputField({
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

  function hasBrokenMin() {
    console.log(inputValue.length);
    inputValue.length < 3
      ? setInputStates((prevInputStates) => ({
          ...prevInputStates,
          broken: { ...prevInputStates.broken, min: true },
        }))
      : setInputStates((prevInputStates) => ({
          ...prevInputStates,
          broken: { ...prevInputStates.inputStates, min: false },
        }));
  }

  function hasBrokenMax() {
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

  function hasBrokenPattern() {
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

  function changeInputStates() {
    // hasStarted(inputValue, usernameInputStates, setUsernameInputStates);
    hasBrokenMin();
    hasBrokenMax();
    hasBrokenPattern();
  }

  return (
    <>
      <label htmlFor={inputName + '-input'}>{inputTitle + ':'}</label>
      <input
        type="text"
        name={inputName}
        id={inputName + ':'}
        maxLength={inputRules.maxLength.value}
        value={inputValue}
        onFocus={() => setInputStates({ ...inputStates, focused: true })}
        onBlur={() => setInputStates({ ...inputStates, focused: false })}
        onChange={(event) => {
          setInputValue(event.target.value);
          changeInputStates(event.target.value);
        }}
      />
      <ul
        style={{
          display: `${inputStates.focused ? 'block' : 'none'}`,
        }}
        id="input-rules"
      >
        <li
          style={{
            color: `${inputStates.broken.min ? errorColor : correctColor}`,
          }}
        >
          minimum {inputRules.minLength.value} character
        </li>
        <li
          style={{
            color: `${inputStates.broken.pattern ? errorColor : correctColor}`,
          }}
        >
          {inputRules.pattern.warning}
        </li>
        <li
          style={{
            color: `${inputStates.broken.max ? errorColor : correctColor}`,
          }}
        >
          not more than {inputRules.maxLength.value} character
        </li>
      </ul>
    </>
  );
}
