'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Users, Briefcase, Handshake, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    audienceType: '',
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for your message! We\'ll get back to you within 24-48 hours.');
        setFormData({
          audienceType: '',
          name: '',
          email: '',
          company: '',
          role: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-indus-blue mb-6">
            Start a Conversation
          </h1>
          <p className="text-xl text-charcoal-grey max-w-3xl mx-auto">
            Whether you're a business owner considering partnership, an investor 
            exploring opportunities, or an intermediary with a quality deal, 
            we'd like to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Business Owners */}
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-cerulean rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indus-blue mb-4">
                For Business Owners
              </h3>
              <p className="text-charcoal-grey mb-6 leading-relaxed">
                If you're considering a sale or partnership, we speak your language. 
                Our principals have been owner-operators themselves, so we understand 
                that your business is more than numbers—it's your life's work.
              </p>
              <div className="text-sm text-warm-grey">
                <div className="mb-2">✓ Confidential discussions</div>
                <div className="mb-2">✓ Flexible deal structures</div>
                <div>✓ Respectful process</div>
              </div>
            </div>

            {/* Investors */}
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-indus-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indus-blue mb-4">
                For Investors
              </h3>
              <p className="text-charcoal-grey mb-6 leading-relaxed">
                We operate as an independent sponsor, partnering with aligned 
                investors who share our patient capital philosophy and 
                values-driven approach to business building.
              </p>
              <div className="text-sm text-warm-grey">
                <div className="mb-2">✓ Co-investment opportunities</div>
                <div className="mb-2">✓ Curated deal flow</div>
                <div>✓ Aligned interests</div>
              </div>
            </div>

            {/* Intermediaries */}
            <div className="bg-white rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-warm-grey rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-indus-blue mb-4">
                For Intermediaries
              </h3>
              <p className="text-charcoal-grey mb-6 leading-relaxed">
                We work with investment bankers, business brokers, and other 
                intermediaries who represent quality businesses that fit our 
                criteria and values.
              </p>
              <div className="text-sm text-warm-grey">
                <div className="mb-2">✓ Competitive referral fees</div>
                <div className="mb-2">✓ Reliable execution</div>
                <div>✓ Clear process</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-indus-blue mb-8 text-center">
              Get in Touch
            </h2>

            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-success-green bg-opacity-10 border border-success-green rounded-lg flex items-center">
                <CheckCircle className="w-5 h-5 text-success-green mr-3" />
                <span className="text-success-green">{submitMessage}</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-warning-orange bg-opacity-10 border border-warning-orange rounded-lg flex items-center">
                <AlertCircle className="w-5 h-5 text-warning-orange mr-3" />
                <span className="text-warning-orange">{submitMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Audience Type */}
              <div>
                <label htmlFor="audienceType" className="block text-sm font-medium text-charcoal-grey mb-2">
                  I am a... *
                </label>
                <select
                  id="audienceType"
                  name="audienceType"
                  value={formData.audienceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                >
                  <option value="">Please select...</option>
                  <option value="Business Owner">Business Owner</option>
                  <option value="Investor">Investor</option>
                  <option value="Intermediary">Intermediary (Broker/Banker)</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-grey mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-grey mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Company and Role Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-charcoal-grey mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-charcoal-grey mb-2">
                    Role/Title
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent"
                    placeholder="Your role or title"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-grey mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cerulean focus:border-transparent resize-vertical"
                  placeholder="Tell us about your business, investment interest, or how we can help..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-4 bg-cerulean text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-indus-blue text-center mb-12">
            Direct Contact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-indus-blue">Email</h3>
              <p className="text-charcoal-grey">info@indusrivergroup.com</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-indus-blue">Geographic Coverage</h3>
              <p className="text-charcoal-grey">United States & India</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-cerulean rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-indus-blue">Response Time</h3>
              <p className="text-charcoal-grey">Within 24-48 hours</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}