
import { createBrowserRouter } from "react-router-dom";
import College from "./../page/education/College";
import School from "./../page/education/School";
import AuthBlock from "../component/auth/AuthBlock";
import Register from "../component/auth/Register";
import University  from "../page/education/Universty";
import Sections from './../component/AllSection/Sections';

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthBlock />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <Sections />,
    children: [
      {
        path: "university",
        element: <University />,
      },
      {
        path: "college",
        element: <College />,
      },
      {
        path: "school",
        element: <School />,
      },
    ],
  },
]);

export default router;
