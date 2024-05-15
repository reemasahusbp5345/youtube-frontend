import React from 'react';

const ListView = ({videoList}) => {
    return (
        <div  className="  p-2">
      {videoList?.map((video) => (
        <div key={video?._id} className="flex m-4">
          <img className="w-1/3" src={video?.thumbnail} alt="thumbnail" />
          <div className="my-2 mx-4">
              <h3>{video?.title}</h3>
              <h4> 10.3k Views . 44 minutes ago</h4>
            <div className='flex m-2'>
            <img
              className="w-10 h-10 mr-2 rounded-full"
              src="https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
            />
              <h4> Code Master</h4>
            </div>
            <div>{video?.description}</div>
          </div>
        </div>
      ))}
    </div>
    );
};

export default ListView;