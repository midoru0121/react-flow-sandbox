import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root"
import InitialNode from "./pages/InitialNode"
import ErrorPage from "./pages/Error";
import CustomNodesExample from "./pages/CustomNodes";
import EasyConnectExample from "./pages/EasyConnect";
import BasicExample from "./pages/Basic";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/basic",
      element: <BasicExample />,
      errorElement: <ErrorPage />,
    }, 
    {
      path: "/initial",
      element: <InitialNode />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/custom_nodes",
      element: <CustomNodesExample />,
      errorElement: <ErrorPage />,
  },    
    {
        path: "/easy_connect",
        element: <EasyConnectExample />,
        errorElement: <ErrorPage />,
    },
  ]);
