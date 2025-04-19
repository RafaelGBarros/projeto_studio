'use client';

import { useEffect } from 'react';

export default function Principal() {
  useEffect(() => {
    const videoElement = document.getElementById('video-player');

    const videos = [
      '/videos/001.mp4',
      '/videos/002.mp4',
      '/videos/003.mp4',
    ];

    let currentIndex = 0;

    const playNextVideo = () => {
      currentIndex = (currentIndex + 1) % videos.length;
      videoElement.src = videos[currentIndex];
      videoElement.play();
    };

    videoElement.src = videos[currentIndex];
    videoElement.addEventListener('ended', playNextVideo);

    return () => {
      videoElement.removeEventListener('ended', playNextVideo);
    };
  }, []);

  return (
    <div className="principal">
      <video
        id="video-player"
        autoPlay
        muted
        playsInline
      />
    </div>
  );
}
