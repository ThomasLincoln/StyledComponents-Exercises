/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import React from 'react';

const TimeLineContainer = styled.div`
  background-color: black;
  max-width: 100vw;
  width: 100vw;
  height: 0.5pc;
  display: flex;
`;
const Line = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  height: 2pc;
  background-color: black;
`;

const TimelineItem = styled.div`
  position: relative;
  max-width: fit-content;
  margin: 0pc
    ${(props) => {
      return `${props.tamanho / 2}%`;
    }};
  flex: 1;
`;

const Content = styled.div`
  margin-top: 50px;
  h3 {
    text-align: center;
  }
`;

function TimeLine({ datas, espacamento }) {
  return (
    <TimeLineContainer>
      {datas.map((evento, index) => (
        <TimelineItem tamanho={espacamento}>
          {index !== -1 && <Line />}

          <Content>
            <h3>{evento.title}</h3>
            <p>{evento.date}</p>
          </Content>
        </TimelineItem>
      ))}
    </TimeLineContainer>
  );
}

export default TimeLine;
