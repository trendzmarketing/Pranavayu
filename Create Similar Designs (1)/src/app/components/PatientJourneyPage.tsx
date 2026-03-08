import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ClipboardCheck,
  Search,
  FileText,
  Zap,
  BarChart3,
  Heart,
  Phone,
  ChevronDown,
  ShieldCheck,
  Activity,
  Sparkles,
  Eye,
  Settings,
  Leaf,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Initial Consultation & Clinical Evaluation",
    subtitle: "Understanding Your Condition in Detail",
    description:
      "Your journey begins with a comprehensive assessment under expert supervision. We evaluate your medical history, current symptoms, functional limitations, and overall cardiopulmonary performance.",
    items: [
      "Medical history review",
      "Surgical history (if applicable)",
      "Current symptoms assessment",
      "Functional limitations",
      "Oxygen saturation levels",
      "Cardiopulmonary performance",
      "Neurological function (if required)",
    ],
    outcome: "A clear clinical profile and recovery roadmap.",
  },
  {
    icon: Search,
    number: "02",
    title: "Diagnostic & Functional Testing",
    subtitle: "Measuring Before We Begin",
    description:
      "Depending on your condition, we conduct objective measurements to design a precise program. We treat based on data, not assumptions.",
    items: [
      "Cardiovascular endurance testing",
      "Lung function evaluation",
      "Oxygen utilization analysis",
      "Balance and gait assessment",
      "Circulatory efficiency screening",
    ],
    outcome: "Data-driven baseline for your personalized program.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Personalized Program Design",
    subtitle: "Your Condition. Your Capacity. Your Protocol.",
    description:
      "Based on your evaluation, we create a structured rehabilitation plan that is phase-based, progress-monitored, and outcome-oriented.",
    items: [
      "Cardiac rehabilitation modules",
      "Pulmonary conditioning sessions",
      "Neurovascular activation therapy",
      "Oxygen-based therapeutic support",
      "Strength and endurance training",
    ],
    outcome: "A structured, personalized recovery protocol.",
  },
  {
    icon: Zap,
    number: "04",
    title: "Supervised Therapy Sessions",
    subtitle: "Guided Recovery in a Controlled Environment",
    description:
      "Your sessions are conducted under monitored conditions. We gradually increase intensity as your strength improves, with continuous observation for safety.",
    items: [
      "Safe exercise intensity",
      "Stable oxygen levels",
      "Proper breathing techniques",
      "Correct movement patterns",
    ],
    outcome: "Gradual, safe improvement under expert guidance.",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Progress Monitoring & Reassessment",
    subtitle: "Measuring Improvement",
    description:
      "We periodically reassess your progress to ensure visible, measurable improvement. If needed, your program is modified for optimal outcomes.",
    items: [
      "Stamina levels",
      "Oxygen efficiency",
      "Cardiovascular response",
      "Balance and coordination",
      "Symptom reduction",
    ],
    outcome: "Visible, measurable progress at every stage.",
  },
  {
    icon: Leaf,
    number: "06",
    title: "Lifestyle Integration & Long-Term Guidance",
    subtitle: "Recovery Beyond the Clinic",
    description:
      "True recovery continues outside therapy sessions. Our goal is not temporary improvement — but long-term stability and independence.",
    items: [
      "Activity planning",
      "Nutrition awareness",
      "Breathing techniques for home",
      "Stress management",
      "Preventive cardiovascular care",
    ],
    outcome: "Long-term stability and sustained recovery.",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    text: "Led by experienced cardiothoracic surgical expertise",
  },
  { icon: Activity, text: "Data-driven rehabilitation protocols" },
  { icon: Sparkles, text: "Advanced oxygen-based therapies" },
  { icon: Eye, text: "Continuous monitoring for safety" },
  { icon: Settings, text: "Personalized program adjustments" },
];

const faqs = [
  {
    q: "How long is the first consultation?",
    a: "Approximately 45–60 minutes. This allows us to thoroughly understand your condition, medical history, and recovery goals.",
  },
  {
    q: "Do I need previous reports?",
    a: "Yes, please bring medical records and test results. This helps us build a complete clinical picture from day one.",
  },
  {
    q: "Is rehabilitation painful?",
    a: "No. Programs are gradual and supervised. Every session is designed within your comfort and safety limits.",
  },
  {
    q: "How long will recovery take?",
    a: "Duration depends on condition severity and individual response. We set realistic milestones and track progress at every step.",
  },
];

