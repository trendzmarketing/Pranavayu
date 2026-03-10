import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Globe, Microscope, Stethoscope, DollarSign, Plane, UserCheck,
  ArrowRight, Check, ChevronDown, MapPin, FileText, Upload,
  Video, ClipboardList, Car, Calendar, MessageCircle, Heart,
  Wind, Brain, Zap, Shield, Activity, Droplets, Clock
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { LocationShowcase } from "./LocationShowcase";
import { useSEO } from "../hooks/useSEO";
import { organizationSchema, buildFaqSchema, buildBreadcrumbSchema } from "../seo/schemas";

const doctorImg = "/images/doctor/dr-harivadan-hero.webp";
const cityImg = "/images/international/visakhapatnam.jpg";

const whyChooseUs = [
  { icon: Microscope, title: "Advanced Medical Technologies", desc: "HBOT, Pelvic Chair Therapy, Neuro Gait Training & Regenerative Therapies" },
  { icon: Stethoscope, title: "Surgical Leadership", desc: "Cardiothoracic & Vascular expertise guiding recovery" },
  { icon: DollarSign, title: "Affordable Excellence", desc: "High-end rehabilitation at globally competitive pricing" },
  { icon: Plane, title: "Complete Travel Support", desc: "Visa letters, airport pickup, accommodation coordination" },
  { icon: UserCheck, title: "Dedicated Coordinator", desc: "Personal point of contact throughout your stay" },
];

const conditions = [
  { icon: Heart, name: "Post Bypass Recovery" },
  { icon: Activity, name: "Heart Failure Rehabilitation" },
  { icon: Wind, name: "Post COVID Lung Recovery" },
  { icon: Droplets, name: "COPD & Pulmonary Disorders" },
  { icon: Brain, name: "Stroke Recovery" },
  { icon: Zap, name: "Neurological Mobility Loss" },
  { icon: Shield, name: "Chronic Pain" },
  { icon: Clock, name: "Long COVID Fatigue" },
];

const journeySteps = [
  { icon: Upload, title: "Share Medical Reports", desc: "Secure upload portal for your medical records" },
  { icon: Video, title: "Video Consultation", desc: "Detailed assessment & personalized plan with Dr. Lukka" },
  { icon: ClipboardList, title: "Treatment Plan & Estimate", desc: "Transparent pricing & timeline" },
  { icon: FileText, title: "Visa & Travel Assistance", desc: "Official medical visa documentation" },
  { icon: Car, title: "Arrival & Guided Treatment", desc: "Airport pickup & personalized rehabilitation schedule" },
];

const services = {
  preArrival: ["Teleconsultation", "Cost Estimate", "Treatment Plan"],
  travelStay: ["Visa invitation letter", "Airport pickup", "Accommodation assistance"],
  duringTreatment: ["Dedicated coordinator", "Language support", "Structured rehab schedule"],
};

const testimonials = [
  { country: "United States", name: "Sarah Johnson", condition: "Post-COVID Recovery", text: "The level of care at Pranavayu was exceptional. Dr. Lukka's team coordinated everything from my arrival to treatment completion. I felt confident and cared for throughout." },
  { country: "United Kingdom", name: "James Williams", condition: "Post-Bypass Rehabilitation", text: "After my bypass surgery in London, I chose Pranavayu for rehabilitation. The HBOT and cardiac rehab program were remarkable — and at a fraction of UK costs." },
  { country: "UAE", name: "Ahmed Al-Rashid", condition: "Stroke Recovery", text: "The zero gravity gait training technology helped me walk again after my stroke. The dedicated coordinator made everything seamless for my family and me." },
];

const documents = [
  "Passport (Valid 6+ months)",
  "Recent Medical Reports",
  "Doctor's Referral Letter",
  "Visa Documentation",
  "Travel Insurance (Recommended)",
];

