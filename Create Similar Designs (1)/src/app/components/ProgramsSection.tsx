import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, Wind, Brain, Syringe, Droplets, Activity, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Heart,
    title: "Cardiac Rehabilitation",
    slug: "cardiac-rehabilitation",
    desc: "Safe, guided exercise and lifestyle support to help your heart recover after a heart attack, surgery, or other cardiac events.",
  },
  {
    icon: Wind,
    title: "Pulmonary Rehabilitation",
    slug: "pulmonary-rehabilitation",
    desc: "Breathing retraining and lung strengthening programs to help you breathe easier and feel more energetic every day.",
  },
  {
    icon: Brain,
    title: "Neurovascular Recovery",
    slug: "neurovascular-recovery",
    desc: "Step-by-step recovery programs to restore movement, balance, and independence after stroke or nerve injury.",
  },
  {
    icon: Syringe,
    title: "Post-Surgical Recovery",
    slug: "post-surgical-recovery",
    desc: "Structured healing programs to help you recover faster and avoid complications after heart, lung, or vascular surgery.",
  },
  {
    icon: Droplets,
    title: "Long COVID Recovery",
    slug: "long-covid-recovery",
    desc: "Specialized support for persistent fatigue, breathlessness, brain fog, and other lingering effects of COVID.",
  },
  {
    icon: Activity,
    title: "Preventive Cardio Programs",
    slug: "preventive-cardio",
    desc: "Catch heart risks early with screening, fitness testing, and a personalized plan to keep your heart healthy long-term.",
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#f6f9fc]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-4">
            Our Programs
          </p>
          <h2
            className="text-[#1a3a4a] mb-3"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", fontWeight: 600 }}
          >
            Core Rehabilitation Programs
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto" style={{ fontSize: "16px", lineHeight: 1.6 }}>
            Evidence-based recovery programs designed to restore function, rebuild strength, and reclaim quality of life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group"
            >
              <Link
                to={`/programs/${program.slug}`}
                className="block bg-white rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(11,77,110,0.08)] transition-all duration-300 border border-transparent hover:border-[#0B4D6E]/10 hover:-translate-y-[2px] h-full"
              >
                <div className="flex h-full">
                  {/* Left accent line */}
                  <div className="w-[3px] bg-[#0FACA3]/30 group-hover:bg-[#0FACA3] transition-colors duration-300 shrink-0 rounded-l-2xl" />

                  <div className="p-7 lg:p-8 flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-[#0FACA3]/8 flex items-center justify-center mb-5 group-hover:bg-[#0FACA3]/12 transition-colors duration-300">
                      <program.icon size={20} className="text-[#0FACA3]" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="text-[#1a3a4a] mb-2"
                      style={{ fontSize: "16px", fontWeight: 600 }}
                    >
                      {program.title}
                    </h3>
                    <p className="text-gray-400 mb-5 flex-1" style={{ fontSize: "14px", lineHeight: 1.7 }}>
                      {program.desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 text-[#0B4D6E] text-[13px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span style={{ fontWeight: 500 }}>Learn more</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Programs link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#0B4D6E]/15 text-[#0B4D6E] rounded-full text-[14px] hover:bg-[#0B4D6E]/5 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-300"
            style={{ fontWeight: 500 }}
          >
            View All Programs
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
