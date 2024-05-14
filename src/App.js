import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import History from './Components/History';
import Collections from './Components/Collections';
import LikedVideos from './Components/LikedVideos';
import MyContent from './Components/MyContent';
import Subscribers from './Components/Subscribers';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/history",
        element: <History />
      },
      {
        path: "/collections",
        element: <Collections />
      },
      {
        path: "/likedVideos",
        element: <LikedVideos />
      },
      {
        path: "/myContent",
        element: <MyContent />
      },
      {
        path: "/subscribers",
        element: <Subscribers />
      }
    ]
  },{
    path:"/login",
    element:<Login/>
  },{
    path:"/register",
    element:<Register/>
  }
])
  return (
    <div className="App">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
