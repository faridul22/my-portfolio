import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-5'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;