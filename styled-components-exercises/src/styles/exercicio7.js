/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import React, { useState } from 'react';

const CarrosselModel = styled.div`
  display: flex;
  img {
    width: ${(props) => {
      return `${props.largura}pc`;
    }};
    height: ${(props) => {
      return `${props.altura}pc`;
    }};
  }
  button {
    background-color: gray;
    border: none;
    cursor: pointer;
    opacity: 70%;
    font-weight: 900;
    color: white;
  }
`;

// eslint-disable-next-line react/prop-types
function Carrossel({ links, largura, altura }) {
  const [imagem, setImagem] = useState(0);

  function handleClick(e, direcao, limite) {
    e.preventDefault();
    setImagem((prevImagem) => {
      const novaImagem = prevImagem;
      if (direcao === '<') {
        if (novaImagem !== 0) {
          return novaImagem - 1;
        }
      } else if (direcao === '>') {
        if (novaImagem !== limite) {
          return novaImagem + 1;
        }
      }
      return 0;
    });
  }
  return (
    <CarrosselModel largura={largura} altura={altura}>
      <button onClick={(e) => handleClick(e, '<', links.length)} type="submit">
        {'<'}
      </button>
      <img src={links[imagem]} alt="opa" />
      <button
        onClick={(e) => handleClick(e, '>', links.length - 1)}
        type="submit"
      >
        {'>'}
      </button>
    </CarrosselModel>
  );
}

export default Carrossel;
