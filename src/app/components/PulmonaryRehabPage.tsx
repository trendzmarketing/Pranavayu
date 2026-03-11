import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle, Wind, MessageCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from "../seo/schemas";

const benefits = [
  "Improves breathing capacity and oxygen efficiency",
  "Reduces breathlessness and fatigue during daily activities",
  "Strengthens respiratory muscles",
  "Enhances exercise tolerance",
  "Supports better sleep and overall energy levels",
  "Reduces frequency of respiratory exacerbations",
  "Improves psychological wellbeing and quality of life",
];

const conditions = [
  "COPD (Chronic Obstructive Pulmonary Disease)",
  "Post-COVID Lung Conditions",
  "Asthma (Persistent / Difficult to Control)",
  "Interstitial Lung Disease",
  "Pulmonary Fibrosis",
  "Post-Pneumonia Recovery",
  "Post-Surgical Lung Recovery",
  "Bronchiectasis",
];

const components = [
  {
    title: "Pulmonary Function Assessment",
    text: "Comprehensive baseline testing using spirometry and exercise oximetry to measure current lung capacity and function.",
  },
  {
    title: "Breathing Exercise Training",
    text: "Structured techniques including diaphragmatic breathing, pursed lip breathing, and inspiratory muscle training.",
  },
  {
    title: "Supervised Aerobic Exercise",
    text: "Progressive, monitored exercise to improve cardiovascular fitness and oxygen utilisation without risk.",
  },
  {
    title: "Airway Clearance Techniques",
    text: "Manual and device-assisted techniques to help clear mucus and improve airway patency.",
  },
  {
    title: "Education & Self-Management",
    text: "Patient education on triggers, medications, action plans, and long-term breathing health strategies.",
  },
  {
    title: "Nutritional Guidance",
    text: "Anti-inflammatory diet and nutrition counselling tailored to support respiratory health and energy.",
  },
];

export function PulmonaryRehabPage() {
  useSEO({
    title: "Pulmonary Rehabilitation in Visakhapatnam | Pranavayu",
    description:
      "Breathe better with Pranavayu's pulmonary rehabilitation — specialist-led programs for COPD, asthma, post-COVID lung recovery & respiratory conditions in Vizag.",
    keywords:
      "Pulmonary Rehabilitation Vizag, COPD Treatment Visakhapatnam, Post-COVID Lung Recovery, Respiratory Rehabilitation India, Breathing Rehab Vizag",
    canonicalPath: "/pulmonary-rehabilitation",
    schema: [
      buildMedicalWebPageSchema({
        name: "Pulmonary Rehabilitation Program",
        description:
          "Specialist-led pulmonary rehabilitation for COPD, asthma, post-COVID lung conditions, and respiratory recovery in Visakhapatnam.",
        url: "/pulmonary-rehabilitation",
        specialty: "Pulmonary Rehabilitation",
      }),
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Pulmonary Rehabilitation", url: "/pulmonary-rehabilitation" },
      ]),
    ],
  });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-[#062A3E] via-[#0a3f58] to-[#062A3E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(14,165,233,0.07),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase text-white/60 font-medium mb-6">
              💨 Pulmonary Rehabilitation
            </div>
            <h1
              className="text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              Improving Lung Health — Pulmonary Rehabilitation at Pranavayu
            </h1>
            <p className="text-white/55 text-[17px] leading-relaxed mb-8 max-w-2xl">
              Pulmonary rehabilitation is a supervised, evidence-based program designed to improve the quality of life for patients living with chronic respiratory conditions — helping them breathe easier, move more freely, and live more fully.
            </p>
            <div className="flex flex-wrap gap-3">
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
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 text-white/80 rounded-full text-[15px] hover:bg-white/5 hover:border-white/35 transition-all duration-300 hover:-translate-y-[1px]"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is Pulmonary Rehab */}
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
                What is Pulmonary Rehabilitation?
              </h2>
              <p className="text-gray-500 text-[15.5px] leading-relaxed mb-5">
                Pulmonary rehabilitation is a medically supervised program that combines exercise training, education, and support to help individuals with chronic lung diseases manage their condition and improve their daily functioning.
              </p>
              <p className="text-gray-500 text-[15.5px] leading-relaxed mb-5">
                Unlike medication alone, pulmonary rehab addresses the physical deconditioning, anxiety, and lifestyle factors that worsen breathlessness — creating a complete and holistic pathway to better respiratory health.
              </p>
              <p className="text-gray-500 text-[15.5px] leading-relaxed">
                At Pranavayu, our programs are designed for COPD, asthma, post-COVID lung recovery, tuberculosis recovery, and all forms of chronic respiratory illness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#f0f9ff] to-white border border-[#e0f0fa] rounded-2xl p-7"
            >
              <div className="flex items-center gap-2 mb-5">
                <Wind size={18} className="text-sky-500" />
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
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-3">Conditions We Help</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {conditions.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white border border-[#e0f0fa] rounded-xl px-4 py-3 flex items-center gap-2.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span className="text-gray-600 text-[13.5px]">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-3">Program Components</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {components.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#f8fffe] border border-[#e8f5f4] rounded-2xl p-5 hover:border-[#0FACA3]/40 hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-[#1a3a4a] font-semibold text-[15px] mb-2">{c.title}</h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#062A3E] to-[#0B4D6E]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-white font-bold text-[1.75rem] mb-3">Begin Your Breathing Recovery Today</h2>
          <p className="text-white/55 text-[15.5px] leading-relaxed mb-7">
            Our pulmonary rehabilitation team is ready to help you breathe better and live more fully.
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
