/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';

function VideoPlayer({ src }) {
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

StyledVideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;
