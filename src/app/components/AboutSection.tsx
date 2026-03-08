import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Heart, Shield, Brain, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const equipmentImg = "/images/homepage/about-rehabilitation.webp";

const features = [
  { icon: Heart, text: "Advanced Oxygen Therapies" },
  { icon: Shield, text: "Post-Surgical Recovery Protocols" },
  { icon: Brain, text: "Neurovascular Rehabilitation" },
  { icon: Zap, text: "Regenerative & Preventive Programs" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl overflow-hidden group">
              <ImageWithFallback
                src={equipmentImg}
                alt="Therapy session"
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-4">
              About Our Center
            </p>
            <h2
              className="text-[#1a3a4a] mb-5"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", fontWeight: 600, lineHeight: 1.25 }}
            >
              Where Surgical Expertise Meets Structured Rehabilitation
            </h2>
            <p className="text-gray-500 mb-8" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Pranavayu is a specialized rehabilitation institute that combines
              the precision of surgical expertise with cutting-edge recovery science.
              Under the leadership of Dr. Harivadan Lukka, we deliver comprehensive
              recovery programs designed for optimal patient outcomes.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f) => (
                <div
                  key={f.text}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[#f6f9fc] hover:bg-[#0FACA3]/5 transition-all duration-300 group/feat"
                >
                  <f.icon size={16} className="text-[#0FACA3] shrink-0 group-hover/feat:text-[#0d9990] transition-colors" strokeWidth={1.5} />
                  <span className="text-gray-600 text-[14px]">{f.text}</span>
                </div>
              ))}
            </div>

            <Link
              to="/programs"
              className="inline-flex items-center gap-2 text-[#0B4D6E] text-[15px] hover:gap-3 transition-all duration-200"
              style={{ fontWeight: 500 }}
            >
              Explore Our Programs
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
