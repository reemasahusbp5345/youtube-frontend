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

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/history',
          element: <ProtectedRoute redirectTo="/history"><History /></ProtectedRoute>,
        },
        {
          path: '/collections',
          element: <ProtectedRoute redirectTo="/collections"><Collections /></ProtectedRoute>,
        },
        {
          path: '/likedVideos',
          element: <ProtectedRoute redirectTo="/likedVideos"><LikedVideos /></ProtectedRoute>,
        },
        {
          path: '/myContent',
          element: <ProtectedRoute redirectTo="/myContent"><MyContent /></ProtectedRoute>,
        },
        {
          path: '/subscribers',
          element: <ProtectedRoute redirectTo="/subscribers"><Subscribers /></ProtectedRoute>,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
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
