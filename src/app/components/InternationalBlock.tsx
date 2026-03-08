import { motion } from "motion/react";
import { Link } from "react-router";
import { Video, FileText, UserCheck, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "Teleconsultation",
    desc: "Video consultation with Dr. Lukka before you travel. Get a personalized treatment plan remotely.",
  },
  {
    icon: FileText,
    title: "Visa Support",
    desc: "Official medical visa invitation letters and full guidance through the travel documentation process.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Coordinator",
    desc: "A personal point of contact for airport pickup, accommodation, and care throughout your stay.",
  },
];

export function InternationalBlock() {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[120px] relative overflow-hidden">
      {/* Soft teal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0FACA3]/8 via-[#0B4D6E]/5 to-[#0FACA3]/3" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-4">
            Global Access
          </p>
          <h2
            className="text-[#1a3a4a] mb-3"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", fontWeight: 600 }}
          >
            International Patient Care Program
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto" style={{ fontSize: "16px", lineHeight: 1.6 }}>
            World-class rehabilitation delivered with Indian hospitality — seamless care for patients traveling from abroad.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-7 text-center border border-white/50 hover:shadow-[0_8px_32px_rgba(15,172,163,0.08)] transition-all duration-300 hover:-translate-y-[2px]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0FACA3]/10 flex items-center justify-center mx-auto mb-5">
                <f.icon size={22} className="text-[#0FACA3]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#1a3a4a] mb-2" style={{ fontSize: "16px", fontWeight: 600 }}>
                {f.title}
              </h3>
              <p className="text-gray-400" style={{ fontSize: "14px", lineHeight: 1.7 }}>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/international"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#0B4D6E] text-white rounded-full text-[15px] hover:bg-[#093d58] transition-all duration-200 hover:shadow-lg hover:shadow-[#0B4D6E]/20 hover:-translate-y-[1px]"
          >
            Plan Your Visit
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
