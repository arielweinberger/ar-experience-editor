import React, { useRef, useEffect } from 'react'

const NumericInput = ({ value, onChangeApplied }) => {
  const inputRef = useRef<HTMLInputElement>();

  value = value.toFixed(3);

  useEffect(() => {
    if (inputRef.current) {
      const input = inputRef.current;
      input.value = value;
    }
  });

  const handleKeyPress = (e) => {
    const { charCode } = e;
    if (charCode !== 13) {
      return;
    }

    const appliedValue = parseFloat(e.target.value);
    
    if (value !== appliedValue) {
      onChangeApplied(appliedValue);
    }
  };

  return (
    <input
      type="number"
      ref={inputRef}
      onKeyPress={handleKeyPress}
    />
  )
}

export default NumericInput
