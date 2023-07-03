
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import TechStack from "../TechStack/TechStack";
import ContactForm from './../ContactForm/ContactForm';
import About from './../About/About';

const Home = () => {

    return (
        <div className="">
            <Banner></Banner>
            <TechStack></TechStack>
            <Projects></Projects>
            <ContactForm></ContactForm>
            <About></About>
        </div>
    );
};

export default Home;