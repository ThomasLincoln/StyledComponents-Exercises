import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import NavBar from './styles/exercicio5';
// import Botao from './styles/exercicio1';
// import Card from './styles/exercicio2';
// import Input from './styles/exercicio3';
// import AlertComponent from './styles/exercicio4';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar>
        <ul>
          <li>teste1</li>
          <li>teste2</li>
          <li>teste3</li>
        </ul>
      </NavBar>

      {/* <Botao>Start</Botao> */}
      {/* <Card> */}
      {/* <spam>Texto</spam> */}
      {/* </Card> */}
      {/* <Input /> */}
      {/* <AlertComponent type="sucess">opa</AlertComponent> */}
    </div>
  );
}

export default App;
