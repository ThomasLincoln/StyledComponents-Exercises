import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Botao from './styles/exercicio1';
import Card from './styles/exercicio2';
import Input from './styles/exercicio3';
import AlertComponent from './styles/exercicio4';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Botao>Start</Botao>
      <Card>
        <spam>Texto</spam>
      </Card>
      <Input />
      <AlertComponent type="sucess">opa</AlertComponent>
    </div>
  );
}

export default App;
