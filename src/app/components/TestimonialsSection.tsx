import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    condition: "Post-CABG Recovery",
    country: "India",
    text: "After my bypass surgery, I was terrified about recovery. Dr. Lukka's team designed a complete cardiac rehabilitation program that got me back to normal life in 8 weeks. The HBOT sessions were a game-changer for my healing.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    condition: "COPD Management",
    country: "India",
    text: "Living with COPD was suffocating — literally and emotionally. The pulmonary rehabilitation program at Pranavayu taught me breathing techniques and exercises that drastically improved my quality of life.",
    rating: 5,
  },
  {
    name: "James Williams",
    condition: "Post-Bypass Rehabilitation",
    country: "United Kingdom",
    text: "After my bypass surgery in London, I chose Pranavayu for rehabilitation. The HBOT and cardiac rehab program were remarkable — and at a fraction of UK costs. Dr. Lukka's approach is truly world-class.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    condition: "Post-Valve Repair",
    country: "India",
    text: "Dr. Lukka performed my valve repair and then personally supervised my rehabilitation. Having the surgeon and rehab specialist be the same person gave me incredible confidence in my recovery.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-4">
            Patient Stories
          </p>
          <h2
            className="text-[#1a3a4a]"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", fontWeight: 600 }}
          >
            What Our Patients Say
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#f6f9fc] rounded-2xl p-8 lg:p-10 relative"
            >
              <Quote size={36} className="text-[#0FACA3]/8 absolute top-6 left-6" strokeWidth={1.5} />

              <div className="flex gap-0.5 mb-5 justify-center">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 text-center mb-6 relative z-10" style={{ fontSize: "16px", lineHeight: 1.8 }}>
                "{testimonials[current].text}"
              </p>

              <div className="text-center">
                <div className="text-[#1a3a4a]" style={{ fontSize: "15px", fontWeight: 600 }}>
                  {testimonials[current].name}
                </div>
                <div className="text-gray-400 text-[13px] mt-0.5">
                  {testimonials[current].condition}
                </div>
                <div className="text-[#0FACA3] text-[12px] mt-1">
                  {testimonials[current].country}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0B4D6E] hover:text-white hover:border-[#0B4D6E] transition-all duration-200 text-gray-400 hover:-translate-y-[1px]"
            >
              <ChevronLeft size={16} strokeWidth={1.5} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${
                    i === current ? "bg-[#0FACA3] w-6" : "bg-gray-300 w-1.5"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#0B4D6E] hover:text-white hover:border-[#0B4D6E] transition-all duration-200 text-gray-400 hover:-translate-y-[1px]"
            >
              <ChevronRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
