import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle, Shield, MessageCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from "../seo/schemas";

const services = [
  {
    title: "Cardiac Risk Assessment",
    text: "Comprehensive evaluation of personal and family cardiac risk factors — including lipid profile, ECG, echocardiography, stress testing, and inflammatory markers.",
  },
  {
    title: "Lifestyle Risk Factor Management",
    text: "Personalised plans to address smoking, hypertension, diabetes, obesity, and sedentary behaviour — the leading modifiable risk factors for heart disease.",
  },
  {
    title: "Preventive Medication Review",
    text: "Optimisation of preventive medications including statins, antihypertensives, and antiplatelet agents under Dr. Lukka's expert guidance.",
  },
  {
    title: "Cardiac Screening Programs",
    text: "Annual cardiac health checks for individuals above 35 — especially those with strong family history, metabolic syndrome, or occupational stress.",
  },
  {
    title: "Nutrition & Weight Management",
    text: "Heart-healthy dietary planning and medically supervised weight management to reduce cardiovascular load and improve lipid profiles.",
  },
  {
    title: "Stress & Mental Health Support",
    text: "Recognition and management of psychological risk factors — including chronic stress, anxiety, and burnout — that significantly elevate cardiac risk.",
  },
];

const whoItsFor = [
  "Individuals with family history of heart disease",
  "People with hypertension or high cholesterol",
  "Those with metabolic syndrome or prediabetes",
  "Smokers or former smokers",
  "Sedentary professionals above 35",
  "Post-cardiac event patients (long-term prevention)",
  "Anyone wanting a comprehensive heart health check",
];

export function PreventiveCardiologyPage() {
  useSEO({
    title: "Preventive Cardiology in Visakhapatnam | Pranavayu",
    description:
      "Prevent heart disease before it starts. Pranavayu offers cardiac risk assessment, lifestyle risk management & cardiac screening programs in Visakhapatnam.",
    keywords:
      "Preventive Cardiology Vizag, Cardiac Risk Assessment Visakhapatnam, Heart Disease Prevention India, Cardiac Screening Vizag, Heart Check-up Visakhapatnam",
    canonicalPath: "/preventive-cardiology",
    schema: [
      buildMedicalWebPageSchema({
        name: "Preventive Cardiology Program",
        description:
          "Cardiac risk assessment, lifestyle intervention, and medical management to protect cardiovascular health at Pranavayu, Visakhapatnam.",
        url: "/preventive-cardiology",
        specialty: "Cardiovascular Surgery",
      }),
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Preventive Cardiology", url: "/preventive-cardiology" },
      ]),
    ],
  });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-[#062A3E] via-[#0a3f58] to-[#062A3E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(139,92,246,0.07),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase text-white/60 font-medium mb-6">
              🛡️ Preventive Cardiology
            </div>
            <h1
              className="text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              Protecting the Heart — Preventive Cardiology at Pranavayu
            </h1>
            <p className="text-white/55 text-[17px] leading-relaxed mb-8 max-w-2xl">
              The best time to prevent a heart attack is before it happens. Our preventive cardiology program uses comprehensive risk assessment, lifestyle intervention, and medical management to protect your cardiovascular health long-term.
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

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-4">What We Offer</h2>
            <p className="text-gray-500 text-[15.5px] leading-relaxed">
              Our preventive cardiology program is designed for individuals who want to proactively protect their heart health — whether they have risk factors, a family history, or simply want peace of mind.
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
                className="bg-[#f8fffe] border border-[#e8f5f4] rounded-2xl p-6 hover:border-[#0FACA3]/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield size={18} className="text-violet-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1a3a4a] font-semibold text-[15px] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-16 bg-[#f8fffe]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-3">Who Should Consider Preventive Cardiology?</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {whoItsFor.map((w, i) => (
              <motion.div
                key={w}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white border border-[#e8f5f4] rounded-xl px-5 py-3.5 flex items-start gap-3"
              >
                <CheckCircle size={15} className="text-[#0FACA3] mt-0.5 shrink-0" />
                <span className="text-gray-600 text-[13.5px] leading-snug">{w}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#062A3E] to-[#0B4D6E]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-white font-bold text-[1.75rem] mb-3">Protect Your Heart Before It's Too Late</h2>
          <p className="text-white/55 text-[15.5px] leading-relaxed mb-7">
            Don't wait for symptoms. Schedule a cardiac risk assessment with Dr. Harivadan Lukka today.
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
