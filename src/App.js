import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import History from "./Components/History";
import Collections from "./Components/Collections";
import LikedVideos from "./Components/LikedVideos";
import MyContent from "./Components/MyContent";
import Subscribers from "./Components/Subscribers";
import Login from "./Components/Login";
import Register from "./Components/Register";
import store from "./Redux/Store";
import { Provider } from "react-redux";
import ProtectedRoute from "./utils/ProtectedRoute";
import VideoDetail from "./Components/VideoDetail";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          element: <ProtectedRoute />,
          children: [
            {
              path: "/:id",
              element: <VideoDetail />,
            },
            {
              path: "/history",
              element: <History />,
            },
            {
              path: "/collections",
              element: <Collections />,
            },
            {
              path: "/likedVideos",
              element: <LikedVideos />,
            },
            {
              path: "/myContent",
              element: <MyContent />,
            },
            {
              path: "/subscribers",
              element: <Subscribers />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
