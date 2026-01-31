import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import LogoArrowBlue from "@/imports/LogoArrowBlue1";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  project?: string;
  message?: string;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Project type validation
    if (!formData.project) {
      newErrors.project = "Please select a project type";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    
    // Show success state
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form and close modal after showing success
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", project: "", message: "" });
      setErrors({});
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
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
                      className={`w-full bg-transparent border ${errors.name ? 'border-red-500' : 'border-white/10'} px-4 py-3 rounded-lg focus:outline-none ${errors.name ? 'focus:border-red-500' : 'focus:border-[#00AAFF]'} transition-colors text-white placeholder:text-white/40`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1.5 flex items-center gap-1"
                      >
                        <span className="inline-block w-1 h-1 rounded-full bg-red-400"></span>
                        {errors.name}
                      </motion.p>
                    )}
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
                      className={`w-full bg-transparent border ${errors.email ? 'border-red-500' : 'border-white/10'} px-4 py-3 rounded-lg focus:outline-none ${errors.email ? 'focus:border-red-500' : 'focus:border-[#00AAFF]'} transition-colors text-white placeholder:text-white/40`}
                      placeholder="john@company.com"
                    />
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1.5 flex items-center gap-1"
                      >
                        <span className="inline-block w-1 h-1 rounded-full bg-red-400"></span>
                        {errors.email}
                      </motion.p>
                    )}
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
                      className={`w-full bg-[#121212] border ${errors.project ? 'border-red-500' : 'border-white/10'} pl-4 py-3 rounded-lg focus:outline-none ${errors.project ? 'focus:border-red-500' : 'focus:border-[#00AAFF]'} transition-colors text-white appearance-none`}
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
                    {errors.project && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1.5 flex items-center gap-1"
                      >
                        <span className="inline-block w-1 h-1 rounded-full bg-red-400"></span>
                        {errors.project}
                      </motion.p>
                    )}
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
                      rows={4}
                      className={`w-full bg-transparent border ${errors.message ? 'border-red-500' : 'border-white/10'} px-4 py-3 rounded-lg focus:outline-none ${errors.message ? 'focus:border-red-500' : 'focus:border-[#00AAFF]'} transition-colors text-white placeholder:text-white/40 resize-none`}
                      placeholder="Share your vision, goals, and timeline..."
                    />
                    {errors.message && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-xs mt-1.5 flex items-center gap-1"
                      >
                        <span className="inline-block w-1 h-1 rounded-full bg-red-400"></span>
                        {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className={`w-full bg-[#00AAFF] text-white px-8 py-4 border border-[#00AAFF] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-transparent hover:text-[#00AAFF]'} transition-all duration-300 text-lg rounded-md flex items-center justify-center gap-2`}
                    style={{ fontFamily: 'Open Sauce Sans, sans-serif' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting && (
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>

                {/* Success Message */}
                {isSuccess && (
                  <motion.div 
                    className="absolute inset-0 bg-[#121212] flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <CheckCircle2 className="w-16 h-16 text-[#00AAFF] mx-auto mb-4" />
                      </motion.div>
                      <motion.h3 
                        className="text-2xl md:text-3xl text-white mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontFamily: 'Agdasima, sans-serif' }}
                      >
                        Message Sent Successfully!
                      </motion.h3>
                      <motion.p 
                        className="text-white/60 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{ fontFamily: 'Open Sans, sans-serif' }}
                      >
                        We'll be in touch soon.
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}