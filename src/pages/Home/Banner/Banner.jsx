
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
        <div className="pt-32 max-w-screen-xl mx-auto px-5">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="my-auto">
                    <div className="text-left">
                        <h3 data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="text-[rgb(0,195,169)] lg:text-5xl text-xl font-bold mt-5">Hi, I am MD Farid</h3>
                        <p data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="my-3 text-xl">MERN stack developer</p>
                        <p data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="text-gray-400">
                            As a MERN Stack web developer, I specialize in building dynamic and robust applications. My expertise lies in seamlessly integrating front-end and back-end components for optimal performance.<span className="hidden lg:block">The widely adopted MERN Stack provides me with abundant resources and community support.With the modular architecture of MERN, I create scalable and maintainable applications.Leveraging JavaScript, I develop server-side logic and interactive user interfaces effectively.
                            </span>
                        </p>
                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="font-semibold text-left text-[rgb(0,195,169)] hidden lg:block h-24">
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
                    </div>
                </div>
                <div className="mx-auto">
                    <div className="avatar" >
                        <div data-aos="zoom-in-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="rounded-full bg-[rgb(0,195,169)]">
                            <div className="w-5/6 mx-auto">
                                <img src={img} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-zoom"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine" className="text-center pt-5">

                <a href="https://drive.google.com/uc?export=download&id=15OVCtW-lLpo8f4ZUxYSSr6ocWQmmcDbp" download="MD Farid Resume_MERN stack.pdf" rel="noopener noreferrer">
                    <button className="btn btn-outline text-[rgb(0,195,169)] hover:bg-[rgb(0,195,169)] hover:border-none hover:text-white text-center">
                        Download Resume
                    </button>
                </a>

            </div>
        </div>
    );
};

export default Banner;