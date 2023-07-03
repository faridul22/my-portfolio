import AOS from "aos";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaGlobe } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";


const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="pt-32">
            <Helmet>
                <title>MD Farid Portfolio || Projects</title>
            </Helmet>
            <h3 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="font-bold text-2xl text-center uppercase">Projects</h3>

            <p className="text-center mt-2 mb-10">
                <TypeAnimation
                    sequence={[
                        'Recently I have build some projects.',
                        1000,
                    ]}
                    speed={5}
                    cursor={false}
                    preRenderFirstString={false}
                    style={{ fontSize: '1em' }}
                    repeat={1}
                />
            </p>

            <div className="grid grid-cols-1 gap-4">
                <div data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="rounded-md card lg:card-side bg-base-100 shadow-xl w-11/12 mx-auto border-2 border-gray-500">
                    <figure><img className="object-cover object-top hover:object-bottom duration-1000 h-96 w-[1800px]" src="https://i.ibb.co/prMVnVQ/pro-drawing-web-app-1.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Pro Drawing</h2>
                        <p><strong>Project Description:</strong> This website is based on summer school camps. It was a drawing related school.Three types of user roles are implemented on this website: admin, Instructor, and Student. Here a separate dashboard is created for each user. Admin can make an ordinary user an Instructor or admin if he wants. Instructors can add, delete and update their classes. A student can select any category or get admission.
                        </p>

                        <p><strong>Tech:</strong> The website is built with React Library. This website uses some other packages including React.js, Tailwind CSS, Stripe/stripe-js, Tanstack/react-query, Axios, Firebase, moment .js,react-dom, sweet alert2, and more.</p>

                        <div className="flex justify-between items-center mt-5">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-faridul22" className="flex items-center">
                                <FaGithub className="mr-2" /><>Client</>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/programming-hero-web-course1/b7a12-summer-camp-server_side-faridul22" className="flex items-center">
                                <FaGithub className="mr-2" /><>Server</>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://pro-drawing.web.app/" className="flex items-center">
                                <FaGlobe className="mr-2" /><>Demo</>
                            </a>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="rounded-md card lg:card-side bg-base-100 shadow-xl w-11/12 mx-auto border-2 border-gray-500">
                    <figure><img className="object-cover object-top hover:object-bottom duration-1000 h-80 w-[1000px]" src="https://i.ibb.co/THwf97T/best-recipes-f43ba-web-app.png" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Best Recipes</h2>

                        <p><strong>Project Description:</strong> This website is a Chines recipe-related website. On this website, When a user visits the user can see some information from the homepage but if he wants to see the recipes of a chef then he has to log in to the site.</p>

                        <p><strong>Tech:</strong> The website is built with React Library. This website uses some other packages including  Bootstrap, React, React Router DOM, react-lazy-load, react-rating, Firebase Authentication, and more.</p>

                        <div className="flex justify-between items-center mt-5">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/faridul22/best-recipes-client" className="flex items-center">
                                <FaGithub className="mr-2" /><>Client</>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/faridul22/best-recipes-server" className="flex items-center">
                                <FaGithub className="mr-2" /><>Server</>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://best-recipes-f43ba.web.app/" className="flex items-center">
                                <FaGlobe className="mr-2" /><>Demo</>
                            </a>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="rounded-md card lg:card-side bg-base-100 shadow-xl w-11/12 mx-auto border-2 border-gray-500">
                    <figure><img className="object-cover object-top hover:object-bottom duration-1000  h-[495px] w-[450px] rounded-t-md" src="https://i.ibb.co/7Y1jFg2/magic-toy-box-web-app-1.jpg" alt="car!" /></figure>
                    <div className="card-body w-5/6">
                        <h2 className="card-title">Magic Toy Box</h2>
                        <p><strong>Project Description:</strong>This website is related to kids toy cars. It was a E-commerce project. When a user visits this website, usually the homepage and block page And they will see the all toys page. This website has two more pages My Toys and Add a Toy, no user can enter without logging in to these two pages. Apart from these two, there is another page View Details, no one can access this page without login. A logged-in user can go to any route on this website. A logged user can add any new product and update or delete product information.</p>

                        <p><strong>Tech:</strong> To build this website I mainly used ReactJS, and TailWind CSS, DaisyUI.Also used some other note packages.</p>
                        <div className="flex justify-between items-center mt-5">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/faridul22/magic-toy-box-client" className="flex items-center">
                                <FaGithub className="mr-2" /><>Client</>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/faridul22/magic-toy-box-server" className="flex items-center">
                                <FaGithub className="mr-2" /><>Server</>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://magic-toy-box.web.app/" className="flex items-center">
                                <FaGlobe className="mr-2" /><>Demo</>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;