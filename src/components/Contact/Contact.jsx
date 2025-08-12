import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TOAST_CONFIG = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    const formData = new FormData(form.current);
    const email = formData.get('from_email')?.trim() || '';
    const name = formData.get('from_name')?.trim() || '';
    const subject = formData.get('subject')?.trim() || '';
    const message = formData.get('message')?.trim() || '';
    
    if (!email || !name) {
      toast.error("Please provide your email and name.");
      return;
    }

    if (!subject || !message) {
      toast.error("Please provide a subject and message.");
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured. Please contact the administrator.");
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! ✅", TOAST_CONFIG);
        },
        (error) => {
          console.error("Email service error:", error);
          toast.error("Failed to send message. Please try again.", TOAST_CONFIG);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-16 sm:w-24 md:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-6 sm:mt-8 w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#0d081f] p-4 sm:p-6 md:p-8 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-lg sm:text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3>

        <form ref={form} onSubmit={sendEmail} className="mt-4 sm:mt-6 flex flex-col space-y-3 sm:space-y-4">
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            maxLength="100"

            className="w-full p-3 sm:p-4 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-sm sm:text-base transition-colors"
          />
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            maxLength="50"

            className="w-full p-3 sm:p-4 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-sm sm:text-base transition-colors"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            maxLength="100"
            className="w-full p-3 sm:p-4 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-sm sm:text-base transition-colors"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
            maxLength="1000"
            className="w-full p-3 sm:p-4 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500 text-sm sm:text-base transition-colors resize-none"
          />
          
          {/* Send Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 sm:py-4 text-white font-semibold rounded-md hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/25"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
