import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Dropdown from './styles/exercicio8';
// import Carrossel from './styles/exercicio7';
// import ProgressBar from './styles/exercicio6';
// import NavBar from './styles/exercicio5';
// import Botao from './styles/exercicio1';
// import Card from './styles/exercicio2';
// import Input from './styles/exercicio3';
// import AlertComponent from './styles/exercicio4';

function App() {
  // const links = [
  // 'https://s2-techtudo.glbimg.com/K75tbI6KaEECcnF8U-nNZ2Ntn1A=/0x0:695x391/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/2/q/tdjra4RUKJ4hP7Mp4voA/2016-04-11-dark-soulstm-iii-20160410224855.jpg',
  // 'https://s2.glbimg.com/ypM8D50QTZjwDKGEp0AXf_BHLNM=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/J/f/IY697dSgejr3wbPYLA8w/dmc1.jpg',
  // ];

  const options = ['opção 1', 'opção 2', 'opção 3'];
  return (
    <div className="App">
      <GlobalStyle />
      <Dropdown options={options} />
      {/* <Carrossel links={links} largura="90" altura="40" /> */}
      {/* <ProgressBar value="80" /> */}
      {/* <NavBar>
        <ul>
          <li>teste1</li>
          <li>teste2</li>
          <li>teste3</li>
        </ul>
      </NavBar> */}
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
