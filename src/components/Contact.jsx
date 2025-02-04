import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);


//changes to be made as neede
    emailjs
      .send(
        'service_8yfdpio',
        'template_dgjy316',
        {
          from_name: form.name,
          to_name: "Technozean",
          from_email: form.email,
          to_email: "sontakkesarthak27@gmail.com",
          message: form.message,
        },
        '_aKpXaQg_HjK7ivK5'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
  ref={formRef}
  onSubmit={handleSubmit}
  className='mt-1 flex flex-col gap-3'
>
  <label className='flex flex-col'>
    <span className='text-white font-medium mb-2'>Your Name</span>
    <input
      type='text'
      name='name'
      value={form.name}
      onChange={handleChange}
      placeholder="What's your name?"
      className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium'
    />
  </label>
  <label className='flex flex-col'>
    <span className='text-white font-medium mb-2'>Your Email</span>
    <input
      type='email'
      name='email'
      value={form.email}
      onChange={handleChange}
      placeholder="What's your email?"
      className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium'
    />
  </label>
  <label className='flex flex-col'>
    <span className='text-white font-medium mb-2'>Your Message</span>
    <textarea
      rows={5}
      name='message'
      value={form.message}
      onChange={handleChange}
      placeholder='What would you like to say?'
      className='bg-tertiary py-2 px-4 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium'
    />
  </label>

  <button
    type='submit'
    className='bg-tertiary py-2 px-6 rounded-lg outline-none w-fit text-white font-bold shadow-md shadow-primary'
  >
    {loading ? "Sending..." : "Send"}
  </button>
</form>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");