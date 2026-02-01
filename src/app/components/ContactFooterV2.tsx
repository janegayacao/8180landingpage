import { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import { Send, Linkedin, ExternalLink, CheckCircle2, Mail, MessageSquare, User, Building2, Phone, Calendar } from "lucide-react";
import LogoMasterWhite from "@/imports/LogoMasterWhite1";
import LogoArrowBlue from "@/imports/LogoArrowBlue1";
import emailjs from "@emailjs/browser";

// Default recipients; override via VITE_CONTACT_EMAILS (comma-separated)
const CONTACT_RECIPIENTS = "jane@8180.studio, maya@8180.studio, jess@8180.studio, dj@8180.studio";

export function ContactFooterV2() {
  const contactRecipients = import.meta.env.VITE_CONTACT_EMAILS || import.meta.env.VITE_CONTACT_EMAIL || CONTACT_RECIPIENTS;

  const emailConfig = useMemo(
    () => ({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
    }),
    []
  );

  const isEmailConfigured = Boolean(
    emailConfig.publicKey && emailConfig.serviceId && emailConfig.templateId && contactRecipients
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    preferredDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    if (isEmailConfigured) {
      emailjs.init({ publicKey: emailConfig.publicKey! });
    } else {
      console.warn("EmailJS environment variables are missing. Contact form disabled.");
    }
  }, [emailConfig.publicKey, isEmailConfigured]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!isEmailConfigured) {
      setError("Email service is not configured. Please try again later.");
      return;
    }
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailConfig.serviceId!,
        emailConfig.templateId!,
        {
          to_email: contactRecipients,
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company || "Not provided",
          phone: formData.phone || "Not provided",
          message: formData.message,
          preferredDate: formData.preferredDate || "Not provided",
        },
        emailConfig.publicKey!
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
        preferredDate: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err: any) {
      setIsSubmitting(false);
      const msg = err?.text || err?.message || "Failed to send message. Please try again or contact us directly.";
      setError(msg);
      console.error("Email error:", err);
    }
  };

  return (
    <footer id="contact" className="px-6 py-8 max-w-[1600px] mx-auto">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          
          {/* Section Label */}
          <p className="text-sm tracking-wider uppercase text-[#00AAFF] mb-4">Let's Talk</p>
          <div className="w-5 h-7 mb-0">
            <LogoArrowBlue />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">
            Book a Free Discovery Call
          </h2>
          <p className="text-xl mb-12 max-w-full text-gray-300">
            Tell us about your project and let's explore how we can help bring your vision to life.
          </p>

          {/* Value Props - Quick Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="border border-white/20 bg-white/5 backdrop-blur-xl p-6 rounded-md hover:border-[#00AAFF]/50 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AAFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Mail className="w-6 h-6 text-[#00AAFF] mb-3 relative z-10 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg mb-2 relative z-10 text-[24px]">Free Consultation</h4>
              <p className="text-sm text-gray-400 relative z-10 text-[16px]">A real conversation about your goals (no sales pitch)</p>
            </div>
            <div className="border border-white/20 bg-white/5 backdrop-blur-xl p-6 rounded-md hover:border-[#00AAFF]/50 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AAFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <MessageSquare className="w-6 h-6 text-[#00AAFF] mb-3 relative z-10 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg mb-2 relative z-10 text-[24px]">Honest Proposal</h4>
              <p className="text-sm text-gray-400 relative z-10 text-[16px]">Clear pricing, realistic timelines, zero surprises</p>
            </div>
            <div className="border border-white/20 bg-white/5 backdrop-blur-xl p-6 rounded-md hover:border-[#00AAFF]/50 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00AAFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CheckCircle2 className="w-6 h-6 text-[#00AAFF] mb-3 relative z-10 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg mb-2 relative z-10 text-[24px]">We Respond Fast</h4>
              <p className="text-sm text-gray-400 relative z-10 text-[16px]">Personal reply within 24 hours (usually sooner)</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="mb-12 border border-white/20 bg-white/5 backdrop-blur-xl p-8 rounded-lg">
            {/* First Row: Name and Company */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2 flex items-center gap-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <User className="w-4 h-4 text-[#00AAFF]" />
                  What's your name? *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-base focus:border-[#00AAFF] focus:outline-none transition-colors disabled:opacity-50 placeholder:text-gray-500"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm text-gray-300 mb-2 flex items-center gap-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <Building2 className="w-4 h-4 text-[#00AAFF]" />
                  Where do you work?
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-base focus:border-[#00AAFF] focus:outline-none transition-colors disabled:opacity-50 placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Second Row: Email, Phone, and Date */}
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2 flex items-center gap-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <Mail className="w-4 h-4 text-[#00AAFF]" />
                  Your email? *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  required
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-base focus:border-[#00AAFF] focus:outline-none transition-colors disabled:opacity-50 placeholder:text-gray-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm text-gray-300 mb-2 flex items-center gap-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <Phone className="w-4 h-4 text-[#00AAFF]" />
                  Best number to reach you?
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-base focus:border-[#00AAFF] focus:outline-none transition-colors disabled:opacity-50 placeholder:text-gray-500"
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-sm text-gray-300 mb-2 flex items-center gap-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  <Calendar className="w-4 h-4 text-[#00AAFF]" />
                  When should we meet?
                </label>
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-base focus:border-[#00AAFF] focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm text-gray-300 mb-2 flex items-center gap-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <MessageSquare className="w-4 h-4 text-[#00AAFF]" />
                What's your biggest challenge right now? *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What challenges are you facing? What are your goals?"
                required
                rows={5}
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-base focus:border-[#00AAFF] focus:outline-none transition-colors disabled:opacity-50 placeholder:text-gray-500 resize-none"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm mb-4" role="alert">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="w-full md:w-auto bg-[#00AAFF] text-white px-10 py-4 border border-[#00AAFF] rounded-md shadow-[0_0_20px_rgba(0,170,255,0.3)] hover:shadow-[0_0_30px_rgba(0,170,255,0.5)] transition-all duration-300 inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="text-lg">Sending...</span>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </>
              ) : isSubmitted ? (
                <>
                  <span className="text-lg">Sent!</span>
                  <CheckCircle2 className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span className="text-lg">Book Your Call</span>
                  <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {isSubmitted && (
              <p className="text-[#00AAFF] text-sm mt-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Thanks! We'll reach out within 24 hours to confirm your appointment.
              </p>
            )}
          </form>

          {/* Footer Info */}
          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center md:items-center gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-36 h-auto mb-4">
                <LogoMasterWhite />
              </div>
              <p className="text-gray-500 text-sm mb-2">
                © 2026 8180 Studio. No BS. Just Results.
              </p>
              <p className="text-gray-600 text-xs">
                High-performance solutions for teams that ship.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-4 items-center md:items-start">
              <p className="text-sm text-gray-500 mb-2">Connect With Us</p>
              <div className="flex items-center gap-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#00AAFF] transition-colors group"
                  aria-label="Visit our LinkedIn profile"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="text-sm">LinkedIn</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </a>
                <a
                  href="https://read.cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-[#00AAFF] transition-colors group"
                  aria-label="View our Read.cv portfolio"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                  <span className="text-sm">Read.cv</span>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
