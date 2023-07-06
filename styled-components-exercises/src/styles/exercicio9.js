import styled from 'styled-components';
import React, { useState } from 'react';

const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 400px;
  padding: 20px;
`;
// eslint-disable-next-line react/prop-types
function Modal({ isOpen, children }) {
  const [open, setOpen] = useState(isOpen);
  function fechar() {
    setOpen(false);
  }
  return (
    open && (
      <ModalDiv>
        <ModalContent>
          {children}
          <button onClick={fechar} type="submit">
            X
          </button>
        </ModalContent>
      </ModalDiv>
    )
  );
}

export default Modal;
