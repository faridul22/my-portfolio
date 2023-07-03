
import Banner from "../Banner/Banner";
import Projects from "../Projects/Projects";
import TechStack from "../TechStack/TechStack";
import ContactForm from './../ContactForm/ContactForm';

const Home = () => {

    return (
        <div className="">
            <Banner></Banner>
            <TechStack></TechStack>
            <Projects></Projects>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;