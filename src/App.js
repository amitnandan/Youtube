import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Head from "./components/Head";
import WatchPage from "./components/watchPage";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="text-lg ">
        <Head />
        <RouterProvider router={appRouter} />
        {/* 
      
      Head 
      Body
        Sidebar
          MenuItems
        MainContainer
          ButtonList
          VideoContainer
            VideoCard
      
      */}
      </div>
    </Provider>
  );
}

export default App;
