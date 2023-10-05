import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import AOS from 'aos';
import { TypeAnimation } from 'react-type-animation';
import { FaEnvelopeOpenText, FaGithub, FaLinkedin, FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8jb80lt', 'template_vsclmr4', form.current, 'VUUAEUmJzjY-2Fhpt')
            .then((result) => {
                console.log(result.text);
                if (result.text == "OK") {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Thanks!! your message successfully send',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='pt-32 px-5'>
            <Helmet>
                <title>MD Farid Portfolio || Contact me</title>
            </Helmet>
            <h3 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="font-semibold text-3xl text-center uppercase mb-3">Contact Me</h3>

            <p className="text-center mt-2 mb-10">
                <TypeAnimation
                    sequence={[
                        'You can contact me to hire me or know more details about me.',
                        1000,
                    ]}
                    speed={10}
                    cursor={false}
                    preRenderFirstString={false}
                    style={{ fontSize: '1em' }}
                    repeat={1}
                />
            </p>

            <div className='grid lg:grid-cols-2 gap-5'>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <h3 className='text-2xl text-center font-semibold'>Get In <span className='text-[rgb(0,195,169)]'>Touch</span></h3>
                    <p className='text-center'>Contact me directly through the provided form or reach out via the provided contact details to discuss potential collaborations, project inquiries, or any other questions you may have.</p>
                    <ul className='my-20 w-3/4'>
                        <li className='text-blue-600 font-semibold'>
                            <p className='flex items-center'><FaLocationDot className='mr-2' /> <>Location:</><span className='mx-auto text-gray-400'>Dhaka, Bangladesh</span></p>
                        </li>
                        <li className='text-blue-600 font-semibold mt-5'>
                            <p className='flex items-center'><FaPhoneVolume className='mr-2' /> <>Phone:</><span className='mx-auto text-gray-400'>+880 1611-118926</span></p>
                        </li>
                        <li className='text-blue-600 font-semibold mt-5'>
                            <p className='flex items-center'><FaEnvelopeOpenText className='mr-2' /> <>Email:</> <span className='mx-auto text-gray-400'>developerfarid2223@gmail.com</span></p>
                        </li>
                    </ul>
                    <div >
                        <h3 className='text-2xl'>Hey, I am also <span className='text-[rgb(0,195,169)]'>available here....</span></h3>
                        <p className='mt-2'><small>Unlock the gates of conversation and grace me with your message.</small></p>

                        <div className="flex mt-5 w-1/2 mx-auto">
                            <a href="https://github.com/faridul22" target="_black" className="text-3xl cursor-pointer mr-3"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/md-farid-5a5633248/" target="_black" className="text-3xl cursor-pointer text-blue-600"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className='bg-gray-800 px-2 py-10 rounded-md'
                >
                    <form ref={form} onSubmit={sendEmail}>

                        <div className="form-control pb-5 w-4/5 mx-auto">
                            <label>Name</label>
                            <input required className="input input-bordered w-full bg-gray-900" type="text" name="user_name" placeholder='Your name' />
                        </div>

                        <div className="form-control pb-5 w-4/5 mx-auto">
                            <label>Email</label>
                            <input required className="input input-bordered w-full bg-gray-900" type="email" name="user_email" placeholder='Your email' />
                        </div>

                        <div className="form-control pb-5 w-4/5 mx-auto">
                            <label>Message</label>
                            <textarea required name="message" className="input input-bordered w-full bg-gray-900 h-[150px]" placeholder='Type your messages' />
                        </div>

                        <div className="form-control pb-5 w-4/5 mx-auto">
                            <input className='btn bg-[rgb(0,195,169)] text-white normal-case' type="submit" value="Send message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;