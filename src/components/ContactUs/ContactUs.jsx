import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ContactUs = () => {

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])



  const [data, setData] = useState({
    username: '',
    email: '',
    message: ''
  })

  const refForm = useRef();


  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      const serviceId = 'service_qkgeyzb'
      const templateId = 'template_2wn43ia'
      // 3er parametro
      const publicKey = 'i9JqoBg9vA0X6dC52'

      emailjs.sendForm(serviceId, templateId, refForm.current, publicKey)
        .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      setData({
        username: '',
        email: '',
        message: ''
      })
  }


    return (
      <div id='contact' className="h-full w-full bg-[#0D0D0D] py-24">
        <section className='flex justify-center items-center lg:pt-10 mx-5 sm:mx-0'>
          <div className='z-10 hidden lg:w-[35rem] lg:flex lg:justify-center lg:items-center' data-aos="fade-up">
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1703865403/contact2_y1f45t.png" alt="" className='z-10 w-[35rem]'/>
          </div>
          <div className="bg-white px-8 pb-8 rounded-lg shadow-lg max-w-sm lg:w-1/3 z-10" data-aos="fade-up">
            <div className="flex justify-center mb-6">
              
            </div>
            <h2 className="text-2xl font-semibold text-center mb-5 cursor-default">
            Contact us
            </h2>
            <form ref={refForm} onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  name='username'
                  id="username"
                  value={data.username}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-purple-500"
                  required
                  placeholder="James Brown"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email Adress *
                </label>
                <input
                  type="email"
                  name='email'
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-purple-500"
                  required
                  placeholder="hello@email.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Message *
                </label>
                <textarea
                  name='message'
                  id="message"
                  value={data.message}
                  onChange={handleChange}
                  className="form-input w-full p-2  border rounded-lg text-gray-700 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
               Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    );
};

export default ContactUs;       