import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contacto" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">Contacto</h2>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-indigo-500 text-xl" />
            <a href="mailto:floresgabo710@gmail.com" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600">
              floresgabo710@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-indigo-500 text-xl" />
            <span className="text-gray-700 dark:text-gray-200">461 291 8452</span>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-indigo-500 text-xl" />
            <a
              href="https://www.linkedin.com/in/gabriel-flores-50a34b2a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;