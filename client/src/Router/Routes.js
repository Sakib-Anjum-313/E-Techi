import { createBrowserRouter } from "react-router-dom";
import UserCourseInfoProvider from "../Context/UserCourseInfoProvider";
import VideoProvider from "../Context/VideoProvider";
import AdminPage from "../Pages/AdminPage/AdminPage";
import UserLogin from "../Pages/LoginPage/UserLogin";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import HomePage from "../Pages/UserPage/Outlets/HomePage/HomePage";
import LeftSideVideoBar from "../Pages/UserPage/Outlets/HomePage/Outlets/LeftSideVideoBar/LeftSideVideoBar";
import Quiz from "../Pages/UserPage/Outlets/Quiz.js/Quiz";
import UserDashBoard from "../Pages/UserPage/Outlets/UserDashBoard/UserDashBoard";
import UserPage from "../Pages/UserPage/UserPage";
import AdminRoute from "./AdminRoute/AdminRoute";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <UserLogin></UserLogin>,
  },
  {
    path: "/register",
    element: <RegisterPage></RegisterPage>,
  },
  {
    path: "/adminPage",
    element: (
      <AdminRoute>
        <AdminPage></AdminPage>
      </AdminRoute>
    ),
  },
  {
    path: "/",
    element: <UserPage></UserPage>,
    children: [
      {
        path: "/",
        element: (
          <VideoProvider>
            <UserCourseInfoProvider>
              <HomePage></HomePage>
            </UserCourseInfoProvider>
          </VideoProvider>
        ),
        children: [
          {
            path: "/:id",
            element: <LeftSideVideoBar></LeftSideVideoBar>,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <UserDashBoard></UserDashBoard>,
      },
      {
        path: "/quiz",
        element: <Quiz></Quiz>,
      },
    ],
  },
]);

// children: [
//             {
//                 path: "/profilePage",
//                 element:
//             },
//             {
//                 path: "/leaderBoard",
//                 element:
//             }
//         ]
