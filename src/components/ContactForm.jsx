import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { X, Send } from 'lucide-react';

const ContactForm = ({ onClose }) => {
  const formRef = useRef();
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline();
    tl.fromTo(overlayRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    ).fromTo(modalRef.current,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.2)' },
      "-=0.1"
    );

    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(modalRef.current, { opacity: 0, scale: 0.95, y: 10, duration: 0.3, ease: 'power2.in' })
      .to(overlayRef.current, { opacity: 0, duration: 0.3, ease: 'power2.in' }, "-=0.2");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_b4uz10g';
    const TEMPLATE_ID = 'template_5zjd5gj';
    const PUBLIC_KEY = 'eGbI_zQTn0RZsYs3E';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          // Automatically close after success
          setTimeout(() => {
            handleClose();
          }, 2000);
      }, (error) => {
          console.error(error);
          setIsSubmitting(false);
          setSubmitStatus('error');
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        ref={overlayRef}
        className="modal-backdrop absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={handleClose}
      ></div>
      
      {/* Form Container */}
      <div 
        ref={modalRef}
        className="modal-content relative w-full max-w-lg bg-obsidian border border-emerald-500/30 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.1)] p-8 z-10"
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="mb-6">
          <h3 className="text-2xl font-bold font-mono tracking-widest text-white uppercase flex items-center gap-3">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
             Direct Link
          </h3>
          <p className="text-sm text-gray-400 mt-2">Establish a secure connection and transmit your message directly to the developer.</p>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-mono text-emerald-500 uppercase tracking-widest">Name Identification</label>
            <input 
              type="text" 
              name="user_name" 
              required
              placeholder="e.g. John Doe"
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <label className="text-xs font-mono text-emerald-500 uppercase tracking-widest">Return Address (Email)</label>
            <input 
              type="email" 
              name="user_email" 
              required
              placeholder="e.g. john@company.com"
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-mono text-emerald-500 uppercase tracking-widest">Subject Payload</label>
            <input 
              type="text" 
              name="subject" 
              required
              placeholder="Inquiry Topic"
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-mono text-emerald-500 uppercase tracking-widest">Data Payload (Message)</label>
            <textarea 
              name="message" 
              required
              rows="4"
              placeholder="Detail your request or inquiry here..."
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`mt-4 w-full flex items-center justify-center gap-2 py-4 rounded-lg font-mono tracking-widest font-bold uppercase transition-all ${isSubmitting ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-emerald-500 text-obsidian hover:bg-emerald-400'} ${submitStatus === 'success' ? 'bg-emerald-600 text-white' : ''}`}
          >
            {isSubmitting ? 'TRANSMITTING...' : submitStatus === 'success' ? 'TRANSMISSION SENT' : 'TRANSMIT DATA'}
            {!isSubmitting && submitStatus !== 'success' && <Send size={18} />}
          </button>

          {submitStatus === 'error' && (
            <p className="text-red-500 text-sm font-mono mt-2 text-center">Transmission failed. Please check your connection and configuration parameters.</p>
          )}
        </form>

        <div className="mt-8 pt-4 border-t border-white/5 text-center">
             <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase flex items-center justify-center gap-2">
                 Powered by EmailJS <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
             </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
