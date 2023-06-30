import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <div className="text-center mt-20">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;