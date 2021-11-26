import React, { useState } from 'react';
import {
  SwitchField,
  SwitchThinControl,
  SwitchThinInput
} from './ThinSwitch.style';

interface Props {
  color?: string;
  id: string;
  onChange?: () => void;
  sliderWidth?: number;
}

function ThinSwitch({ color, id, onChange, sliderWidth }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => setIsChecked(!isChecked);

  return (
    <SwitchField>
      <SwitchThinInput
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange}
        onClick={handleClick}
      />
      <SwitchThinControl 
        color={color} 
        isChecked={isChecked} 
        htmlFor={id}
        sliderWidth={sliderWidth}
      >
      </SwitchThinControl>
    </SwitchField>
  );
}

export default ThinSwitch;
