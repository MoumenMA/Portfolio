import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSucces] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3djrl89", "template_uud6adf", formRef.current, {
        publicKey: "gJywHIyZ5fszURwS0",
      })
      .then(
        (result) => {
          setSucces(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.h1 className="contact-title" variants={variants}>
        Send me a message!
      </motion.h1>
      <motion.span className="conatact-paragraph" variants={variants}>
        Got a question or proposal, or just want to say hello?
        <br /> Go ahead.
      </motion.span>
      <motion.div className="contact-container" variants={variants}>
        <motion.img src="../src/assets/contact.png" alt="contact" />
        <div className="formContainer">
          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" required placeholder="Your Name" name="name" />
            <input
              type="email"
              required
              placeholder="Your Email"
              name="email"
            />
            <textarea
              rows={8}
              placeholder="Hi, I think we need a web app for our products at Company X. How soon can you hop on to discuss this?"
              name="message"
            />
            <button>
              SEND 
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
