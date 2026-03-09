import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Heart,
  Wind,
  Brain,
  Syringe,
  Droplets,
  Activity,
  ArrowRight,
  Phone,
  Microscope,
  Stethoscope,
  BookOpen,
  ClipboardList,
  MonitorCheck,
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { organizationSchema, buildBreadcrumbSchema } from "../seo/schemas";

const programs = [
  {
    icon: Heart,
    slug: "cardiac-rehabilitation",
    title: "Cardiac Rehabilitation",
    tagline: "Strengthening the Heart. Restoring Confidence. Preventing Recurrence.",
    forList: ["Heart attack", "Bypass surgery", "Angioplasty", "Valve procedures", "Chronic heart disease"],
    includes: [
      "Cardiac risk profiling",
      "Supervised heart-safe exercise",
      "Oxygen optimization therapy",
      "Circulation enhancement protocols",
      "Lifestyle & stress management",
    ],
    outcomes: [
      "Improved cardiac endurance",
      "Reduced future cardiac risk",
      "Better blood pressure control",
      "Enhanced quality of life",
    ],
    idealFor: "Post-surgery patients, individuals with high cardiovascular risk, and those seeking structured heart recovery.",
  },
  {
    icon: Wind,
    slug: "pulmonary-rehabilitation",
    title: "Pulmonary Rehabilitation",
    tagline: "Breathe Better. Move Better. Live Stronger.",
    forList: ["COPD", "Asthma", "Chronic breathlessness", "Post-COVID lung weakness", "Recurrent respiratory fatigue"],
    includes: [
      "Breathing retraining techniques",
      "Respiratory muscle strengthening",
      "Oxygen efficiency improvement",
      "Stamina rebuilding sessions",
      "Lung function monitoring",
    ],
    outcomes: ["Reduced breathlessness", "Improved oxygen saturation", "Increased stamina", "Better sleep quality"],
    idealFor: "Individuals with chronic respiratory conditions seeking structured lung recovery.",
  },
  {
    icon: Brain,
    slug: "neurovascular-recovery",
    title: "Neurovascular Recovery",
    tagline: "Rebuilding Brain-Body Coordination Through Neuroplasticity.",
    forList: ["Stroke", "Peripheral neuropathy", "Nerve injury", "Balance disorders", "Vascular insufficiency"],
    includes: [
      "Guided neural activation therapy",
      "Balance and gait retraining",
      "Vascular circulation enhancement",
      "Oxygen-based neurological support",
      "Progressive motor recovery exercises",
    ],
    outcomes: ["Improved balance", "Reduced numbness", "Better coordination", "Increased independence"],
    idealFor: "Stroke survivors, neuropathy patients, and anyone recovering from nerve or vascular injury.",
  },
  {
    icon: Syringe,
    slug: "post-surgical-recovery",
    title: "Post-Surgical Recovery",
    tagline: "Accelerating Healing After Major Procedures.",
    forList: ["Cardiac surgery", "Pulmonary surgery", "Vascular interventions", "Major hospitalization"],
    includes: [
      "Safe mobility restoration",
      "Circulatory activation",
      "Lung re-expansion training",
      "Scar tissue management",
      "Strength rebuilding",
    ],
    outcomes: ["Faster healing", "Reduced complications", "Improved recovery confidence", "Lower hospital readmission risk"],
    idealFor: "Patients recovering from cardiac, pulmonary, or vascular surgical procedures.",
  },
  {
    icon: Droplets,
    slug: "long-covid-recovery",
    title: "Long COVID Recovery",
    tagline: "Structured Recovery for Persistent Post-COVID Symptoms.",
    forList: ["Chronic fatigue", "Brain fog", "Breathlessness", "Palpitations", "Reduced stamina"],
    includes: [
      "Cardiopulmonary assessment",
      "Oxygen therapy support",
      "Fatigue management protocols",
      "Gradual stamina reconditioning",
      "Cognitive clarity exercises",
    ],
    outcomes: ["Increased energy", "Improved breathing", "Mental clarity", "Restored daily functioning"],
    idealFor: "Anyone experiencing persistent symptoms months after COVID recovery.",
  },
  {
    icon: Activity,
    slug: "preventive-cardio",
    title: "Preventive Cardio & Vitality",
    tagline: "Proactive Protection Before Disease Progresses.",
    forList: [
      "Age 35+ professionals",
      "Family history of heart disease",
      "Sedentary lifestyle",
      "Corporate executives",
      "Health-conscious individuals",
    ],
    includes: [
      "Cardiovascular risk assessment",
      "Oxygen capacity testing",
      "Stress response evaluation",
      "Structured conditioning program",
      "Lifestyle optimization guidance",
    ],
    outcomes: ["Reduced long-term cardiac risk", "Better stamina", "Optimized heart performance", "Peace of mind"],
    idealFor: "Professionals, fitness enthusiasts, and anyone wanting to stay ahead of heart disease.",
  },
];

