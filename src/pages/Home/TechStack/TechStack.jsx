import AOS from "aos";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const TechStack = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="pt-32">
            <h3 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="font-bold text-2xl text-center">My Tech Stack</h3>

            <p className="text-center mt-2">
                <TypeAnimation
                    sequence={[
                        'Technologies I have been working with recently.',
                        1000,
                    ]}
                    speed={5}
                    cursor={false}
                    preRenderFirstString={false}
                    style={{ fontSize: '1em' }}
                    repeat={1}
                />
            </p>
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
        </div>
    );
};

export default TechStack;