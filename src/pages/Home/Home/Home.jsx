import { useEffect } from "react";
import AOS from 'aos';
import { TypeAnimation } from "react-type-animation";

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up-left" className="pt-64">
            <div data-aos="fade-up-right" className="text-center">
                <p className="text-2xl">Motivated junior MERN stack developer proficient in HTML, CSS, JavaScript, React. Skilled in MongoDB, Express, Node.js. Passionate about continuous learning, collaboration, and building responsive web applications.</p>
                <div data-aos="fade-up-left" className="text-3xl mt-5 text-red-600">
                    <TypeAnimation
                        sequence={[
                            `I am a Font-end web developer`,
                            1000,
                            'I am MERN Stack web developer',
                            1000,
                            'I enjoy coding and new technology',
                            1000,
                            'I making website cool',
                            1000,
                        ]}
                        speed={5}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;