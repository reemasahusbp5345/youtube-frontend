import React, { useState } from "react";

const VideoPlayer = ({videoFile,thumbnail}) => {

  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div onMouseEnter={() => setIsPlaying(true)}>
      {isPlaying ? (
        <video autoPlay controls onMouseLeave={()=>setIsPlaying(false)}>
            <source src={videoFile} type="video/mp4"/>
        </video>
      ) : (
        <img className="w-full" src={thumbnail} alt="thumbnail" />
      )}
    </div>
  );
};

export default VideoPlayer;
