import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const images = [
  {
    src: "https://images.unsplash.com/photo-1770775776141-6b3ac7ef9dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpY2FsJTIwZmFjaWxpdHklMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI4NzU3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    label: "Consultation Suite",
    span: "col-span-2 row-span-2",
    height: "h-[380px]",
  },
  {
    src: "https://images.unsplash.com/photo-1758654859927-74a68e4e0bdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeXBlcmJhcmljJTIwb3h5Z2VuJTIwdGhlcmFweSUyMGNoYW1iZXIlMjBtZWRpY2FsfGVufDF8fHx8MTc3Mjg3OTM2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    label: "HBOT Chamber",
    span: "",
    height: "h-[180px]",
  },
  {
    src: "https://images.unsplash.com/photo-1580281657702-257584239a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMHJlaGFiaWxpdGF0aW9uJTIwZXF1aXBtZW50fGVufDF8fHx8MTc3Mjg3OTM2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    label: "Rehab Equipment",
    span: "",
    height: "h-[180px]",
  },
  {
    src: "https://images.unsplash.com/photo-1715111641688-ea364ec391f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaWFjJTIwcmVoYWJpbGl0YXRpb24lMjBleGVyY2lzZXxlbnwxfHx8fDE3NzI3NzI5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    label: "Cardiac Rehab",
    span: "",
    height: "h-[180px]",
  },
  {
    src: "https://images.unsplash.com/photo-1637714409323-d5e6e9731252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVhZG1pbGwlMjByZWhhYmlsaXRhdGlvbiUyMHdhbGtpbmclMjB0aGVyYXB5fGVufDF8fHx8MTc3Mjg3OTM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    label: "Gait Training",
    span: "",
    height: "h-[180px]",
  },
];

export function FacilitySection() {
  return (
    <section id="facility" className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#f6f9fc]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-4">
            Our Facility
          </p>
          <h2
            className="text-[#1a3a4a]"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", fontWeight: 600 }}
          >
            World-Class Rehabilitation Facility
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative group rounded-2xl overflow-hidden ${img.span} ${img.height}`}
            >
              <ImageWithFallback
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[13px] bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
