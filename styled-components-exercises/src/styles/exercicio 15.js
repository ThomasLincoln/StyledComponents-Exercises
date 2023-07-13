import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';

function VideoPlayer({ src, title }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRef = useRef(null);
  const progressRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      videoRef.current.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedData = () => {
    setDuration(videoRef.current.duration);
  };

  const handleProgressClick = (e) => {
    const progressWidth = progressRef.current.offsetWidth;
    const clickedTime = (e.nativeEvent.offsetX / progressWidth) * duration;
    videoRef.current.currentTime = clickedTime;
    setCurrentTime(clickedTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <StyledVideoPlayer>
      <video
        ref={videoRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />
      <Controls>
        <PlayButton onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </PlayButton>
        <Progress onClick={handleProgressClick}>
          <ProgressBar
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </Progress>
        <Time>
          <span>{formatTime(currentTime)}</span> /{' '}
          <span>{formatTime(duration)}</span>
        </Time>
        <FullscreenButton onClick={toggleFullScreen}>
          {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
        </FullscreenButton>
      </Controls>
      <VideoInfo>
        <h2>{title}</h2>
        <p>Additional video information here</p>
      </VideoInfo>
    </StyledVideoPlayer>
  );
}

const StyledVideoPlayer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

const ButtonStyles = css`
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const PlayButton = styled.button`
  ${ButtonStyles}
`;

const Progress = styled.div`
  flex-grow: 1;
  height: 5px;
  background-color: #aaa;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #f00;
`;

const Time = styled.div`
  margin-left: 10px;
  color: #fff;
  font-size: 14px;
`;

const FullscreenButton = styled.button`
  ${ButtonStyles}
`;

const VideoInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  color: #fff;
  transition: transform 0.3s;

  h2 {
    font-size: 18px;
  }

  p {
    font-size: 14px;
  }
`;

StyledVideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
