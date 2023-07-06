/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React, { useState } from 'react';

const Item = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    background-color: black;
    color: white;
    padding: 10px;
    margin: 0;
    width: 7pc;
    cursor: pointer;
  }
  h1:hover {
    background-color: gray;
  }
`;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
`;

// eslint-disable-next-line no-unused-vars
function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const opcoes = options;
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseExit = () => {
    setIsOpen(false);
  };
  return (
    <Navbar>
      <Item onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
        <h1>Menu</h1>
        {isOpen &&
          opcoes.map(function teste(item) {
            return (
              <div className="DropItem" key={item}>
                <h1> {item}</h1>
              </div>
            );
          })}
      </Item>
      <Item>
        <h1>Opa</h1>
      </Item>
    </Navbar>
  );
}

export default Dropdown;
