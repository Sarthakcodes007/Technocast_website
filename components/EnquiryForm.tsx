'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1e3a8a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Contact Us</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Have questions about TechnoCast? Send us an enquiry and we'll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Form */}
          <div className="bg-blue-900/40 border border-blue-400/30 rounded-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-950/50 border border-blue-400/30 rounded-lg text-white placeholder-blue-300 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Tell us about your enquiry..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 bg-blue-500/20 border border-blue-400/50 rounded-lg text-white">
                Thank you! Your enquiry has been submitted successfully. We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-400/50 rounded-lg text-white">
                {errorMessage}
              </div>
            )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>

          {/* Right Side - Contact Information & Image */}
          <div className="space-y-6">
            {/* Contact Image */}
            <div className="bg-blue-900/40 border border-blue-400/30 rounded-xl overflow-hidden">
              <img
                src="/Contact_us.png"
                alt="Contact Us"
                className="w-full h-64 object-cover object-center"
              />
            </div>

            {/* Contact Information */}
            <div className="bg-blue-900/40 border border-blue-400/30 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Head Office</h4>
                  <p className="text-blue-200">Delhi Technological University</p>
                  <p className="text-blue-200">New Delhi, Delhi 110042, India</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Email</h4>
                  <a 
                    href="mailto:pandeysarthak1510@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    pandeysarthak1510@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/company/buildwithtechnocast/?viewAsMember=true" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Follow us on LinkedIn
                  </a>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="mt-6">
                <h4 className="text-white font-semibold mb-3">Location</h4>
                <div className="rounded-lg overflow-hidden border border-blue-400/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8!2d77.1167!3d28.7500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d013854a3b3d3%3A0x4a0b5e5b5e5b5e5b!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                    title="Delhi Technological University Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

