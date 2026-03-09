import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Check } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { organizationSchema, buildBreadcrumbSchema } from "../seo/schemas";

export function ContactPage() {
  useSEO({
    title: "Book a Rehabilitation Consultation in Visakhapatnam | Pranavayu",
    description:
      "Contact Pranavayu Rehabilitation Center in Visakhapatnam to book your consultation with Dr. Harivadan Lukka. Call +91 79975 92222 or use our online form.",
    canonicalPath: "/contact",
    schema: [
      organizationSchema,
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Contact Us", url: "/contact" },
      ]),
    ],
  });
  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", condition: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const SHEET_URL = "https://script.google.com/macros/s/AKfycbyja8CU7WHs5u2qZ8vWLdCpdB1OiBHTomGYE0IvYb_YXbRh2LEwxHLMuFDfs4QzdD6eBQ/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        condition: formData.condition,
        details: formData.message,
      });
      await fetch(SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        body: params,
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly at +91 79975 92222.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="pt-32 lg:pt-36 pb-14 bg-[#062A3E]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-white mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600 }}>
              Contact Us
            </h1>
            <p className="text-white/50 text-[14px]">
              Schedule your consultation or reach out with any questions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-[#1a3a4a] mb-6 text-[18px]" style={{ fontWeight: 600 }}>
                Get in Touch
              </h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, title: "Address", content: "1st Floor, Nowroji Road, Maharanipeta, Visakhapatnam – 530002" },
                  { icon: Phone, title: "Phone", content: "+91 79975 92222", href: "tel:+917997592222" },
                  { icon: Mail, title: "Email", content: "pranavayurehabilitation@gmail.com", href: "mailto:pranavayurehabilitation@gmail.com" },
                  { icon: Clock, title: "Hours", content: "Mon–Sat: 9:00 AM – 7:00 PM" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-2xl bg-[#f6f9fc]">
                    <item.icon size={16} className="text-[#0FACA3] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[#1a3a4a] text-[13px]" style={{ fontWeight: 500 }}>{item.title}</div>
                      {item.href ? (
                        <a href={item.href} className="text-gray-400 text-[12px] mt-0.5 block hover:text-[#0FACA3]">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-[12px] mt-0.5">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
                <a
                  href="https://wa.me/917997592222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-full hover:bg-[#20bd59] transition-colors text-[14px]"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-[#f6f9fc] rounded-2xl p-6 lg:p-8">
                <h2 className="text-[#1a3a4a] mb-1 text-[18px]" style={{ fontWeight: 600 }}>
                  Book a Consultation
                </h2>
                <p className="text-gray-400 text-[13px] mb-6">
                  Fill out the form below and our team will contact you within 24 hours.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-14"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#0FACA3]/10 flex items-center justify-center mx-auto mb-4">
                      <Check size={24} className="text-[#0FACA3]" />
                    </div>
                    <h3 className="text-[#1a3a4a] mb-2 text-[18px]" style={{ fontWeight: 600 }}>
                      Thank You
                    </h3>
                    <p className="text-gray-400 text-[14px]">
                      Your consultation request has been submitted. Our team will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-500 text-[12px] mb-1.5">Full Name *</label>
                        <input
                          type="text" required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#0FACA3] focus:ring-1 focus:ring-[#0FACA3]/20 outline-none transition-colors text-[13px]"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-500 text-[12px] mb-1.5">Phone Number *</label>
                        <input
                          type="tel" required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#0FACA3] focus:ring-1 focus:ring-[#0FACA3]/20 outline-none transition-colors text-[13px]"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-500 text-[12px] mb-1.5">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#0FACA3] focus:ring-1 focus:ring-[#0FACA3]/20 outline-none transition-colors text-[13px]"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-[12px] mb-1.5">Condition / Reason *</label>
                      <select
                        required
                        value={formData.condition}
                        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#0FACA3] focus:ring-1 focus:ring-[#0FACA3]/20 outline-none transition-colors text-[13px]"
                      >
                        <option value="">Select a condition</option>
                        <option value="cardiac">Cardiac Rehabilitation</option>
                        <option value="pulmonary">Pulmonary Rehabilitation</option>
                        <option value="neurovascular">Neurovascular Recovery</option>
                        <option value="postsurgical">Post-Surgical Recovery</option>
                        <option value="oxygen">Advanced Oxygen Therapies</option>
                        <option value="preventive">Preventive Rehabilitation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-500 text-[12px] mb-1.5">Additional Details</label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 focus:border-[#0FACA3] focus:ring-1 focus:ring-[#0FACA3]/20 outline-none transition-colors text-[13px] resize-none"
                        placeholder="Tell us about your condition or any specific concerns..."
                      />
                    </div>
                    {error && (
                      <p className="text-red-500 text-[12px] text-center bg-red-50 rounded-xl px-3 py-2">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-[#0B4D6E] text-white rounded-full hover:bg-[#093d58] transition-colors text-[14px] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </>
                      ) : "Submit Consultation Request"}
                    </button>
                    <p className="text-gray-300 text-[11px] text-center">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}