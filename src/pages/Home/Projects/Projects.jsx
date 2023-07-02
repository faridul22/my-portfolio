import { FaGithub } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";


const Projects = () => {
    return (
        <div className="my-36">
            <h3 data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500" className="font-bold text-2xl text-center ">Projects</h3>
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

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                <div data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="rounded-md w-full border-2 border-red-500 ">
                    <figure><img className="object-cover object-top hover:object-bottom duration-1000 h-48 w-96 rounded-t-md" src="https://i.ibb.co/prMVnVQ/pro-drawing-web-app-1.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Pro Drawing</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-red-700 text-white btn-md normal-case">Project Details</button>
                        </div>
                        <div className="flex justify-around items-center">
                            <p><a href=""><FaGithub /> Client</a></p>
                            <a href=""><FaGithub /> Server</a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="rounded-md w-full border-2 border-red-500">
                    <figure><img className="object-cover object-top hover:object-bottom duration-1000 h-48 w-96 rounded-t-md" src="https://i.ibb.co/THwf97T/best-recipes-f43ba-web-app.png" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Best Recipes</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-red-700 text-white btn-md normal-case">Project Details</button>
                        </div>
                        <div className="flex justify-around">
                            <p><a href=""><FaGithub /> Client</a></p>
                            <a href=""><FaGithub /> Server</a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="rounded-md w-full border-2 border-red-500">
                    <figure><img className="object-cover object-top hover:object-bottom duration-1000 h-48 w-96 rounded-t-md" src="https://i.ibb.co/7Y1jFg2/magic-toy-box-web-app-1.jpg" alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Magic Toy Box</h2>
                        <p>How to park your car at your garage?</p>
                        <div className="card-actions justify-center">
                            <button className="btn bg-red-700 text-white btn-md normal-case">Project Details</button>
                        </div>
                        <div className="flex justify-around">
                            <p><a href=""><FaGithub /> Client</a></p>
                            <a href=""><FaGithub /> Server</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;