export function PatientJourneyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 lg:pt-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041E2D] via-[#0B4D6E] to-[#0a3c55]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,172,163,0.12),transparent_55%)]" />

        {/* Decorative step dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-[#0FACA3]/30"
                style={{
                  left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                  top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#0FACA3] text-[11px] tracking-[0.2em] uppercase mb-5">
              Your Recovery Journey
            </p>
            <h1
              className="text-white mb-5"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                fontWeight: 600,
              }}
            >
              A Structured Path to
              <br />
              <span className="text-white/70">Measurable Recovery</span>
            </h1>
            <p
              className="text-white/50 max-w-2xl mx-auto text-[15px]"
              style={{ lineHeight: 1.8 }}
            >
              At Pranavayu, healing is not random. Every patient follows a carefully designed,
              clinically guided recovery pathway — from first consultation to measurable progress.
            </p>
          </motion.div>

          {/* Step indicator pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mt-10"
          >
            {steps.map((s, i) => (
              <button
                key={s.number}
                onClick={() => {
                  setActiveStep(i);
                  document.getElementById("journey-steps")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`px-3.5 py-1.5 rounded-full text-[11px] border transition-all duration-300 cursor-pointer ${
                  i === activeStep
                    ? "bg-[#0FACA3]/15 border-[#0FACA3]/30 text-[#0FACA3]"
                    : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/60"
                }`}
                style={{ fontWeight: 500 }}
              >
                Step {s.number}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Steps Section */}
      <section id="journey-steps" className="py-16 lg:py-24 bg-[#f6f9fc]">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          {/* Desktop: Horizontal step indicator bar */}
          <div className="hidden lg:block mb-16">
            <div className="relative">
              {/* Background line */}
              <div className="absolute top-5 left-0 right-0 h-[2px] bg-gray-200" />
              {/* Active line */}
              <motion.div
                className="absolute top-5 left-0 h-[2px] bg-gradient-to-r from-[#0FACA3] to-[#0B4D6E]"
                animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
              <div className="relative flex justify-between">
                {steps.map((s, i) => (
                  <button
                    key={s.number}
                    onClick={() => setActiveStep(i)}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-[12px] transition-all duration-300 ${
                        i <= activeStep
                          ? "bg-[#0FACA3] text-white shadow-md shadow-[#0FACA3]/20"
                          : "bg-white text-gray-400 border-2 border-gray-200 group-hover:border-[#0FACA3]/30"
                      }`}
                      style={{ fontWeight: 600 }}
                    >
                      {s.number}
                    </motion.div>
                    <span
                      className={`mt-3 text-[11px] transition-colors duration-300 ${
                        i === activeStep ? "text-[#0B4D6E]" : "text-gray-400"
                      }`}
                      style={{ fontWeight: i === activeStep ? 600 : 400 }}
                    >
                      Step {s.number}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Step Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_30px_rgba(11,77,110,0.04)] overflow-hidden"
            >
              <div className="lg:grid lg:grid-cols-[1fr_1.3fr]">
                {/* Left: Info */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#0FACA3]/8 flex items-center justify-center">
                      {(() => {
                        const Icon = steps[activeStep].icon;
                        return <Icon size={20} className="text-[#0FACA3]" strokeWidth={1.5} />;
                      })()}
                    </div>
                    <div>
                      <span
                        className="text-[#0FACA3] text-[11px]"
                        style={{ fontWeight: 600 }}
                      >
                        Step {steps[activeStep].number}
                      </span>
                    </div>
                  </div>
                  <h2
                    className="text-[#1a3a4a] mb-2"
                    style={{
                      fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                      fontWeight: 600,
                    }}
                  >
                    {steps[activeStep].title}
                  </h2>
                  <p
                    className="text-[#0B4D6E]/50 text-[13px] mb-4"
                    style={{ fontWeight: 500 }}
                  >
                    {steps[activeStep].subtitle}
                  </p>
                  <p
                    className="text-gray-500 text-[14px] mb-6"
                    style={{ lineHeight: 1.75 }}
                  >
                    {steps[activeStep].description}
                  </p>

                  {/* Outcome badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0FACA3]/5 rounded-xl border border-[#0FACA3]/10">
                    <Heart size={13} className="text-[#0FACA3]" strokeWidth={1.5} />
                    <span className="text-[12px] text-[#0B4D6E]" style={{ fontWeight: 500 }}>
                      {steps[activeStep].outcome}
                    </span>
                  </div>
                </div>

                {/* Right: Items list */}
                <div className="bg-[#f6f9fc]/60 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-gray-100">
                  <p
                    className="text-[#1a3a4a] text-[13px] mb-5"
                    style={{ fontWeight: 600 }}
                  >
                    {activeStep === 0 && "We evaluate:"}
                    {activeStep === 1 && "Tests may include:"}
                    {activeStep === 2 && "Your plan may include:"}
                    {activeStep === 3 && "We ensure:"}
                    {activeStep === 4 && "We reassess:"}
                    {activeStep === 5 && "Guidance on:"}
                  </p>
                  <div className="space-y-3">
                    {steps[activeStep].items.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#0FACA3]/8 flex items-center justify-center shrink-0">
                          <span
                            className="text-[#0FACA3] text-[9px]"
                            style={{ fontWeight: 600 }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <span className="text-gray-600 text-[13.5px]">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between px-8 lg:px-10 py-5 border-t border-gray-100 bg-gray-50/50">
                <button
                  onClick={() => setActiveStep((p) => Math.max(0, p - 1))}
                  disabled={activeStep === 0}
                  className="text-[13px] text-gray-400 hover:text-[#0B4D6E] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  style={{ fontWeight: 500 }}
                >
                  ← Previous Step
                </button>
                <div className="flex gap-1.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeStep
                          ? "bg-[#0FACA3] w-5"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setActiveStep((p) => Math.min(steps.length - 1, p + 1))
                  }
                  disabled={activeStep === steps.length - 1}
                  className="text-[13px] text-gray-400 hover:text-[#0B4D6E] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  style={{ fontWeight: 500 }}
                >
                  Next Step →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile step list (vertical timeline under the card) */}
          <div className="lg:hidden mt-8 space-y-2">
            {steps.map((s, i) => (
              <button
                key={s.number}
                onClick={() => setActiveStep(i)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer ${
                  i === activeStep
                    ? "bg-white border border-[#0FACA3]/15 shadow-sm"
                    : "bg-transparent hover:bg-white/60"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] shrink-0 ${
                    i <= activeStep
                      ? "bg-[#0FACA3] text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                  style={{ fontWeight: 600 }}
                >
                  {s.number}
                </div>
                <div>
                  <p
                    className={`text-[13px] ${
                      i === activeStep ? "text-[#1a3a4a]" : "text-gray-400"
                    }`}
                    style={{ fontWeight: i === activeStep ? 600 : 400 }}
                  >
                    {s.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-4">
              Why Pranavayu
            </p>
            <h2
              className="text-[#1a3a4a]"
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                fontWeight: 600,
              }}
            >
              Why Patients Trust Our Structured Approach
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {trustPoints.map((tp, i) => (
              <motion.div
                key={tp.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-center p-5 rounded-2xl bg-[#f6f9fc] hover:bg-[#0FACA3]/5 border border-transparent hover:border-[#0FACA3]/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0FACA3]/8 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0FACA3]/12 transition-colors">
                  <tp.icon
                    size={18}
                    className="text-[#0FACA3]"
                    strokeWidth={1.5}
                  />
                </div>
                <p
                  className="text-gray-600 text-[12.5px]"
                  style={{ lineHeight: 1.6 }}
                >
                  {tp.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-[#f6f9fc]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-4">
              First Visit
            </p>
            <h2
              className="text-[#1a3a4a]"
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                fontWeight: 600,
              }}
            >
              What to Expect on Your First Visit
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-[#0B4D6E]/10 shadow-[0_2px_16px_rgba(11,77,110,0.05)]"
                      : "bg-white/70 border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 cursor-pointer text-left"
                  >
                    <span
                      className="text-[#1a3a4a] text-[14px]"
                      style={{ fontWeight: 500 }}
                    >
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown
                        size={16}
                        strokeWidth={1.5}
                        className={
                          isOpen
                            ? "text-[#0FACA3]"
                            : "text-gray-300"
                        }
                      />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <div className="border-t border-gray-100 pt-4">
                            <p
                              className="text-gray-500 text-[13.5px]"
                              style={{ lineHeight: 1.7 }}
                            >
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#041E2D] to-[#0B4D6E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(15,172,163,0.12),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-white mb-4"
              style={{
                fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                fontWeight: 600,
              }}
            >
              Begin Your Structured Recovery Journey Today
            </h2>
            <p
              className="text-white/50 text-[14.5px] mb-8 max-w-lg mx-auto"
              style={{ lineHeight: 1.75 }}
            >
              Your health deserves clarity, precision, and measurable progress.
              Take the first step with a comprehensive consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-[#0FACA3] text-white rounded-full text-[14px] hover:bg-[#0d9a92] transition-all hover:shadow-lg hover:shadow-[#0FACA3]/25"
                style={{ fontWeight: 500 }}
              >
                Book Consultation
              </Link>
              <a
                href="tel:+917997592222"
                className="px-7 py-3.5 border border-white/20 text-white rounded-full text-[14px] hover:bg-white/10 transition-all inline-flex items-center gap-2"
              >
                <Phone size={15} strokeWidth={1.5} /> Contact Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}