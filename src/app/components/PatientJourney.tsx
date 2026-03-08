import { motion } from "motion/react";
import { Link } from "react-router";
import { ClipboardCheck, Search, FileText, Zap, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, title: "Consultation", desc: "Comprehensive initial evaluation with Dr. Lukka." },
  { icon: Search, title: "Diagnostic Assessment", desc: "Advanced cardiac imaging and pulmonary function tests." },
  { icon: FileText, title: "Personalized Plan", desc: "Custom-tailored rehabilitation protocol for you." },
  { icon: Zap, title: "Advanced Therapy", desc: "Regular sessions using state-of-the-art equipment." },
  { icon: BarChart3, title: "Monitoring & Recovery", desc: "Continuous tracking with regular adjustments." },
];

export function PatientJourney() {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-4">
            Your Journey
          </p>
          <h2
            className="text-[#1a3a4a] mb-3"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", fontWeight: 600 }}
          >
            The Patient Recovery Journey
          </h2>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden sm:block relative">
          {/* Connecting line */}
          <div className="absolute top-[34px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#0FACA3]/10 via-[#0FACA3]/30 to-[#0FACA3]/10 z-0" />
          <motion.div
            className="absolute top-[33px] left-[10%] h-[2px] bg-gradient-to-r from-[#0FACA3] to-[#0B4D6E] z-[1]"
            initial={{ width: "0%" }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.4 }}
                className="text-center relative"
              >
                {/* Large watermark step number */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 text-[60px] text-[#0FACA3]/[0.04] z-0 pointer-events-none select-none" style={{ fontWeight: 700 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Circle node with glow */}
                <div className="w-[68px] h-[68px] rounded-2xl bg-white border-2 border-[#0FACA3]/20 flex items-center justify-center mx-auto mb-5 shadow-[0_0_16px_rgba(15,172,163,0.1)] relative z-10">
                  <step.icon size={24} className="text-[#0FACA3]" strokeWidth={1.5} />
                </div>
                <div className="text-[#0FACA3] text-[11px] mb-1.5" style={{ fontWeight: 600 }}>
                  Step {i + 1}
                </div>
                <h3 className="text-[#1a3a4a] mb-2" style={{ fontSize: "15px", fontWeight: 600 }}>
                  {step.title}
                </h3>
                <p className="text-gray-400 text-[13px]" style={{ lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="sm:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#f6f9fc] relative"
            >
              {/* Watermark number */}
              <div className="absolute top-2 right-3 text-[36px] text-[#0FACA3]/[0.04] pointer-events-none select-none" style={{ fontWeight: 700 }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-11 h-11 rounded-xl bg-[#0FACA3]/8 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(15,172,163,0.08)]">
                <step.icon size={18} className="text-[#0FACA3]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[#0FACA3] text-[11px]" style={{ fontWeight: 600 }}>Step {i + 1}</div>
                <h3 className="text-[#1a3a4a]" style={{ fontSize: "15px", fontWeight: 600 }}>{step.title}</h3>
                <p className="text-gray-400 text-[13px] mt-0.5">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Journey Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/patient-journey"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#0B4D6E]/15 text-[#0B4D6E] rounded-full text-[14px] hover:bg-[#0B4D6E]/5 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300"
            style={{ fontWeight: 500 }}
          >
            View Full Recovery Journey
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
