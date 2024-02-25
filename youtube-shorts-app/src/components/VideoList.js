// VideoList.js
import React from 'react';
import VideoPlayer from './VideoPlayer'; // Corrected import path

const videos = [
  'video_url_1',
  'video_url_2',
  // Add more video URLs as needed
];

function VideoList() {
  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <VideoPlayer key={index} videoUrl={video} />
      ))}
    </div>
  );
}

export default VideoList;
