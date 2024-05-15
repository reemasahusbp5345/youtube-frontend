import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addVideos } from "../Redux/videoSlice";
const useAllVideos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAllVideos();
     // eslint-disable-next-line 
  }, []);
  const fetchAllVideos = () => {
    axios
      .get("http://localhost:8000/api/v1/videos/getAllVideos")
      .then((res) => {
         dispatch(addVideos(res?.data?.data));
      })
      .catch((err) => console.log(err));
  };
};

export default useAllVideos;
