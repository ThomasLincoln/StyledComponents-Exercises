/* eslint-disable no-unused-vars */
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Mansonry from './styles/exercicio14';

function App() {
  const links = [
    'https://m.media-amazon.com/images/I/71bN7mqVC+L._AC_UF1000,1000_QL80_.jpg',
    'https://img.redbull.com/images/c_crop,w_2344,h_1172,x_0,y_0,f_auto,q_auto/c_scale,w_1200/redbullcom/2018/01/17/9e235bdc-0636-4131-a8f3-91a7446899fb/games-dark-souls-switch',
    'https://m.media-amazon.com/images/I/91LpyclUfVL._AC_UF1000,1000_QL80_.jpg',
    'https://img.redbull.com/images/c_crop,w_2344,h_1172,x_0,y_0,f_auto,q_auto/c_scale,w_1200/redbullcom/2018/01/17/9e235bdc-0636-4131-a8f3-91a7446899fb/games-dark-souls-switch',
    'https://m.media-amazon.com/images/I/71bN7mqVC+L._AC_UF1000,1000_QL80_.jpg',
    'https://m.media-amazon.com/images/I/71bN7mqVC+L._AC_UF1000,1000_QL80_.jpg',
  ];

  return (
    <div className="App">
      <GlobalStyle />
      <Mansonry links={links} />
    </div>
  );
}

export default App;