const differentiators = [
  {
    icon: Microscope,
    title: "Advanced Oxygen Therapies",
    desc: "HBOT and oxygen conditioning protocols that go beyond conventional rehabilitation.",
  },
  {
    icon: Stethoscope,
    title: "Cardiothoracic Surgical Insight",
    desc: "Programs designed with direct surgical knowledge for safer, more effective recovery.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Based Rehabilitation",
    desc: "Every protocol is grounded in published clinical research and measurable outcomes.",
  },
  {
    icon: ClipboardList,
    title: "Structured Measurable Protocols",
    desc: "Clear milestones and progress tracking — no guesswork, just measured improvement.",
  },
  {
    icon: MonitorCheck,
    title: "Personalized Monitoring Systems",
    desc: "Real-time vitals tracking and regular re-evaluations to adapt your program as you improve.",
  },
];

export function ProgramsOverview() {
  useSEO({
    title: "Rehabilitation Programs | Cardiac, Pulmonary & Neurovascular Recovery | Pranavayu",
    description:
      "Explore Pranavayu's evidence-based rehabilitation programs in Visakhapatnam — Cardiac, Pulmonary, Neurovascular, Post-Surgical, Long COVID & Preventive programs led by Dr. Harivadan Lukka.",
    canonicalPath: "/programs",
    schema: [
      organizationSchema,
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Our Programs", url: "/programs" },
      ]),
    ],
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 lg:pt-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041E2D] via-[#0B4D6E] to-[#0a3c55]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,172,163,0.15),transparent_60%)]" />
        {/* Subtle animated dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#0FACA3]/8"
              style={{
                width: 160 + i * 60,
                height: 160 + i * 60,
                left: `${10 + i * 18}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [0, -12, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[#0FACA3] text-[11px] tracking-[0.2em] uppercase mb-5">Explore Our Programs</p>
            <h1 className="text-white mb-5" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 600 }}>
              Precision-Guided Recovery.
              <br />
              <span className="text-white/70">Structured for Real Results.</span>
            </h1>
            <p
              className="text-white/50 max-w-2xl mx-auto text-[15px] mb-4"
              style={{ lineHeight: 1.8 }}
            >
              Under the leadership of Dr. Harivadan Lukka, every program integrates surgical insight,
              cardiopulmonary science, and advanced oxygen-based therapies to deliver optimized recovery outcomes.
            </p>
            <p className="text-white/35 text-[13px]">
              Each program is personalized after a detailed evaluation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Flow Indicator */}
      <section className="bg-white py-12 border-b border-gray-100 overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="relative">
            {/* Animated Flow Line */}
            <div className="absolute left-[5%] right-[5%] top-1/2 -translate-y-1/2 h-[3px] bg-[#0B4D6E]/5 rounded-full overflow-hidden hidden lg:block">
              <motion.div
                className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#0FACA3] to-transparent opacity-80"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div
              className="flex flex-nowrap items-center justify-start lg:justify-between gap-4 lg:gap-0 overflow-x-auto pb-6 pt-2 px-2 -mx-2 sm:pb-2 sm:pt-0 snap-x relative z-10"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`.hide-scrollbar::-webkit-scrollbar { display: none; }`}</style>
              {["Assessment", "Structured Plan", "Monitored Sessions", "Measurable Progress", "Re-evaluation"].map(
                (step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex-shrink-0 snap-center"
                  >
                    <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white shadow-sm shadow-[#0B4D6E]/5 border border-[#0FACA3]/15 relative">
                      <div className="w-6 h-6 rounded-full bg-[#0FACA3]/10 flex items-center justify-center shrink-0">
                        <span className="text-[#0FACA3] text-[11px]" style={{ fontWeight: 700 }}>
                          {i + 1}
                        </span>
                      </div>
                      <span className="text-[#1a3a4a] text-[13px] whitespace-nowrap pr-1" style={{ fontWeight: 600 }}>
                        {step}
                      </span>
                    </div>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="py-16 lg:py-24 bg-[#f6f9fc]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, i) => (
              <motion.div
                key={program.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-[#0B4D6E]/12 hover:shadow-[0_8px_32px_rgba(11,77,110,0.08)] transition-all duration-400 overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-6 lg:p-7">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0FACA3]/8 flex items-center justify-center shrink-0 group-hover:bg-[#0FACA3]/12 transition-colors duration-300">
                      <program.icon size={22} className="text-[#0FACA3]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[#1a3a4a] mb-1" style={{ fontSize: "17px", fontWeight: 600 }}>
                        {program.title}
                      </h3>
                      <p className="text-[#0B4D6E]/60 text-[13px]" style={{ fontWeight: 500 }}>
                        {program.tagline}
                      </p>
                    </div>
                  </div>

                  {/* For / Includes / Outcomes - Compact */}
                  <div className="space-y-4">
                    {/* Designed For */}
                    <div>
                      <p className="text-[#1a3a4a] text-[11px] tracking-[0.1em] uppercase mb-2" style={{ fontWeight: 600 }}>
                        Designed For
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {program.forList.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 bg-[#0B4D6E]/5 text-[#0B4D6E]/70 rounded-full text-[11.5px]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Includes */}
                    <div>
                      <p className="text-[#1a3a4a] text-[11px] tracking-[0.1em] uppercase mb-2" style={{ fontWeight: 600 }}>
                        Program Includes
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                        {program.includes.map((item) => (
                          <div key={item} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-[#0FACA3] mt-[7px] shrink-0" />
                            <span className="text-gray-500 text-[12.5px]">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <p className="text-[#1a3a4a] text-[11px] tracking-[0.1em] uppercase mb-2" style={{ fontWeight: 600 }}>
                        Expected Outcomes
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {program.outcomes.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 bg-[#0FACA3]/6 text-[#0FACA3] rounded-full text-[11.5px]"
                            style={{ fontWeight: 500 }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <p className="text-gray-400 text-[12px] mt-4 italic" style={{ lineHeight: 1.6 }}>
                    {program.idealFor}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="px-6 lg:px-7 py-4 border-t border-gray-50 bg-gray-50/40 flex items-center justify-between">
                  <Link
                    to={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#0B4D6E] text-[13px] group-hover:gap-2.5 transition-all duration-300"
                    style={{ fontWeight: 500 }}
                  >
                    View Details
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 bg-[#0FACA3] text-white rounded-full text-[12px] hover:bg-[#0d9a92] transition-all opacity-0 group-hover:opacity-100"
                    style={{ fontWeight: 500 }}
                  >
                    Book Assessment
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-16 lg:py-20 bg-[#eaf2f8]">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-3">Why Pranavayu</p>
            <h2
              className="text-[#1a3a4a] mb-3"
              style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 600 }}
            >
              How Our Programs Are Different
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-[14px]" style={{ lineHeight: 1.7 }}>
              Unlike conventional physiotherapy-only centers, Pranavayu integrates advanced therapies
              with surgical expertise for measurable, structured recovery.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-white/80 hover:shadow-[0_4px_20px_rgba(11,77,110,0.06)] transition-all duration-300 text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0B4D6E]/8 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={20} className="text-[#0B4D6E]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[#1a3a4a] mb-2" style={{ fontSize: "13.5px", fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-gray-400 text-[12px]" style={{ lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#041E2D] to-[#0B4D6E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(15,172,163,0.12),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)", fontWeight: 600 }}>
              Begin Your Structured Recovery Today
            </h2>
            <p className="text-white/50 text-[14.5px] mb-8 max-w-lg mx-auto" style={{ lineHeight: 1.75 }}>
              Your health deserves precision, not guesswork. Let our team create a recovery plan built
              specifically for you.
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
                <Phone size={15} strokeWidth={1.5} /> Speak to Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}