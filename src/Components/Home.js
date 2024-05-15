import React, {  useState } from "react";
import { useSelector } from "react-redux";
import useAllVideos from "../Hooks/useAllVideos";
import grid from "../assets/grid.png"
import list from "../assets/list.png"
import GridView from "./GridView";
import ListView from "./ListView";

const Home = () => {
  const [isGridView,setGridView]=useState(true)
  const videoList = useSelector((store) => store?.videos?.videosList);
  useAllVideos();
  return (
    <div className="bg-black text-white  overflow-y-auto h-screen">

      <div onClick={()=>{setGridView(!isGridView)}} className="cursor-pointer flex justify-end mx-4 my-2">{isGridView?<img width={36} src={grid} alt="grid"/>:<img width={36} alt="list" src={list}/>}</div>
      <div>
         {isGridView?<GridView videoList={videoList}/>:<ListView videoList={videoList}/>}
        
      </div>
    </div>
  );
};

export default Home;
