/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Alert = styled.div`
  background-color: ${(props) => {
    if (props.type === 'sucess') return 'green';
    if (props.type === 'warning') return 'orange';
    if (props.type === 'error') return 'red';
    return '#f2f2f2';
  }};
  border: solid;
  border-color: ${(props) => {
    if (props.type === 'sucess') return 'green';
    if (props.type === 'warning') return 'orange';
    if (props.type === 'error') return 'red';
    return '#f2f2f2';
  }};
  padding: 10px;
`;

function AlertComponent({ type, children }) {
  return <Alert type={type}>{children}</Alert>;
}

export default AlertComponent;
