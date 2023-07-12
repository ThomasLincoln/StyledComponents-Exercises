import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
`;

const Track = styled.div`
  background-color: #ddd;
  height: 10px;
  position: relative;
`;

const Indicator = styled.div`
  background-color: #333;
  height: 10px;
  position: absolute;
  transition: left 0.3s ease-in-out;
`;

function Slider({ min, max, step }) {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
  };

  return (
    <SliderContainer>
      <Track>
        <Indicator
          style={{ left: `${((value - min) / (max - min)) * 100}%` }}
        />
      </Track>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
    </SliderContainer>
  );
}

export default Slider;
