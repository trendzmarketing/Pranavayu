import { Phone, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/917997592222"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-6 w-13 h-13 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/25 z-50 hover:scale-110 transition-transform max-lg:bottom-[4.5rem]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle size={22} className="text-white" />
      </motion.a>

      {/* Call */}
      <motion.a
        href="tel:+917997592222"
        className="fixed bottom-6 left-6 lg:bottom-6 w-13 h-13 bg-[#0B4D6E] rounded-full flex items-center justify-center shadow-lg shadow-[#0B4D6E]/25 z-50 hover:scale-110 transition-transform max-lg:bottom-[4.5rem]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Phone size={22} className="text-white" />
      </motion.a>

      {/* Mobile sticky bottom bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-100 z-40 px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))]">
        <a
          href="/contact"
          className="block w-full py-3 bg-[#0B4D6E] text-white rounded-full text-center text-[14px] shadow-lg shadow-[#0B4D6E]/15"
        >
          Book Consultation
        </a>
      </div>
    </>
  );
}