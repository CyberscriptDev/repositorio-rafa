import React from 'react';

import styled from 'styled-components';

const RadioBox = styled.div`
  background-color: green;
  height: 15px;
`;

const RadioButton = () => {
  return (
    <RadioBox>
      <input name="radio" type="radio" />
      <input name="radio" type="radio" />
    </RadioBox>
  );
};

export default RadioButton;
