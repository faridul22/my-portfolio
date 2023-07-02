import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import TechStack from "../pages/Home/TechStack/TechStack";
import Projects from "../pages/Home/Projects/Projects";
import ContactForm from "../pages/Home/ContactForm/ContactForm";

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
      },
      {
        path: '/contact',
        element: <ContactForm></ContactForm>
      }
    ]
  },
]);
export default router;