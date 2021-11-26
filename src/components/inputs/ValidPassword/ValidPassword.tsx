import React, { useState } from 'react';
import {
  Input, ValidField,
  ValidInvisiblePasswordIcon, ValidPasswordIcon, ValidVisiblePasswordIcon
} from './ValidPassword.style';

function ValidPassword() {
  const [text, setText] = useState('');
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);

  return (
    <ValidField>
      <ValidPasswordIcon/>
      <Input 
        placeholder="Senha"
        type={visible ? 'text' : 'password'} 
        value={text} onChange={e => setText(e.target.value)}/>
      {visible ? 
        <ValidInvisiblePasswordIcon onClick={handleClick}/>
        : 
        <ValidVisiblePasswordIcon onClick={handleClick} />
      }
    </ValidField>
  );
}

export default ValidPassword;
