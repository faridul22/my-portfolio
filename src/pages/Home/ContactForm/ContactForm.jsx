import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import AOS from 'aos';
import { TypeAnimation } from 'react-type-animation';

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
        <div className=' py-10 my-20 '>
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

            <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500">
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

                    <div className="form-control pb-5 w-1/2 mx-auto">
                        <input className='btn bg-red-600 text-white normal-case' type="submit" value="Send message" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ContactForm;