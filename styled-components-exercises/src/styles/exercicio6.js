/* eslint-disable radix */

/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 5pc;
`;

const Progress = styled.div`
  margin: 10px;
  height: 1pc;
  width: 100%;
  background-color: #f2f2f2;
`;

const Carregado = styled.div`
  width: ${(props) => {
    if (parseInt(props.value) > 100) {
      return `100%`;
    }
    return `${props.value}%`;
  }};
  background-color: #007bff;
  height: 1pc;
`;

function ProgressBar({ value }) {
  return (
    <Container>
      <Progress>
        <Carregado value={value} />
      </Progress>
    </Container>
  );
}

export default ProgressBar;
