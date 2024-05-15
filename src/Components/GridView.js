import React from "react";

const GridView = ({videoList}) => {
  return (
    <div  className="flex flex-wrap p-2">
      {videoList?.map((video) => (
        <div key={video?._id} className="flex m-2  w-[31%] flex-col">
          <img className="w-full" src={video?.thumbnail} alt="thumbnail" />
          <div className="flex m-1">
            <img
              className="w-10 h-10 mr-2 rounded-full"
              src="https://images.pexels.com/photos/2519812/pexels-photo-2519812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
            />
            <div>
              <h3>{video?.title}</h3>
              <h4> 10.3k Views . 44 minutes ago</h4>
              <h4> Code Master</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