const faqs = [
  { q: "Do you provide visa assistance?", a: "Yes, we provide official medical visa invitation letters and guide you through the visa application process for India." },
  { q: "What is the approximate cost of treatment?", a: "Costs vary by condition and treatment plan. We provide a transparent cost estimate after reviewing your medical reports during the teleconsultation." },
  { q: "How long will I need to stay in Visakhapatnam?", a: "Treatment duration ranges from 2–8 weeks depending on your condition. Dr. Lukka will provide a timeline in your personalized treatment plan." },
  { q: "Is English widely spoken?", a: "Yes, our entire medical team is fluent in English. We also provide language support for other languages as needed." },
  { q: "Is Visakhapatnam safe for international visitors?", a: "Visakhapatnam is one of the safest cities in India, known for its pleasant coastal climate and welcoming community. It has excellent infrastructure and connectivity." },
];

const SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwrHVmviTg4fmLA1aHqzHj0GVBXHnpMY0Dpc2ehPQHCO9DUETNOS0tdAf6m6vIkAsuh/exec";

export function InternationalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "", country: "", contact: "", condition: "", dates: "", summary: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useSEO({
    title: "International Patients | Advanced Cardiac & Pulmonary Rehabilitation in Visakhapatnam, India",
    description:
      "Pranavayu welcomes international patients seeking advanced rehabilitation in India. Cardiac, Pulmonary & Neurovascular recovery under Dr. Harivadan Lukka with full travel support, visa assistance & dedicated coordination.",
    keywords:
      "Cardiac Rehab India, India Rehabilitation, India Wellness, Cardiac Rehabilitation, Heart Rehab Program, Pulmonary Rehab, HBOT Therapy, Hyperbaric Therapy, Medical Rehab, Rehabilitation Care, Heart Recovery Care, Post Surgery Rehab, Post Heart Attack Care, Heart Disease Prevention, Medical Rehabilitation, Advanced Cardiac Rehab, Doctor Supervised Rehab, Clinical Cardiac Rehab, Cardiac Rehab Center, Corporate Wellness, Executive Health, Medical Wellness, Holistic Wellness",
    canonicalPath: "/international",
    schema: [
      organizationSchema,
      buildFaqSchema(faqs),
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "International Patients", url: "/international" },
      ]),
    ],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError("");
    try {
      await fetch(SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-36 pb-16 bg-[#062A3E]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/5">
                <Globe size={12} className="text-[#5CE0D8]" />
                <span className="text-white/60 text-[11px] tracking-[0.15em] uppercase">
                  International Patients
                </span>
              </div>
              <h1 className="text-white mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, lineHeight: 1.25 }}>
                International Cardiopulmonary Rehabilitation in Coastal India
              </h1>
              <p className="text-white/50 text-[14px] mb-6" style={{ lineHeight: 1.7 }}>
                Advanced Cardiac, Pulmonary & Neurovascular Recovery
                under the surgical expertise of Dr. Harivadan Lukka.
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
                {["English-Speaking Team", "International Patient Support", "Visa Assistance", "Affordable Advanced Care"].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5">
                    <Check size={13} className="text-[#0FACA3]" />
                    <span className="text-white/50 text-[12px]">{badge}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#inquiry" className="px-6 py-2.5 bg-[#0FACA3] text-white rounded-full text-[13px] hover:bg-[#0d9990] transition-all hover:shadow-lg hover:shadow-[#0FACA3]/25">
                  Plan Your Visit
                </a>
                <a href="#inquiry" className="px-6 py-2.5 border border-white/20 text-white/60 rounded-full text-[13px] hover:bg-white/5 transition-all">
                  Video Consult Before Travel
                </a>
              </div>

              <div className="mt-8 text-white/30 text-[12px] space-y-0.5">
                <p>+91 79975 92222 &nbsp;·&nbsp; +91 91336 85222</p>
                <p>Maharanipeta, Visakhapatnam &nbsp;·&nbsp; Mon–Sat: 9AM–7PM</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="hidden lg:flex justify-center"
            >
              <ImageWithFallback
                src="/images/international/coastal-beach.jpg"
                alt="Visakhapatnam Coastal Beach"
                className="w-full h-[300px] object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-[#1a3a4a] mb-2 text-[20px]" style={{ fontWeight: 600 }}>
              World-Class Rehabilitation. Indian Hospitality.
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 rounded-md bg-[#f8fafb]"
              >
                <item.icon size={18} className="text-[#0FACA3] mb-3" />
                <h3 className="text-[#1a3a4a] text-[14px] mb-1" style={{ fontWeight: 600 }}>{item.title}</h3>
                <p className="text-gray-400 text-[13px]" style={{ lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#f6f9fc]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <ImageWithFallback
                src={doctorImg}
                alt="Dr. Harivadan Lukka"
                className="w-[280px] h-[350px] object-cover rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-[#1a3a4a] mb-1 text-[20px]" style={{ fontWeight: 600 }}>
                Dr. Harivadan Lukka
              </h2>
              <p className="text-gray-400 text-[13px] mb-4">MBBS | MS | M.Ch — Cardiothoracic & Vascular Surgeon</p>
              <p className="text-gray-500 text-[14px] mb-6" style={{ lineHeight: 1.8 }}>
                Internationally trained surgeon with 15+ years of expertise in cardiac, vascular and minimally
                invasive procedures — now leading advanced rehabilitation protocols in Visakhapatnam.
              </p>
              <Link
                to="/doctor"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0B4D6E] text-white rounded-full text-[13px] hover:bg-[#093d58] transition-all hover:shadow-lg hover:shadow-[#0B4D6E]/20"
              >
                View Full Profile
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-[#1a3a4a] text-[20px]" style={{ fontWeight: 600 }}>
              Conditions We Commonly Treat
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {conditions.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#f6f9fc]"
              >
                <c.icon size={16} className="text-[#0FACA3] shrink-0" strokeWidth={1.5} />
                <span className="text-gray-600 text-[13px]">{c.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Journey */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#f8fafb]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-[#1a3a4a] text-[20px]" style={{ fontWeight: 600 }}>
              Your International Patient Journey
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-5 gap-4">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 text-center"
              >
                <div className="w-10 h-10 rounded-md bg-[#0FACA3]/8 flex items-center justify-center mx-auto mb-3">
                  <step.icon size={18} className="text-[#0FACA3]" />
                </div>
                <div className="text-[#0FACA3] text-[11px] mb-1" style={{ fontWeight: 600 }}>Step {i + 1}</div>
                <h3 className="text-[#1a3a4a] text-[13px] mb-1" style={{ fontWeight: 600 }}>{step.title}</h3>
                <p className="text-gray-400 text-[12px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-[#1a3a4a] text-[20px]" style={{ fontWeight: 600 }}>
              International Patient Services
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "Pre-Arrival", items: services.preArrival },
              { title: "Travel & Stay", items: services.travelStay },
              { title: "During Treatment", items: services.duringTreatment },
            ].map((group) => (
              <div key={group.title} className="p-5 rounded-2xl bg-[#f6f9fc]">
                <h3 className="text-[#1a3a4a] text-[14px] mb-3 pb-3 border-b border-gray-200" style={{ fontWeight: 600 }}>
                  {group.title}
                </h3>
                <div className="space-y-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check size={13} className="text-[#0FACA3] shrink-0" />
                      <span className="text-gray-500 text-[13px]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#f8fafb]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-[#1a3a4a] text-[20px]" style={{ fontWeight: 600 }}>
              Patient Stories
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-gray-100"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Globe size={14} className="text-[#0FACA3]" />
                  <span className="text-gray-400 text-[12px]">{t.country}</span>
                </div>
                <p className="text-gray-500 text-[13px] mb-4" style={{ lineHeight: 1.7 }}>
                  "{t.text}"
                </p>
                <div>
                  <div className="text-[#1a3a4a] text-[13px]" style={{ fontWeight: 600 }}>{t.name}</div>
                  <div className="text-gray-400 text-[12px]">{t.condition}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-lg overflow-hidden h-[300px]">
              <ImageWithFallback
                src={cityImg}
                alt="Visakhapatnam"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[#1a3a4a] mb-5 text-[20px]" style={{ fontWeight: 600 }}>
                Location & Travel Information
              </h2>
              <div className="space-y-3">
                {[
                  { icon: MapPin, text: "14 km from Visakhapatnam International Airport" },
                  { icon: Globe, text: "Pleasant coastal climate year-round" },
                  { icon: MessageCircle, text: "Languages: English, Hindi, Telugu" },
                  { icon: Calendar, text: "Hotels within 2 km radius" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <item.icon size={16} className="text-[#0FACA3] shrink-0" />
                    <span className="text-gray-500 text-[14px]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <h2 className="text-[#1a3a4a] mb-6 text-center text-[20px]" style={{ fontWeight: 600 }}>
            Required Documents
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {documents.map((doc) => (
              <div key={doc} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100">
                <Check size={14} className="text-[#0FACA3] shrink-0" />
                <span className="text-gray-600 text-[13px]">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="inquiry" className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#062A3E]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-white mb-2 text-[22px]" style={{ fontWeight: 600 }}>
              Begin Your Healing Journey with Confidence
            </h2>
            <p className="text-white/40 text-[13px]">We respond within 2–4 working hours.</p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-14"
            >
              <div className="w-14 h-14 rounded-full bg-[#0FACA3]/20 flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-[#0FACA3]" />
              </div>
              <h3 className="text-white mb-2 text-[18px]" style={{ fontWeight: 600 }}>Thank You</h3>
              <p className="text-white/40 text-[14px]">
                Your consultation request has been submitted. Our international patient coordinator will contact you within 2–4 working hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/40 text-[12px] mb-1.5">Full Name *</label>
                  <input
                    type="text" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white placeholder-white/25 focus:border-[#0FACA3] outline-none transition-colors text-[13px]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-[12px] mb-1.5">Country *</label>
                  <input
                    type="text" required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white placeholder-white/25 focus:border-[#0FACA3] outline-none transition-colors text-[13px]"
                    placeholder="Your country"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/40 text-[12px] mb-1.5">WhatsApp / Email *</label>
                  <input
                    type="text" required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white placeholder-white/25 focus:border-[#0FACA3] outline-none transition-colors text-[13px]"
                    placeholder="WhatsApp number or email"
                  />
                </div>
                <div>
                  <label className="block text-white/40 text-[12px] mb-1.5">Condition / Therapy Interest</label>
                  <input
                    type="text"
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white placeholder-white/25 focus:border-[#0FACA3] outline-none transition-colors text-[13px]"
                    placeholder="e.g., Post-bypass recovery"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/40 text-[12px] mb-1.5">Preferred Travel Dates</label>
                <input
                  type="text"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white placeholder-white/25 focus:border-[#0FACA3] outline-none transition-colors text-[13px]"
                  placeholder="Approximate dates or month"
                />
              </div>
              <div>
                <label className="block text-white/40 text-[12px] mb-1.5">Medical Summary</label>
                <textarea
                  rows={3}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/8 border border-white/10 text-white placeholder-white/25 focus:border-[#0FACA3] outline-none transition-colors text-[13px] resize-none"
                  placeholder="Brief description of your condition and treatment history..."
                />
              </div>
              {submitError && (
                <p className="text-red-400 text-[13px] text-center">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 bg-[#0FACA3] text-white rounded-full hover:bg-[#0d9990] transition-all text-[14px] hover:shadow-lg hover:shadow-[#0FACA3]/25 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Request Medical Consultation"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Location Showcase */}
      <LocationShowcase />

      {/* FAQ */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <h2 className="text-[#1a3a4a] mb-8 text-center text-[20px]" style={{ fontWeight: 600 }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[#1a3a4a] text-[14px]" style={{ fontWeight: 500 }}>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-200 shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-400 text-[13px]" style={{ lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}