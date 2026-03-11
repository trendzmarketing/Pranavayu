import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle, Heart, Activity, Shield, MessageCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from "../seo/schemas";

const benefits = [
  "Reduces risk of second heart attack by up to 47%",
  "Improves exercise tolerance and cardiovascular fitness",
  "Supports psychological recovery and reduces anxiety",
  "Lowers hospital readmission rates significantly",
  "Helps achieve and maintain healthy weight and blood pressure",
  "Provides education on heart-healthy lifestyle habits",
];

const conditions = [
  "Heart Attack (Myocardial Infarction)",
  "Coronary Bypass Surgery (CABG)",
  "Angioplasty / Stent Placement",
  "Heart Valve Repair or Replacement",
  "Heart Failure (Stable)",
  "Stable Angina",
  "Cardiac Transplantation",
];

const phases = [
  {
    num: "01",
    title: "Assessment & Baseline",
    text: "Comprehensive evaluation of cardiac function, exercise capacity, risk factors, and personal recovery goals.",
  },
  {
    num: "02",
    title: "Supervised Exercise Training",
    text: "Gradually progressive monitored exercise sessions — aerobic, strength, and flexibility — tailored to cardiac status.",
  },
  {
    num: "03",
    title: "Education & Risk Factor Management",
    text: "Structured sessions covering heart-healthy diet, medication adherence, stress reduction, and smoking cessation.",
  },
  {
    num: "04",
    title: "Psychological Support",
    text: "Counselling and psychological support to address depression, anxiety, and fear often associated with cardiac events.",
  },
  {
    num: "05",
    title: "Maintenance & Long-term Wellness",
    text: "Transition to a sustainable, independent long-term wellness plan with ongoing monitoring and support.",
  },
];

export function CardiacRehabPage() {
  useSEO({
    title: "Cardiac Rehabilitation in Visakhapatnam | Pranavayu",
    description:
      "Doctor-supervised cardiac rehabilitation at Pranavayu for heart attack recovery, bypass surgery, angioplasty & heart failure. Personalised programs in Vizag.",
    keywords:
      "Cardiac Rehabilitation Vizag, Heart Attack Recovery Visakhapatnam, Bypass Surgery Rehab, Cardiac Rehab Program India, Heart Failure Rehabilitation",
    canonicalPath: "/cardiac-rehabilitation",
    schema: [
      buildMedicalWebPageSchema({
        name: "Cardiac Rehabilitation Program",
        description:
          "Doctor-supervised cardiac rehabilitation at Pranavayu for heart attack recovery, bypass surgery, angioplasty, and heart failure in Visakhapatnam.",
        url: "/cardiac-rehabilitation",
        specialty: "Cardiac Rehabilitation",
      }),
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Cardiac Rehabilitation", url: "/cardiac-rehabilitation" },
      ]),
    ],
  });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-[#062A3E] via-[#0a3f58] to-[#062A3E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(232,93,106,0.08),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase text-white/60 font-medium mb-6">
              ❤️ Cardiac Rehabilitation
            </div>
            <h1
              className="text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              Structured Heart Recovery — Cardiac Rehabilitation at Pranavayu
            </h1>
            <p className="text-white/55 text-[17px] leading-relaxed mb-8 max-w-2xl">
              Cardiac rehabilitation is a medically supervised program that helps patients recover physically and emotionally after a heart attack, cardiac surgery, or diagnosis of heart disease — restoring strength, confidence, and quality of life.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#0FACA3] text-white rounded-full text-[15px] hover:bg-[#0d9990] transition-all duration-300 hover:shadow-lg hover:shadow-[#0FACA3]/25 hover:-translate-y-[1px]"
              >
                Book Consultation
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

      {/* What is Cardiac Rehab */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-4 leading-snug">
                What is Cardiac Rehabilitation?
              </h2>
              <p className="text-gray-500 text-[15.5px] leading-relaxed mb-5">
                Cardiac rehabilitation is a structured, evidence-based program combining medically supervised exercise, education, and psychosocial support. It is designed for individuals recovering from any form of cardiac event or condition.
              </p>
              <p className="text-gray-500 text-[15.5px] leading-relaxed mb-5">
                At Pranavayu, every cardiac rehabilitation plan is personalised by Dr. Harivadan Lukka (M.Ch Cardiothoracic Surgery) and delivered by a multidisciplinary team of rehab physiotherapists, exercise specialists, nutritionists, and psychological support counsellors.
              </p>
              <p className="text-gray-500 text-[15.5px] leading-relaxed">
                The goal is not just recovery — it is building a stronger, healthier heart and empowering patients with the knowledge and habits for long-term cardiac wellness.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#f8fffe] to-white border border-[#e8f5f4] rounded-2xl p-7"
            >
              <div className="flex items-center gap-2 mb-5">
                <Heart size={18} className="text-[#e85d6a]" />
                <h3 className="text-[#1a3a4a] font-semibold text-[16px]">Key Benefits</h3>
              </div>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#0FACA3] mt-0.5 shrink-0" strokeWidth={2} />
                    <span className="text-gray-500 text-[14px] leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 bg-[#f8fffe]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-3">Who Should Attend Cardiac Rehab?</h2>
            <p className="text-gray-500 text-[15.5px] max-w-2xl mx-auto">
              Pranavayu's cardiac rehabilitation program is designed for patients recovering from:
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {conditions.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white border border-[#e8f5f4] rounded-xl px-4 py-3 flex items-center gap-2.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#e85d6a] shrink-0" />
                <span className="text-gray-600 text-[13.5px]">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Phases */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-3">How the Program Works</h2>
            <p className="text-gray-500 text-[15.5px] max-w-2xl mx-auto">
              A structured, phased approach ensures safe and progressive recovery.
            </p>
          </motion.div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {phases.map((ph, i) => (
              <motion.div
                key={ph.num}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 bg-[#f8fffe] border border-[#e8f5f4] rounded-2xl p-5 hover:border-[#0FACA3]/40 transition-all duration-200"
              >
                <div className="text-[#0FACA3]/30 font-bold text-[1.75rem] leading-none w-10 shrink-0">{ph.num}</div>
                <div>
                  <h3 className="text-[#1a3a4a] font-semibold text-[15px] mb-1">{ph.title}</h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">{ph.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#062A3E] to-[#0B4D6E]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-white font-bold text-[1.75rem] mb-3">Ready to Begin Your Cardiac Recovery?</h2>
          <p className="text-white/55 text-[15.5px] leading-relaxed mb-7">
            Speak with our team today and take the first step toward a stronger, healthier heart.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#0FACA3] text-white rounded-full text-[15px] hover:bg-[#0d9990] transition-all duration-300 hover:-translate-y-[1px]"
            >
              Book Consultation
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
