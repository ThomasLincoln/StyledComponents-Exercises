import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Botao from './styles/exercicio1';
import Card from './components/exercicio2';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Botao>Start</Botao>
      <Card>
        <spam>Texto</spam>
      </Card>
      <p />
    </div>
  );
}

export default App;
