/* eslint-disable no-unused-vars */
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Acordeao from './styles/exercicio12';
import Chart from './styles/exercicio11';
import TimeLine from './styles/exercicio10';
import Modal from './styles/exercicio9';
import Dropdown from './styles/exercicio8';
import Carrossel from './styles/exercicio7';
import ProgressBar from './styles/exercicio6';
import NavBar from './styles/exercicio5';
import Botao from './styles/exercicio1';
import Card from './styles/exercicio2';
import Input from './styles/exercicio3';
import AlertComponent from './styles/exercicio4';

function App() {
  // const links = [
  // 'https://s2-techtudo.glbimg.com/K75tbI6KaEECcnF8U-nNZ2Ntn1A=/0x0:695x391/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/2/q/tdjra4RUKJ4hP7Mp4voA/2016-04-11-dark-soulstm-iii-20160410224855.jpg',
  // 'https://s2.glbimg.com/ypM8D50QTZjwDKGEp0AXf_BHLNM=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/J/f/IY697dSgejr3wbPYLA8w/dmc1.jpg',
  // ];

  // const options = ['opção 1', 'opção 2', 'opção 3'];

  const objetos = [
    { title: 'Mario', date: '29/06/2002', description: 'A mario Game' },
    { title: 'Mario2', date: '30/05/2002', description: 'A mario Game' },
    { title: 'Mario3', date: '29/04/2002', description: 'A mario Game' },
    { title: 'Mario3', date: '29/04/2002', description: 'A mario Game' },
    { title: 'Mario3', date: '29/04/2002', description: 'A mario Game' },
  ];
  const data = [
    { label: 'Item 1', value: 10 },
    { label: 'Item 2', value: 20 },
    { label: 'Item 3', value: 15 },
    { label: 'Item 4', value: 8 },
    { label: 'Item 5', value: 12 },
  ];

  // Função de comparação para ordenar os objetos por data
  function compareDates(a, b) {
    const dateA = new Date(a.date.split('/').reverse().join('/'));
    const dateB = new Date(b.date.split('/').reverse().join('/'));

    return dateA - dateB;
  }
  // Ordena os objetos com base na data
  const objetosOrdenados = objetos.sort(compareDates);
  return (
    <div className="App">
      <GlobalStyle />
      <Acordeao />
      {/* <Chart data={data} /> */}
      {/* <TimeLine datas={objetosOrdenados} espacamento="14" /> */}
      {/* <Modal isOpen> */}
      {/* <h1>opa</h1> */}
      {/* </Modal> */}
      {/* <Dropdown options={options} /> */}
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
