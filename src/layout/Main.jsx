import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Helmet>
                <title>MD Farid Portfolio || Home</title>
            </Helmet>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;