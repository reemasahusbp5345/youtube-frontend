import React from 'react';
import VideoPlayer from './VideoPlayer';
import { Link } from 'react-router-dom';

const ListView = ({videoList}) => {
    return (
        <div  className="  p-2">
      {videoList?.map((video) => (
        <Link to={video?._id} key={video?._id} className="flex m-4">
          <div className='w-1/3'>
          <VideoPlayer videoFile={video?.videoFile} thumbnail={video?.thumbnail}/>
          </div>
          <div className="my-2 mx-4 w-2/3">
              <h3>{video?.title}</h3>
              <h4> 10.3k Views . 44 minutes ago</h4>
            <div className='flex m-2'>
            <img
              className="w-10 h-10 mr-2 rounded-full object-cover"
              src={video?.owner?.avatar}
              alt="avatar"
            />
              <h4> {video?.owner?.username}</h4>
            </div>
            <div>{video?.description}</div>
          </div>
        </Link>
      ))}
    </div>
    );
};

export default ListView;