import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const doctorImg = "/images/doctor/dr-harivadan-hero.webp";

const highlights = [
  "Minimally Invasive Cardiac Surgery",
  "Beating Heart Revascularization",
  "Advanced Vascular Procedures",
];

export function DoctorSection() {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#f6f9fc]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-br from-[#0FACA3]/10 to-[#0B4D6E]/10 rounded-[1.75rem]" />
              <div className="rounded-2xl overflow-hidden relative">
                <ImageWithFallback
                  src={doctorImg}
                  alt="Dr. Harivadan Lukka"
                  className="relative w-[340px] h-[430px] object-cover z-10 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* Soft drop shadow frame */}
                <div className="absolute inset-0 z-20 rounded-2xl shadow-[inset_0_-40px_40px_-20px_rgba(6,42,62,0.15)]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-4">
              Lead Specialist
            </p>
            <h2
              className="text-[#1a3a4a] mb-2"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", fontWeight: 600, lineHeight: 1.25 }}
            >
              Dr. Harivadan Lukka
            </h2>
            {/* Credential pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["MBBS", "MS", "M.Ch"].map((c) => (
                <span key={c} className="px-3 py-1 rounded-full bg-[#0FACA3]/8 text-[#0B4D6E] text-[11px] tracking-wide" style={{ fontWeight: 500 }}>
                  {c}
                </span>
              ))}
            </div>
            <p className="text-gray-400 mb-6 tracking-wide" style={{ fontSize: "14px" }}>
              Cardiothoracic & Vascular Surgeon
            </p>

            <p className="text-gray-500 mb-6" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              Internationally trained surgeon with 15+ years of expertise in cardiac,
              vascular and minimally invasive procedures — now leading advanced
              rehabilitation protocols in Visakhapatnam.
            </p>

            <div className="space-y-2.5 mb-8">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-[#0FACA3] rounded-full shrink-0" />
                  <span className="text-gray-600" style={{ fontSize: "15px" }}>{h}</span>
                </div>
              ))}
            </div>

            <Link
              to="/doctor"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0B4D6E] text-white rounded-full text-[14px] hover:bg-[#093d58] transition-all duration-200 hover:shadow-lg hover:shadow-[#0B4D6E]/20 hover:-translate-y-[1px]"
            >
              View Full Profile
              <ArrowRight size={15} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
