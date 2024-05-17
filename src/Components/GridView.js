import React from "react";
import VideoPlayer from "./VideoPlayer";
import { Link } from "react-router-dom";

const GridView = ({videoList}) => {
  return (
    <div  className="flex flex-wrap p-2">
      {videoList?.map((video) => (
        <Link to={video?._id}  key={video?._id} className="flex m-2  w-[31%] flex-col"> 
        
          <VideoPlayer videoFile={video?.videoFile} thumbnail={video?.thumbnail}/>
           <div className="flex m-1">
            <img
              className="w-10 h-10 mr-2 rounded-full object-cover"
              src={video?.owner?.avatar}
              alt="avatar"
            />
            <div>
              <h3>{video?.title}</h3>
              <h4> 10.3k Views . 44 minutes ago</h4>
              <h4>{video?.owner?.username}</h4>
            </div>
          </div>
         
        </Link>
      ))}
    </div>
  );
};

export default GridView;
