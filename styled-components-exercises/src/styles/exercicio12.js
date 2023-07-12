import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';

const ItemMain = styled.div`
  background-color: white;
  display: flex;

  button {
    margin: 5px;
    width: 30px;
  }
`;

const Wrapper = styled.div`
  background-color: white;
  margin: 20px;
`;

const Content = styled.p`
  /* Estilos para o conteúdo do acordeão */
  /* Adicione as transições CSS desejadas para a animação */
  &.fade-enter {
    opacity: 0;
    transform: translateY(-20px);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }

  &.fade-exit {
    opacity: 1;
    transform: translateY(0);
  }

  &.fade-exit-active {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 300ms ease-in, transform 300ms ease-in;
  }
`;

function Acordeao() {
  const [visivel, setVisivel] = useState(false);
  function atualizar() {
    setVisivel(!visivel);
  }
  return (
    <Wrapper>
      <ItemMain>
        <h1>Esse é o primeiro</h1>
        <button onClick={atualizar} type="submit">
          +
        </button>
      </ItemMain>
      <CSSTransition in={visivel} timeout={300} classNames="fade" unmountOnExit>
        <Content>opa</Content>
      </CSSTransition>
    </Wrapper>
  );
}

export default Acordeao;
