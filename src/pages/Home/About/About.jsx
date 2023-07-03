import AOS from "aos";
import { useEffect } from "react";
import { FaGithub } from 'react-icons/fa6';
import { TypeAnimation } from "react-type-animation";


const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="py-32">
            <h3 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="font-bold text-2xl text-center uppercase">About Me</h3>
            <p className="text-center mt-2 mb-10">
                <TypeAnimation
                    sequence={[
                        'Here is some information about me.',
                        1000,
                    ]}
                    speed={10}
                    cursor={false}
                    preRenderFirstString={false}
                    style={{ fontSize: '1em' }}
                    repeat={1}
                />
            </p>
            <div className="grid lg:grid-cols-2 gap-5">
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="text-justify mx-3">
                    <h3 className="text-2xl font-semibold my-3 text-red-600">Hello,<br /> I am MD Farid from Dhaka, Bangladesh.</h3>

                    <p className="my-5">I am a practical and passionate MERN  Stack web developer. At the same time, I am taking a graduate in Bangla literature at a national University. currently, I am finishing a web development course from programming hero with Jhankar Mahbub.</p>
                    <p> I learned from there a variety of front-end technologies including HTML, CSS, JavaScript, React.JS, Firebase authentication, and a few popular frameworks such as Bootstrap CSS, Tailwind CSS as well as some back-end technologies Node.js, Express.js, MongoDB and more.</p>
                    <p>I have completed more than 40+ projects with my learned knowledge.
                        Check out my <span className="inline-block align-middle ml-1"><a target="_blank" rel="noopener noreferrer" href="https://github.com/faridul22?tab=repositories" className="flex items-center text-blue-600">
                            <FaGithub className="mr-1" /><>Github</>
                        </a></span>
                    </p>
                </div>

                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <h3 className="text-2xl font-semibold text-red-600 my-5 text-center border-b-2 w-2/4 mx-auto pb-3 mb-5">My Skills</h3>
                    <div className="grid lg:grid-cols-6 grid-cols-3 gap-5 w-1/2 mx-auto mt-5">
                        <img data-aos="fade-right"
                            data-aos-duration="3000"
                            width={60}
                            title="HTML5"
                            src="https://i.ibb.co/HGTpWGL/html-1.png" alt="" />
                        <img data-aos="fade-up"
                            data-aos-duration="3000"
                            width={60}
                            title="CSS3"
                            src="https://i.ibb.co/7jzZp2F/css3-1.png" alt="" />
                        <img data-aos="fade-left"
                            data-aos-duration="3000"
                            width={60}
                            title="Bootstrap CSS"
                            src="https://i.ibb.co/BZz8GMG/bootstrap-1.png" alt="" />
                        <img data-aos="fade-up"
                            data-aos-duration="3000"
                            width={60}
                            title="Tailwind CSS"
                            src="https://i.ibb.co/XbmjDN5/tailwind-1.png" alt="" />
                        <img data-aos="fade-left"
                            data-aos-duration="3000"
                            width={60}
                            title="JavaScript"
                            src="https://i.ibb.co/M5f66yJ/javascript-1.png" alt="" />
                        <img data-aos="zoom-out-up"
                            data-aos-duration="3000"
                            width={60}
                            title="React.js"
                            src="https://i.ibb.co/1GJhg0F/react-1.png" alt="" />
                        <img data-aos="zoom-in-up"
                            data-aos-duration="3000"
                            width={60}
                            title="React router DOM"
                            src="https://i.ibb.co/nRR5Gx7/router-1.png" alt="" />
                        <img
                            data-aos="fade-down"
                            data-aos-duration="3000"
                            width={60}
                            title="Firebase"
                            src="https://i.ibb.co/LvmjrbJ/firebase-1.png" alt="" />
                        <img
                            data-aos="fade-left"
                            data-aos-duration="3000"
                            width={60}
                            title="Node.js"
                            src="https://i.ibb.co/LkRZGdF/nodejs-1.png" alt="" />
                        <img
                            data-aos="fade-right"
                            data-aos-duration="3000"
                            width={60}
                            title="Express.js"
                            src="https://i.ibb.co/FsGs93w/express-js-1.png" alt="" />
                        <img
                            data-aos="fade-right"
                            data-aos-duration="3000"
                            width={60}
                            title="MongoDB"
                            src="https://i.ibb.co/Xths2dM/mongodb-1.png" alt="" />
                        <img
                            data-aos="zoom-out-down"
                            data-aos-duration="3000"
                            width={60}
                            title="JSON Web Token"
                            src="https://i.ibb.co/jT66H38/jwt-1.png" alt="" />
                    </div>

                    <h3 data-aos="fade-down"
                        data-aos-duration="3000" className="text-2xl font-semibold text-center mt-20 border-b-2 w-2/4 mx-auto mb-5 pb-5 text-red-700">Tools</h3>
                    <div className="grid lg:grid-cols-6 grid-cols-3 gap-5 w-1/2 mx-auto mt-5">
                        <img
                            width={60}
                            title="VS Code"
                            src="https://i.ibb.co/vjstRh8/vscode-1.png" alt="" />
                        <img
                            width={60}
                            title="Git"
                            src="https://i.ibb.co/NWJq8p9/git-svg-1.png" alt="" />
                        <img
                            width={60}
                            title="Figma"
                            src="https://i.ibb.co/bNqDnZL/figma-1.png" alt="" />
                        <img
                            width={60}
                            title="Chrome dev tools"
                            src="https://i.ibb.co/x8FRgjY/chrome-dev-1.png" alt="" />
                        <img
                            width={60}
                            title="Netlify"
                            src="https://i.ibb.co/QFGSFxS/netlify-1.png" alt="" />
                        <p
                            width={60}
                            title="GitHub"
                            className="text-3xl"><FaGithub /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;