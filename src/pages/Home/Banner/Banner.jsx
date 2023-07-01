
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from "react-type-animation";
import img from '../../../assets/md_farid-removebg-preview.png'
const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="lg:py-20 banner-container">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="">
                    <div className="text-left">
                        <h3 data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="text-red-600 lg:text-4xl text-xl font-bold my-5">Hi, I am MD Farid</h3>
                        <p data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="text-gray-400">
                            As a MERN Stack web developer, I specialize in building dynamic and robust applications. My expertise lies in seamlessly integrating front-end and back-end components for optimal performance.<span className="hidden lg:block">The widely adopted MERN Stack provides me with abundant resources and community support.With the modular architecture of MERN, I create scalable and maintainable applications.Leveraging JavaScript, I develop server-side logic and interactive user interfaces effectively.
                            </span>
                        </p>

                    </div>
                </div>
                <div className="mx-auto">
                    <div className="avatar" >
                        <div data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="rounded-full bg-red-600 ">
                            <div className="w-5/6 mx-auto">
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500" className="w-4/5 font-semibold mx-auto text-left text-red-600 hidden lg:block h-24">
                <TypeAnimation
                    sequence={[
                        'I am a passionate MERN Stack web developer.',
                        1000,
                        'I create dynamic and responsive applications.',
                        1000,
                        'I enjoy the flexibility and scalability of MERN Stack.',
                        1000,
                        'I continuously update my skills in MERN development.',
                        1000,
                    ]}
                    speed={5}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                />
            </div>
            <div data-aos="fade-up-left" className="text-center pt-5">
                <a href="https://drive.google.com/file/d/1UmmIkSnRTGfcyzyXuap5TYEfV19En-EQ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline text-red-600 hover:bg-red-700 hover:border-none hover:text-white text-center">Download Resume</button>
                </a>
            </div>
        </div>
    );
};

export default Banner;