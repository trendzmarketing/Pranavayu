import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle, Activity, MessageCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from "../seo/schemas";

const services = [
  {
    title: "Post-Surgical Rehabilitation",
    text: "Structured recovery programs for patients who have undergone major cardiac, thoracic, or abdominal surgeries.",
  },
  {
    title: "Stroke & Neurological Recovery",
    text: "Multidisciplinary rehabilitation for stroke survivors and those with neurological conditions, focusing on functional independence.",
  },
  {
    title: "Musculoskeletal Rehabilitation",
    text: "Targeted physiotherapy for joint, muscle, and orthopaedic conditions that affect mobility and quality of life.",
  },
  {
    title: "Post-ICU Rehabilitation",
    text: "Intensive recovery programs for individuals who experienced prolonged critical care — addressing weakness, deconditioning, and cognitive effects.",
  },
  {
    title: "Chronic Disease Management",
    text: "Long-term rehabilitation support for patients living with diabetes, hypertension, chronic kidney disease, and multi-system conditions.",
  },
  {
    title: "Pain Management & Functional Recovery",
    text: "Evidence-based approaches to managing chronic pain and restoring functional capacity for everyday activities.",
  },
];

const conditions = [
  "Post-Cardiac Surgery",
  "Post-Stroke Recovery",
  "Post-Orthopaedic Surgery",
  "ICU Deconditioning",
  "Chronic Pain",
  "Neurological Conditions",
  "Diabetes Complications",
  "Prolonged Illness Recovery",
];

export function MedicalRehabPage() {
  useSEO({
    title: "Medical Rehabilitation in Visakhapatnam | Pranavayu",
    description:
      "Pranavayu's multidisciplinary medical rehab covers post-surgery recovery, stroke, neurological conditions, ICU deconditioning & chronic disease management in Vizag.",
    keywords:
      "Medical Rehabilitation Vizag, Post Surgery Recovery Visakhapatnam, Stroke Rehabilitation, Neurological Rehab India, ICU Deconditioning Recovery, Physiotherapy Vizag",
    canonicalPath: "/medical-rehabilitation",
    schema: [
      buildMedicalWebPageSchema({
        name: "Medical Rehabilitation Services",
        description:
          "Multidisciplinary medical rehabilitation at Pranavayu covering post-surgery recovery, stroke, neurological conditions, and ICU deconditioning in Visakhapatnam.",
        url: "/medical-rehabilitation",
        specialty: "Physical Medicine and Rehabilitation",
      }),
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Medical Rehabilitation", url: "/medical-rehabilitation" },
      ]),
    ],
  });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-[#062A3E] via-[#0a3f58] to-[#062A3E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(16,185,129,0.07),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase text-white/60 font-medium mb-6">
              🏥 Medical Rehabilitation
            </div>
            <h1
              className="text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              Comprehensive Rehabilitation Care — Medical Rehabilitation at Pranavayu
            </h1>
            <p className="text-white/55 text-[17px] leading-relaxed mb-8 max-w-2xl">
              Medical rehabilitation at Pranavayu addresses recovery from surgery, stroke, neurological conditions, and prolonged illness — using a multidisciplinary approach to help patients regain function, independence, and quality of life.
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

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-10"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-4 leading-snug">
              Our Medical Rehabilitation Services
            </h2>
            <p className="text-gray-500 text-[15.5px] leading-relaxed mb-4">
              Medical rehabilitation at Pranavayu is delivered by a team of physicians, physiotherapists, occupational therapists, and specialist nurses — all working in close coordination to accelerate recovery and prevent complications.
            </p>
            <p className="text-gray-500 text-[15.5px] leading-relaxed">
              Each patient receives an individualised rehabilitation plan based on detailed clinical assessment, functional testing, and personal recovery goals — with regular review and adjustment as progress is made.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#f8fffe] border border-[#e8f5f4] rounded-2xl p-6 hover:border-[#0FACA3]/40 hover:shadow-[0_6px_24px_rgba(15,172,163,0.08)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Activity size={18} className="text-emerald-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1a3a4a] font-semibold text-[15px] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
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
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-3">Who We Help</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {conditions.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white border border-[#e8f5f4] rounded-xl px-4 py-3 flex items-center gap-2.5"
              >
                <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                <span className="text-gray-600 text-[13.5px]">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#062A3E] to-[#0B4D6E]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-white font-bold text-[1.75rem] mb-3">Start Your Recovery Today</h2>
          <p className="text-white/55 text-[15.5px] leading-relaxed mb-7">
            Our rehabilitation specialists are here to design a program that fits your condition and goals.
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
