import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle, Briefcase, MessageCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from "../seo/schemas";

const offerings = [
  {
    title: "Cardiac Screening Camps",
    text: "On-site or facility-based cardiac health camps including ECG, blood pressure, BMI, lipid screening, and risk stratification for all employees.",
  },
  {
    title: "Executive Health Check-Ups",
    text: "Comprehensive health assessments for senior executives including advanced cardiac markers, stress testing, and specialist review.",
  },
  {
    title: "Workplace Stress Management",
    text: "Structured workshops and individual sessions on stress recognition, resilience building, and mindfulness techniques for high-pressure environments.",
  },
  {
    title: "Nutrition & Wellness Workshops",
    text: "Interactive group workshops on heart-healthy eating, workday nutrition, hydration, and managing diet through busy corporate schedules.",
  },
  {
    title: "Employee Fitness Programs",
    text: "Guided group exercise sessions, walking programs, and desk ergonomics training to reduce sedentary behaviour and improve workplace activity.",
  },
  {
    title: "Chronic Disease Prevention Programs",
    text: "Targeted programs for employees at risk of or living with diabetes, hypertension, and metabolic syndrome — supporting disease management and prevention.",
  },
  {
    title: "Mental Health & Burnout Prevention",
    text: "Corporate mental health awareness programs and individual counselling support to address burnout, anxiety, and workplace mental health challenges.",
  },
  {
    title: "Post-Event Return-to-Work Support",
    text: "Structured rehabilitation plans for employees returning to work after cardiac events, surgeries, or prolonged illness — ensuring safe and confident reintegration.",
  },
];

const benefits = [
  "Reduces absenteeism and presenteeism",
  "Lowers corporate healthcare costs",
  "Improves employee morale and engagement",
  "Identifies high-risk employees early",
  "Demonstrates organisational care for employee wellbeing",
  "Increases productivity through healthier teams",
];

export function CorporateWellnessPage() {
  useSEO({
    title: "Corporate Wellness Programs Visakhapatnam | Pranavayu",
    description:
      "Pranavayu partners with organisations to deliver cardiac screening camps, stress management, nutrition workshops & employee health programs in Visakhapatnam.",
    keywords:
      "Corporate Wellness Vizag, Employee Health Programs Visakhapatnam, Cardiac Screening Corporate, Workplace Health India, Executive Health Check-up Vizag",
    canonicalPath: "/corporate-wellness",
    schema: [
      buildMedicalWebPageSchema({
        name: "Corporate Wellness Programs",
        description:
          "Pranavayu delivers corporate wellness programs including cardiac screening, stress management, and employee health initiatives in Visakhapatnam.",
        url: "/corporate-wellness",
        specialty: "Preventive Medicine",
      }),
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Corporate Wellness", url: "/corporate-wellness" },
      ]),
    ],
  });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-[#062A3E] via-[#0a3f58] to-[#062A3E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(249,115,22,0.06),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase text-white/60 font-medium mb-6">
              🏢 Corporate Wellness
            </div>
            <h1
              className="text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              Promoting Workplace Health — Corporate Wellness at Pranavayu
            </h1>
            <p className="text-white/55 text-[17px] leading-relaxed mb-8 max-w-2xl">
              Pranavayu's corporate wellness programs bring expert cardiac and medical wellness directly to organisations — empowering employees to live healthier, more productive lives while reducing the burden of preventable chronic disease.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#0FACA3] text-white rounded-full text-[15px] hover:bg-[#0d9990] transition-all duration-300 hover:-translate-y-[1px]"
              >
                Enquire Now
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <a
                href="https://wa.me/917997592222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 text-white/80 rounded-full text-[15px] hover:bg-white/5 hover:border-white/35 transition-all duration-300 hover:-translate-y-[1px]"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-4">Our Corporate Wellness Offerings</h2>
            <p className="text-gray-500 text-[15.5px] leading-relaxed">
              We work with companies to design bespoke wellness programs — from one-time health camps to ongoing employee wellness partnerships — tailored to the size, needs, and budget of your organisation.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {offerings.map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#fff9f5] border border-orange-100 rounded-2xl p-5 hover:border-orange-300/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase size={18} className="text-orange-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1a3a4a] font-semibold text-[14px] mb-2 leading-snug">{o.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{o.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 bg-[#fff9f5]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-3">Why Corporate Wellness Matters</h2>
            <p className="text-gray-500 text-[15.5px] max-w-2xl mx-auto">
              The ROI of employee wellness programs goes far beyond healthcare costs.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-orange-100 rounded-xl px-5 py-3.5 flex items-start gap-3"
              >
                <CheckCircle size={15} className="text-orange-400 mt-0.5 shrink-0" />
                <span className="text-gray-600 text-[13.5px] leading-snug">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#062A3E] to-[#0B4D6E]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-white font-bold text-[1.75rem] mb-3">Build a Healthier Workplace</h2>
          <p className="text-white/55 text-[15.5px] leading-relaxed mb-7">
            Partner with Pranavayu to design a corporate wellness program that puts your employees' health first.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#0FACA3] text-white rounded-full text-[15px] hover:bg-[#0d9990] transition-all duration-300 hover:-translate-y-[1px]"
            >
              Enquire Now
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
            <a
              href="https://wa.me/917997592222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#25D366] text-white rounded-full text-[15px] hover:bg-[#20bd59] transition-all duration-300 hover:-translate-y-[1px]"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
