import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import TechStack from "../pages/Home/TechStack/TechStack";
import Projects from "../pages/Home/Projects/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/techStack',
        element: <TechStack></TechStack>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      }
    ]
  },
]);
export default router;