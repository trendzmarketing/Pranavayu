import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#062A3E] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(15,172,163,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 600, lineHeight: 1.25 }}
          >
            Begin Your Journey Toward Better Health
          </h2>
          <p className="text-white/45 max-w-lg mx-auto mb-6" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            Whether you are recovering from heart disease, surgery, respiratory illness, or seeking preventive wellness, Pranavayu offers comprehensive programs designed to help you regain strength and achieve long-term health.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-[13px]">
            <span className="text-white/50">❤️ Stronger heart health</span>
            <span className="text-white/50">💨 Better breathing capacity</span>
            <span className="text-white/50">💪 Improved physical fitness</span>
            <span className="text-white/50">🌿 Long-term wellness</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#0FACA3] text-white rounded-full hover:bg-[#0d9990] transition-all duration-300 text-[15px] hover:shadow-lg hover:shadow-[#0FACA3]/25 hover:-translate-y-[1px]"
            >
              Book Consultation
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
            <a
              href="https://wa.me/917997592222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#20bd59] transition-all duration-300 text-[15px] hover:shadow-lg hover:shadow-[#25D366]/25 hover:-translate-y-[1px]"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
