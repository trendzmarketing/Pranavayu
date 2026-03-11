import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle, Zap, MessageCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { buildMedicalWebPageSchema, buildFaqSchema, buildBreadcrumbSchema } from "../seo/schemas";

const benefits = [
  "Accelerates wound healing and tissue repair",
  "Reduces inflammation and swelling",
  "Supports recovery after cardiac surgery",
  "Enhances antibiotic effectiveness in certain infections",
  "Promotes new blood vessel growth (angiogenesis)",
  "Supports neurological recovery",
  "Reduces post-operative complications",
  "Improves oxygen delivery to hypoxic tissues",
];

const indications = [
  "Non-healing diabetic wounds",
  "Post-cardiac surgery recovery support",
  "Radiation injury (soft tissue necrosis)",
  "Decompression sickness",
  "Carbon monoxide poisoning",
  "Chronic refractory osteomyelitis",
  "Post-stroke neurological support",
  "Thermal burns",
  "Crush injuries",
  "Air or gas embolism",
];

const faqs = [
  {
    q: "Is HBOT painful?",
    a: "HBOT is generally comfortable. Patients lie in a pressurised chamber and breathe normally. Some people feel mild ear pressure during pressurisation, similar to flying in an aircraft.",
  },
  {
    q: "How long is a session?",
    a: "Typical sessions last 60–90 minutes, including pressurisation and depressurisation time. The number of sessions varies based on the condition being treated.",
  },
  {
    q: "Who conducts the treatment?",
    a: "All HBOT sessions at Pranavayu are supervised by Dr. Harivadan Lukka and our trained clinical team throughout the entire procedure.",
  },
  {
    q: "How many sessions are needed?",
    a: "This varies by condition. Some acute conditions may require fewer sessions; chronic wound healing or complex cases may require 20–40 sessions across several weeks.",
  },
];

export function HBOTPage() {
  useSEO({
    title: "Hyperbaric Oxygen Therapy (HBOT) Vizag | Pranavayu",
    description:
      "Pranavayu's HBOT delivers 100% oxygen in a pressurised chamber for wound healing, post-surgical recovery, radiation injury & stroke support in Visakhapatnam.",
    keywords:
      "HBOT Visakhapatnam, Hyperbaric Oxygen Therapy Vizag, Wound Healing HBOT India, Diabetic Wound Treatment, Post-Surgical HBOT, HBOT for Stroke Recovery",
    canonicalPath: "/hyperbaric-oxygen-therapy",
    schema: [
      buildMedicalWebPageSchema({
        name: "Hyperbaric Oxygen Therapy (HBOT)",
        description:
          "HBOT at Pranavayu delivers 100% oxygen under pressure for wound healing, post-surgical recovery, radiation injury, and neurological support in Visakhapatnam.",
        url: "/hyperbaric-oxygen-therapy",
        specialty: "Hyperbaric Medicine",
      }),
      buildFaqSchema(faqs.map((f) => ({ q: f.q, a: f.a }))),
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Hyperbaric Oxygen Therapy", url: "/hyperbaric-oxygen-therapy" },
      ]),
    ],
  });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-[#062A3E] via-[#0a3f58] to-[#062A3E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(15,172,163,0.1),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase text-white/60 font-medium mb-6">
              🫧 Hyperbaric Oxygen Therapy
            </div>
            <h1
              className="text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              Supporting Healing — Hyperbaric Oxygen Therapy at Pranavayu
            </h1>
            <p className="text-white/55 text-[17px] leading-relaxed mb-8 max-w-2xl">
              Hyperbaric Oxygen Therapy (HBOT) delivers 100% pure oxygen under increased atmospheric pressure, flooding the body's tissues with healing oxygen at levels far beyond what normal breathing can achieve — accelerating recovery and repair.
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

      {/* How HBOT Works */}
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
                How Does HBOT Work?
              </h2>
              <p className="text-gray-500 text-[15.5px] leading-relaxed mb-5">
                In a hyperbaric chamber, atmospheric pressure is increased to 2–3 times normal, allowing the lungs to take in significantly more oxygen. This oxygen-rich blood reaches damaged tissues, promotes healing, fights infection, and stimulates the release of growth factors.
              </p>
              <p className="text-gray-500 text-[15.5px] leading-relaxed mb-5">
                At Pranavayu, HBOT is used as both a primary and adjunct therapy — supporting surgical recovery, enhancing the effects of cardiac and pulmonary rehabilitation, and treating complex conditions that respond poorly to conventional treatment.
              </p>
              <p className="text-gray-500 text-[15.5px] leading-relaxed">
                All sessions are fully supervised by Dr. Harivadan Lukka and our clinical care team throughout the procedure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#f0fbfa] to-white border border-[#e8f5f4] rounded-2xl p-7"
            >
              <div className="flex items-center gap-2 mb-5">
                <Zap size={18} className="text-[#0FACA3]" />
                <h3 className="text-[#1a3a4a] font-semibold text-[16px]">Clinical Benefits</h3>
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

      {/* Indications */}
      <section className="py-16 bg-[#f8fffe]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-3">Medical Indications for HBOT</h2>
            <p className="text-gray-500 text-[15.5px] max-w-2xl mx-auto">Conditions for which HBOT is clinically indicated:</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {indications.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white border border-[#e8f5f4] rounded-xl px-4 py-3 flex items-center gap-2.5"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#0FACA3] shrink-0" />
                <span className="text-gray-600 text-[13.5px]">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-3">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f8fffe] border border-[#e8f5f4] rounded-2xl p-5"
              >
                <h3 className="text-[#1a3a4a] font-semibold text-[15px] mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#062A3E] to-[#0B4D6E]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-white font-bold text-[1.75rem] mb-3">Explore HBOT for Your Recovery</h2>
          <p className="text-white/55 text-[15.5px] leading-relaxed mb-7">
            Contact our team to learn if Hyperbaric Oxygen Therapy is appropriate for your condition.
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
