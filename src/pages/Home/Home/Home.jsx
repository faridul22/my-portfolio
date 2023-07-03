
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import TechStack from "../TechStack/TechStack";
import ContactForm from './../ContactForm/ContactForm';
import About from './../About/About';
import { Helmet } from "react-helmet-async";

const Home = () => {

    return (
        <div className="">
            <Helmet>
                <title>MD Farid Portfolio || Home</title>
            </Helmet>
            <Banner></Banner>
            <TechStack></TechStack>
            <Projects></Projects>
            <ContactForm></ContactForm>
            <About></About>
        </div>
    );
};

export default Home;