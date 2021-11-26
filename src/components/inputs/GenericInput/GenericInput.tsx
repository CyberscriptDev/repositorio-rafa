import React, { useState } from 'react';
import { Field, Input } from './GenericInput.style';

interface Props {
  type: string,
  placeholder?: string,
  disabled?: boolean
}

function GenericInput({ type, placeholder, disabled }: Props) {
  const [text, useText] = useState('');

  return (
    <Field>
      <Input 
        value={text} 
        onChange={(e) => useText(e.target.value)} 
        type={type} 
        placeholder={placeholder}
        disabled={disabled}/>
    </Field>
  );
}

export default GenericInput;