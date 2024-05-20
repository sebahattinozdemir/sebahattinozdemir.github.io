"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [status, setStatus] = useState({ success: false, error: false });
  const text = "Say Hello";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ success: false, error: false });

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus({ success: true, error: false });
          form.current.reset();
        },
        () => {
          setStatus({ success: false, error: true });
        }
      );
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-5xl flex flex-col lg:flex-row p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 bg-white rounded-lg shadow-md">
        {/* TEXT CONTAINER */}
        <div className="flex-1 flex items-center justify-center text-5xl lg:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex-1 bg-gray-100 rounded-xl text-lg flex flex-col gap-6 p-6 lg:p-12"
        >
          <span className="font-semibold">Dear Sebahattin,</span>
          <textarea
            name="user_message"
            rows={6}
            className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white resize-none outline-none"
            placeholder="Write your message here..."
          />
          <span className="font-semibold">My mail address is:</span>
          <input
            name="user_email"
            type="email"
            className="w-full p-3 border-2 border-gray-300 rounded-lg bg-white outline-none"
            placeholder="Your email address"
          />
          <span className="font-semibold">Regards</span>
          <button className="w-full p-4 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-300">
            Send
          </button>
          {status.success && (
            <span className="text-green-600 font-semibold mt-4">
              Your message has been sent successfully!
            </span>
          )}
          {status.error && (
            <span className="text-red-600 font-semibold mt-4">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
