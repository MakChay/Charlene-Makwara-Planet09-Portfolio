import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { FaUser, FaEnvelope, FaCommentDots, FaLinkedin, FaGithub, FaDownload, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'contacts'), formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleResumeDownload = () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/Charlene_Makwara_Resume.pdf';
    link.download = 'Charlene_Makwara_Resume.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white" role="region" aria-label="Contact section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or just say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <div className="flex items-center bg-gray-700 rounded-lg">
                  <FaUser className="text-gray-400 ml-3" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-transparent text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <div className="flex items-center bg-gray-700 rounded-lg">
                  <FaEnvelope className="text-gray-400 ml-3" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-transparent text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    placeholder="makwarac@yahoo.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <div className="flex items-start bg-gray-700 rounded-lg">
                  <FaCommentDots className="text-gray-400 ml-3 mt-3" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-transparent text-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitSuccess && (
                <div className="mt-4 p-4 bg-green-500 text-white rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information & Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                I'm always excited to discuss new opportunities, collaborate on projects, or just chat about technology and innovation.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-amber-400 mr-4 text-xl" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-300">Durban, South Africa</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-amber-400 mr-4 text-xl" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">makwarac@yahoo.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaClock className="text-amber-400 mr-4 text-xl" />
                <div>
                  <p className="font-semibold">Response Time</p>
                  <p className="text-gray-300">Usually within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/MakChay" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/charlene-makwara-2417972b1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-3">Download Resume</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Get a copy of my resume to learn more about my experience and qualifications.
              </p>
              <button 
                onClick={handleResumeDownload}
                className="flex items-center px-4 py-2 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-500 transition-colors duration-300"
              >
                <FaDownload className="mr-2" />
                Download PDF
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-amber-400">24h</div>
                <div className="text-sm text-gray-300">Response Time</div>
              </div>
              <div className="text-center bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-amber-400">100%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;