/* eslint-disable no-unused-vars */
import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import VideoPlayer from './styles/exercicio 15';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <VideoPlayer src="https://v4.cdnpk.net/videvo_files/video/free/video0483/large_watermarked/_import_60d962f06b3ef8.86089157_FPpreview.mp4" />
    </div>
  );
}

export default App;
