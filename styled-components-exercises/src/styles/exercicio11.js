/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';

const ChartBar = styled.div`
  width: ${(props) => {
    return props.tamanho;
  }};
  background-color: red;
  margin: 0pc 0pc;
  height: 5pc;
`;

const Label = styled.p`
  margin-bottom: 0px;
`;

function Chart({ data }) {
  const getMaxValue = () => {
    let max = 0;
    data.forEach((element) => {
      if (element.value > max) {
        max = element.value;
      }
    });
    return max;
  };

  const calcularTamanhoMaximo = (value) => {
    const maxValue = getMaxValue();
    return `${(value / maxValue) * 100}%`;
  };

  return (
    <>
      {data.map((item) => (
        <div>
          <Label>{item.label}</Label>
          <ChartBar tamanho={calcularTamanhoMaximo(item.value)} />
        </div>
      ))}
    </>
  );
}

export default Chart;
