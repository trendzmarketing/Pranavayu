import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle, Leaf, MessageCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from "../seo/schemas";

const pillars = [
  {
    title: "Therapeutic Nutrition",
    text: "Evidence-based dietary guidance targeting heart health, weight management, blood sugar control, and anti-inflammatory nutrition.",
  },
  {
    title: "Physical Activity Prescription",
    text: "Medically tailored exercise routines to improve cardiovascular fitness, metabolic health, and physical resilience.",
  },
  {
    title: "Stress Management & Mindfulness",
    text: "Structured techniques including mindfulness, breathing exercises, and cognitive-behavioural approaches to reduce chronic stress.",
  },
  {
    title: "Sleep Optimisation",
    text: "Assessment and management of sleep disorders including sleep apnoea — a significant but underrecognised cardiac risk factor.",
  },
  {
    title: "Tobacco Cessation Support",
    text: "Personalised smoking cessation programs combining counselling, behavioural therapy, and medical management.",
  },
  {
    title: "Healthy Relationships & Social Health",
    text: "Addressing social isolation, relationship health, and community support — factors with measurable impact on cardiovascular outcomes.",
  },
];

const benefits = [
  "Reduces cardiovascular disease risk by addressing root causes",
  "Improves energy, sleep, and mental wellbeing",
  "Supports sustainable weight management",
  "Reduces dependence on medication through lifestyle change",
  "Builds long-term habits for disease prevention",
  "Enhances quality and quantity of life",
];

export function LifestyleMedicinePage() {
  useSEO({
    title: "Lifestyle Medicine Program in Visakhapatnam | Pranavayu",
    description:
      "Address root causes of chronic disease with Pranavayu's lifestyle medicine — nutrition, exercise, sleep, stress management & tobacco cessation in Vizag.",
    keywords:
      "Lifestyle Medicine Vizag, Chronic Disease Prevention Visakhapatnam, Nutrition Counselling Vizag, Stress Management Program, Sleep Disorders Treatment, Tobacco Cessation India",
    canonicalPath: "/lifestyle-medicine",
    schema: [
      buildMedicalWebPageSchema({
        name: "Lifestyle Medicine Program",
        description:
          "Evidence-based lifestyle interventions at Pranavayu addressing nutrition, physical activity, sleep, stress, and tobacco cessation in Visakhapatnam.",
        url: "/lifestyle-medicine",
        specialty: "Lifestyle Medicine",
      }),
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Lifestyle Medicine", url: "/lifestyle-medicine" },
      ]),
    ],
  });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-[#062A3E] via-[#0a3f58] to-[#062A3E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(245,158,11,0.06),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase text-white/60 font-medium mb-6">
              ✨ Lifestyle Medicine
            </div>
            <h1
              className="text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              A Holistic Health Approach — Lifestyle Medicine at Pranavayu
            </h1>
            <p className="text-white/55 text-[17px] leading-relaxed mb-8 max-w-2xl">
              Lifestyle medicine uses evidence-based lifestyle interventions as the primary means of preventing, treating, and often reversing chronic disease — addressing nutrition, physical activity, sleep, stress, relationships, and environmental factors.
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

      {/* Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-4">The Six Pillars of Lifestyle Medicine</h2>
            <p className="text-gray-500 text-[15.5px] leading-relaxed">
              Pranavayu's lifestyle medicine program addresses all six evidence-based pillars of holistic health, creating transformative and sustainable change.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#fffdf5] border border-amber-100 rounded-2xl p-6 hover:border-amber-300/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Leaf size={18} className="text-amber-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1a3a4a] font-semibold text-[15px] mb-2">{p.title}</h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#fffdf5]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-3">Benefits of Lifestyle Medicine</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-amber-100 rounded-xl px-5 py-3.5 flex items-start gap-3"
              >
                <CheckCircle size={15} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-gray-600 text-[13.5px] leading-snug">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#062A3E] to-[#0B4D6E]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-white font-bold text-[1.75rem] mb-3">Transform Your Health Through Lifestyle</h2>
          <p className="text-white/55 text-[15.5px] leading-relaxed mb-7">
            Begin your personalised lifestyle medicine program and take control of your long-term health.
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
