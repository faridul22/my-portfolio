import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import TechStack from "../pages/Home/TechStack/TechStack";
import Projects from "../pages/Home/Projects/Projects";
import ContactForm from "../pages/Home/ContactForm/ContactForm";
import About from "../pages/Home/About/About";

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
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <ContactForm></ContactForm>
      },

    ]
  },
]);
export default router;