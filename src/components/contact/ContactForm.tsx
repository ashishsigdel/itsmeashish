"use client";
import { Button, SectionTitle } from "@/components/common";
import useContact from "@/hooks/use-contact";
import { CgClose } from "react-icons/cg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactForm() {
  const {
    name,
    company,
    email,
    message,
    formData,
    nameError,
    emailError,
    messageError,
    isLoading,
    handleChange,
    validateEmail,
    validateName,
    validateMessage,
    onSubmit,
    responseMessage,
    setResponseMessage,
    errorResponseMessage,
    setErrorResponseMessage,
  } = useContact();

  const handleClose = () => {
    setResponseMessage(undefined);
    setErrorResponseMessage(undefined);
  };

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: false, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col justify-center max-w-7xl my-3 px-3 mx-auto">
      <SectionTitle title={"Send Me a Message"} />
      <motion.div
        ref={formRef}
        className="w-full max-w-4xl mx-auto rounded-ss-lg bg-black/25 rounded-ee-lg blur-bg border border-primary-border-color"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="p-2 border-b border-primary-border-color">
          <span>write-me</span>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-5 p-3 sm:p-4 md:p-8"
        >
          <motion.div className="flex justify-start" variants={itemVariants}>
            <span className="text-primary-blue mr-2 text-sm">01</span>
            <div className="flex flex-col gap-0.5 w-full">
              <span className="text-sm text-primary-yellow">your-name*</span>
              <input
                type="text"
                name="name"
                id="name"
                className={`px-[15px] bg-transparent border-[1px] border-solid ${
                  nameError
                    ? "border-danger"
                    : "border-primary-border-color dark:border-gray-500"
                } border-primary-border-color dark:border-gray-500 rounded-[5px] text-gray-500 text-[14px] outline-[0] h-[50px] w-full`}
                placeholder="Enter your name address"
                onChange={handleChange}
                onBlur={validateName}
                value={name}
              />
            </div>
          </motion.div>
          <motion.div className="flex justify-start" variants={itemVariants}>
            <span className="text-primary-blue mr-2 text-sm">02</span>
            <div className="flex flex-col gap-0.5 w-full">
              <span className="text-sm text-primary-yellow">company</span>
              <input
                type="company"
                name="company"
                id="company"
                className={`px-[15px] bg-transparent border-[1px] border-solid  border-primary-border-color dark:border-gray-500 rounded-[5px] text-gray-500 text-[14px] outline-[0] h-[50px] w-full`}
                placeholder="Enter your company address"
                onChange={handleChange}
                value={company}
              />
            </div>
          </motion.div>
          <motion.div className="flex justify-start" variants={itemVariants}>
            <span className="text-primary-blue mr-2 text-sm">03</span>
            <div className="flex flex-col gap-0.5 w-full">
              <span className="text-sm text-primary-yellow">your-email*</span>
              <input
                type="email"
                name="email"
                id="email"
                className={`px-[15px] bg-transparent border-[1px] border-solid ${
                  emailError
                    ? "border-danger"
                    : "border-primary-border-color dark:border-gray-500"
                } border-primary-border-color dark:border-gray-500 rounded-[5px] text-gray-500 text-[14px] outline-[0] h-[50px] w-full`}
                placeholder="Enter your email address"
                onChange={handleChange}
                onBlur={validateEmail}
                value={email}
              />
            </div>
          </motion.div>
          <motion.div className="flex justify-start" variants={itemVariants}>
            <span className="text-primary-blue mr-2 text-sm">04</span>
            <div className="flex flex-col gap-0.5 w-full">
              <span className="text-sm text-primary-yellow">your-message*</span>
              <textarea
                placeholder="Enter your message"
                rows={4}
                name="message"
                id="message"
                className={`px-[15px] bg-transparent border-[1px] border-solid ${
                  messageError
                    ? "border-danger"
                    : "border-primary-border-color dark:border-gray-500"
                } border-primary-border-color dark:border-gray-500 rounded-[5px] text-gray-500 text-[14px] outline-[0] w-full p-3 resize-none`}
                onChange={handleChange}
                onBlur={validateMessage}
                value={message}
              />
            </div>
          </motion.div>
          <motion.div className="mx-auto" variants={itemVariants}>
            <button
              disabled={isLoading}
              type="submit"
              className="btn w-fit my-5"
            >
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">
                {isLoading ? "Loading..." : "Send Message"}
              </span>
              <span className="circle"></span>
              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </motion.div>
          {responseMessage && (
            <motion.div
              className="w-full bg-white p-3 rounded-lg flex justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p className="text-base text-green-600 ">{responseMessage}</p>
              <span
                className="text-black text-xl cursor-pointer"
                onClick={handleClose}
              >
                <CgClose />
              </span>
            </motion.div>
          )}
          {errorResponseMessage && (
            <motion.div
              className="w-full bg-white p-3 rounded-lg flex justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <p className="text-base text-red-600 ">{errorResponseMessage}</p>
              <span
                className="text-black text-xl cursor-pointer"
                onClick={handleClose}
              >
                <CgClose />
              </span>
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
}
