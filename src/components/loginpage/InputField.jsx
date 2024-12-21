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
  buttonState,
  inputName,
  inputTitle,
  inputRules,
  inputValue,
  setInputValue,
  inputStates,
  setInputStates,
  invalidFields,
  setInvalidFields,
}) {
  // feedback color for input feild rules
  const correctColor = '#00ab66',
    errorColor = '#e30b5c';

  function updateInputState(stateName, stateValue) {
    setInputStates((prevInputStates) => ({
      ...prevInputStates,
      broken: {
        ...prevInputStates.broken,
        [stateName]: stateValue,
      },
    }));

    setInvalidFields((prevSet) => {
      const newMap = new Map(prevSet);

      newMap.has(inputName)
        ? newMap.get(inputName) == stateValue
          ? ''
          : newMap.set(inputName, stateValue)
        : newMap.set(inputName, stateValue);

      return newMap; // Return the updated Map
    });
  }

  function hasBrokenMin(inputValue) {
    inputValue.length < inputRules.minLength
      ? updateInputState('min', true)
      : updateInputState('min', false);
  }

  function hasBrokenMax(inputValue) {
    inputValue.length > 21
      ? updateInputState('max', true)
      : updateInputState('max', false);
  }

  function hasBrokenPattern(inputValue) {
    inputRules.pattern.value.test(inputValue)
      ? updateInputState('pattern', false)
      : updateInputState('pattern', true);
  }

  function updatePasswordPatternState(stateName, stateValue) {
    setInputStates((prevInputStates) => ({
      ...prevInputStates,
      broken: {
        ...prevInputStates.broken,
        pattern: {
          ...prevInputStates.broken.pattern,
          [stateName]: stateValue,
        },
      },
    }));

    setInvalidFields((prevSet) => {
      const newMap = new Map(prevSet);

      newMap.has(inputName)
        ? newMap.get(inputName) == stateValue
          ? ''
          : newMap.set(inputName, stateValue)
        : newMap.set(inputName, stateValue);

      return newMap; // Return the updated Map
    });
  }

  function updatePasswordStateAccordingToPattern(
    pattern,
    stateName,
    inputValue
  ) {
    pattern.test(inputValue)
      ? updatePasswordPatternState(stateName, false)
      : updatePasswordPatternState(stateName, true);
  }

  function hasBrokenPasswordPattern(inputValue) {
    // uppercase
    updatePasswordStateAccordingToPattern(/[A-Z]/, 'upper', inputValue);

    // lowercase
    updatePasswordStateAccordingToPattern(/[a-z]/, 'lower', inputValue);

    // digit
    updatePasswordStateAccordingToPattern(/\d/, 'digit', inputValue);

    // symbol
    updatePasswordStateAccordingToPattern(
      /[\!\\"#\$%\&'\(\)\*\+,\-\.\/:;<=>\?@\[\]\\\^\_\`\{\|\}~]/,
      'symbol',
      inputValue
    );
  }

  function generateRulesListItem(condition, content) {
    return (
      <li
        style={{
          color: `${condition ? errorColor : correctColor}`,
        }}
      >
        {content}
      </li>
    );
  }

  return (
    <>
      <label htmlFor={inputName + '-input'}>{inputTitle + ':'}</label>
      <input
        // className={inputValue.length > 0 ? isValid() : ''}
        className={
          buttonState == 'signup'
            ? inputStates.started == true
              ? inputName != 'password'
                ? Object.values(inputStates.broken).some(
                    (value) => value === true
                  )
                  ? 'invalid-input'
                  : 'valid-input'
                : Object.values(inputStates.broken).some(
                      (value) => value === true
                    ) ||
                    Object.values(inputStates.broken.pattern).some(
                      (value) => value === true
                    )
                  ? 'invalid-input'
                  : 'valid-input'
              : ''
            : ''
        }
        type="text"
        name={inputName}
        id={inputName + ':'}
        maxLength={inputRules.maxLength}
        value={inputValue}
        onFocus={() =>
          setInputStates((prevInputStates) => ({
            ...prevInputStates,
            broken: { ...prevInputStates.broken },
            focused: true,
            started: buttonState == 'signup' ? true : false,
          }))
        }
        onBlur={(event) => {
          event.relatedTarget?.click(); // when losing focus simulate click on the outside click event first
          setInputStates((prevInputStates) => ({
            // after the new click event update the state
            ...prevInputStates,
            broken: { ...prevInputStates.broken },
            focused: false,
          }));
        }}
        onChange={
          inputName != 'password'
            ? (event) => {
                setInputValue(event.target.value);
                // Change input states
                hasBrokenMin(event.target.value);
                hasBrokenMax(event.target.value);
                hasBrokenPattern(event.target.value);
              }
            : (event) => {
                setInputValue(event.target.value);
                // Change input states
                hasBrokenMin(event.target.value);
                hasBrokenMax(event.target.value);
                hasBrokenPasswordPattern(event.target.value);
              }
        }
      />

      <ul
        style={{
          display: `${inputStates.focused && buttonState == 'signup' ? 'block' : 'none'}`,
        }}
        id="input-rules"
      >
        {/* minimum warning */}
        {generateRulesListItem(
          inputStates.broken.min,
          `minimum ${inputRules.minLength} character`
        )}

        {/* maximum warning */}
        {generateRulesListItem(
          inputStates.broken.max,
          `maximum ${inputRules.maxLength} character`
        )}

        {/* pattern warning */}
        {inputName != 'password' ? (
          generateRulesListItem(
            inputStates.broken.pattern,
            `${inputRules.pattern.warning}`
          )
        ) : (
          <>
            {/* uppercase warning */}
            {generateRulesListItem(
              inputStates.broken.pattern.upper,
              `At least one uppercase letter (A-Z)`
            )}

            {/* lowercase warning */}
            {generateRulesListItem(
              inputStates.broken.pattern.lower,
              `At least one lowercase letter (a-z)`
            )}

            {/* digit warning */}
            {generateRulesListItem(
              inputStates.broken.pattern.digit,
              `At least one digit (0-9)`
            )}

            {/* symbol warning */}
            {generateRulesListItem(
              inputStates.broken.pattern.symbol,
              `At least one symbol (such as !, @, #, $, etc.)`
            )}
          </>
        )}
      </ul>
    </>
  );
}
