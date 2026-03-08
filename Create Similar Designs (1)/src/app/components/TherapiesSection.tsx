import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const therapies = [
  {
    title: "Hyperbaric Oxygen Therapy",
    desc: "Pressurized pure oxygen accelerates tissue repair, reduces inflammation, and enhances immune function at the cellular level.",
    image: "https://images.unsplash.com/photo-1758654859927-74a68e4e0bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXBlcmJhcmljJTIwb3h5Z2VuJTIwdGhlcmFweSUyMGNoYW1iZXIlMjBtZWRpY2FsfGVufDF8fHx8MTc3Mjg3OTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    id: "hbot",
    tag: "Oxygen-Based",
  },
  {
    title: "Whole Body Cryotherapy",
    desc: "Controlled cold exposure triggers anti-inflammatory responses, reduces pain, and accelerates post-surgical recovery.",
    image: "https://images.unsplash.com/photo-1620924721217-93fd71e354ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xkJTIwdGhlcmFweSUyMHdlbGxuZXNzJTIwc3BhfGVufDF8fHx8MTc3Mjg3OTk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    id: "cryotherapy",
    tag: "Recovery",
  },
  {
    title: "Shockwave Therapy",
    desc: "Acoustic wave technology stimulates blood flow and cellular regeneration to treat chronic pain and musculoskeletal conditions.",
    image: "https://images.unsplash.com/photo-1772122028843-9139d23af4fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9ja3dhdmUlMjB0aGVyYXB5JTIwcGh5c2ljYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzcyODc5OTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    id: "shockwave",
    tag: "Regenerative",
  },
  {
    title: "Hydrogen Inhalation",
    desc: "Molecular hydrogen acts as a powerful antioxidant, neutralizing harmful free radicals and reducing oxidative stress.",
    image: "https://images.unsplash.com/photo-1743767587847-08c42b31cdec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwb3h5Z2VuJTIwdGhlcmFweSUyMGJyZWF0aGluZ3xlbnwxfHx8fDE3NzI4Nzk5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    id: "hydrogen",
    tag: "Oxygen-Based",
  },
  {
    title: "Zero Gravity Gait Training",
    desc: "Body weight support technology enables safe, pain-free mobility training for patients recovering from surgery or neurological events.",
    image: "https://images.unsplash.com/photo-1637714409323-d5e6e9731252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhZG1pbGwlMjByZWhhYmlsaXRhdGlvbiUyMGdhaXQlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NzI4Nzk5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    id: "gait",
    tag: "Recovery",
  },
];

export function TherapiesSection() {
  return (
    <section id="therapies" className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#F8FAFB] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0FACA3]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B4D6E]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#0FACA3] text-[11px] tracking-[0.2em] uppercase mb-4">
            Advanced Therapies
          </p>
          <h2
            className="text-[#1a3a4a] mb-4"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", fontWeight: 600 }}
          >
            Cutting-Edge Treatment Modalities
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto" style={{ fontSize: "16px", lineHeight: 1.6 }}>
            Internationally recognized therapeutic technologies, each backed by clinical evidence and tailored to your recovery.
          </p>
        </motion.div>

        {/* Top row — 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {therapies.slice(0, 3).map((therapy, i) => (
            <TherapyCard key={therapy.id} therapy={therapy} index={i} />
          ))}
        </div>

        {/* Bottom row — 2 cards, centered */}
        <div className="grid sm:grid-cols-2 gap-6 sm:max-w-[calc(66.666%+0.75rem)] mx-auto">
          {therapies.slice(3).map((therapy, i) => (
            <TherapyCard key={therapy.id} therapy={therapy} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TherapyCard({ therapy, index }: { therapy: (typeof therapies)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
    >
      <Link
        to={`/therapies/${therapy.id}`}
        className="group block bg-white rounded-[20px] overflow-hidden border border-gray-100 hover:border-[#0FACA3]/20 hover:shadow-[0_8px_40px_rgba(15,172,163,0.08)] transition-all duration-400 hover:-translate-y-[2px]"
      >
        {/* Image with 4:3 ratio */}
        <div className="aspect-[4/3] overflow-hidden relative">
          <ImageWithFallback
            src={therapy.image}
            alt={therapy.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Bottom dark gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-400" />
          {/* Pill badge */}
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#0B4D6E] text-[10px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full" style={{ fontWeight: 500 }}>
            {therapy.tag}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className="text-[#1a3a4a] mb-2"
            style={{ fontSize: "16px", fontWeight: 600 }}
          >
            {therapy.title}
          </h3>
          <p className="text-gray-400 mb-5" style={{ fontSize: "14px", lineHeight: 1.7 }}>
            {therapy.desc}
          </p>
          <span
            className="inline-flex items-center gap-1.5 text-[#0FACA3] text-[13px] group-hover:gap-2.5 transition-all duration-200"
            style={{ fontWeight: 500 }}
          >
            Learn More
            <ArrowRight size={14} strokeWidth={1.5} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}