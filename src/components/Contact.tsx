import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | React.TextareaHTMLAttributes<HTMLTextAreaElement>['value'] | HTMLTextAreaElement>) => {
    // Ensure e.target.value is compatible with React.ChangeEvent<HTMLTextAreaElement>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS (public key is often initialized globally, but can be here too)
      // emailjs.init("YOUR_PUBLIC_KEY"); // If not initialized globally, uncomment and replace
      
      await emailjs.send(
        'service_2mkxzo8',      // YOUR_SERVICE_ID
        'template_zxabjak',     // YOUR_TEMPLATE_ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: "Engaging Security" // Recipient name
        },
        '69I_4iJxT2FjwKdPo'      // YOUR_PUBLIC_KEY
      );

      setSubmitStatus('success');
      // Clear form data on successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Hide status message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-8 md:py-12 bg-[#556355] w-full">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Contact Us Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Contact Us</h2>
        </div>
        
        {/* Form Container */}
        <div className="max-w-2xl mx-auto bg-gray-200 p-4 md:p-8 rounded-2xl shadow-xl"> {/* Form background, padding, shadow, and centering */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name and Phone No. fields */}
            <div className="grid md:grid-cols-2 gap-4"> {/* Gap increased for visual space */}
              <div>
                {/* No explicit label, placeholder acts as guide */}
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D3E1F] focus:border-transparent transition-colors text-gray-800 placeholder-gray-500 text-base" // Input styling matching image
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <input
                  type="tel" // Use tel type for phone numbers
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D3E1F] focus:border-transparent transition-colors text-gray-800 placeholder-gray-500 text-base" // Input styling matching image
                  placeholder="Enter Phone No."
                />
              </div>
            </div>
            
            {/* Email Address field */}
            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D3E1F] focus:border-transparent transition-colors text-gray-800 placeholder-gray-500 text-base" // Input styling matching image
                placeholder="Enter Email Address"
              />
            </div>
            
            {/* Message field */}
            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5} // Adjust rows for height as seen in image
                className="w-full px-4 py-3 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2D3E1F] focus:border-transparent transition-colors resize-none text-gray-800 placeholder-gray-500 text-base" // Styling and disable vertical resize
                placeholder="Enter Your Message"
              ></textarea>
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#556355] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[#4a554a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base" // Button styling matching image
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            
            {/* Submission Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;