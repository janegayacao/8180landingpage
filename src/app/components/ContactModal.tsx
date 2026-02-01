import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import LogoArrowBlue from "@/imports/LogoArrowBlue1";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Default recipients; override by setting VITE_CONTACT_EMAILS (comma-separated)
const CONTACT_RECIPIENTS = "jane@8180.studio, maya@8180.studio, jess@8180.studio, dj@8180.studio";

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  // Comma-separated list of recipients pulled from env to reach multiple inboxes
  const contactRecipients = import.meta.env.VITE_CONTACT_EMAILS || import.meta.env.VITE_CONTACT_EMAIL || CONTACT_RECIPIENTS;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Initialize EmailJS with explicit public key (v4 API)
    emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: contactRecipients,
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "Not provided",
          message: formData.message,
          project: formData.project || "Not specified",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", project: "", message: "" });
      
      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
      }, 2000);
    } catch (err: any) {
      setIsSubmitting(false);
      const msg = err?.text || err?.message || "Failed to send message. Please try again.";
      setError(msg);
      console.error("Email error:", err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center md:p-4 pointer-events-none">
            <motion.div
              className="bg-[#121212] border-0 md:border md:border-white/10 md:rounded-lg max-w-2xl w-full h-full md:h-auto md:max-h-[90vh] overflow-y-auto pointer-events-auto relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="p-6 md:p-8 lg:p-12 h-full md:h-auto overflow-y-auto">
                {/* Header */}
                <div className="mb-8">
                  <div className="w-5 h-7 mb-0">
                    <LogoArrowBlue />
                  </div>
                  <h2 className="text-4xl md:text-5xl mb-4 tracking-tight">
                    Let's Create Something Extraordinary
                  </h2>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs tracking-wider uppercase text-white mb-2" style={{ fontFamily: 'Open Sauce Sans, sans-serif' }}>
                      What's your name?
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-[#00AAFF] transition-colors text-white placeholder:text-white/40"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs tracking-wider uppercase text-white mb-2" style={{ fontFamily: 'Open Sauce Sans, sans-serif' }}>
                      What's your email?
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-[#00AAFF] transition-colors text-white placeholder:text-white/40"
                      placeholder="john@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-xs tracking-wider uppercase text-white mb-2" style={{ fontFamily: 'Open Sauce Sans, sans-serif' }}>
                      What company do you represent?
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-[#00AAFF] transition-colors text-white placeholder:text-white/40"
                      placeholder="Acme Inc."
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="project" className="block text-xs tracking-wider uppercase text-white mb-2" style={{ fontFamily: 'Open Sauce Sans, sans-serif' }}>
                      What kind of project?
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#121212] border border-white/10 pl-4 py-3 rounded-lg focus:outline-none focus:border-[#00AAFF] transition-colors text-white appearance-none"
                      style={{ 
                        paddingRight: '3rem',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='white' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '12px'
                      }}
                    >
                      <option value="">Select a service</option>
                      <option value="branding">Brand Identity & Strategy</option>
                      <option value="digital">Digital Product Design</option>
                      <option value="web">Web Development</option>
                      <option value="consulting">Design Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs tracking-wider uppercase text-white mb-2" style={{ fontFamily: 'Open Sauce Sans, sans-serif' }}>
                      Tell us about your project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      disabled={isSubmitting || isSubmitted}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-[#00AAFF] transition-colors text-white placeholder:text-white/40 resize-none disabled:opacity-50"
                      placeholder="Share your vision, goals, and timeline..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm" role="alert">{error}</p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-[#00AAFF] text-white px-8 py-4 border border-[#00AAFF] hover:bg-transparent hover:text-[#00AAFF] transition-all duration-300 text-lg rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Open Sauce Sans, sans-serif' }}
                  >
                    {isSubmitting ? (
                      <>
                        <span>Sending...</span>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </>
                    ) : isSubmitted ? (
                      <>
                        <span>Sent!</span>
                        <CheckCircle2 className="w-4 h-4" />
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {isSubmitted && (
                    <p className="text-[#00AAFF] text-sm flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Thanks! We'll be in touch soon.
                    </p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
