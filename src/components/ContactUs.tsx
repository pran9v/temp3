
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="pt-24 max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Contact Us</h2>
      <p className="mb-6 text-gray-700 text-xl">
        Contact us at:{' '}
        <a href="mailto:support@shoeholic.site" className="text-yellow-500 hover:underline">
          support@shoeholic.site
        </a>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold text-gray-800">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:border-yellow-500 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold text-gray-800">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:border-yellow-500 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold text-gray-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:border-yellow-500 focus:ring-yellow-500"
            rows={5}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
