import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { FaUser, FaEnvelope, FaCommentDots, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

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

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
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
                ></textarea>
              </div>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-400 hover:bg-amber-500 text-black font-bold py-2 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitSuccess && (
              <div className="mt-4 p-4 bg-green-500 text-white rounded-lg">
                Message sent successfully!
              </div>
            )}
          </form>

          {/* Contact Details */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p>Feel free to reach out to us through the form or via our social media channels below.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl text-blue-500 hover:text-blue-400"><FaFacebook /></a>
              <a href="https://github.com/MakChay" className="text-2xl text-blue-400 hover:text-blue-300"><FaGithub /></a>
              <a href="www.linkedin.com/in/charlene-makwara-2417972b1" className="text-2xl text-blue-600 hover:text-blue-500"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;