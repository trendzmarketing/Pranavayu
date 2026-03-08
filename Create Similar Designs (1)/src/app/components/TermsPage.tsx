import { motion } from "motion/react";
import { Link } from "react-router";
import { FileText, ArrowRight } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using our website or services, you agree to be bound by these Terms of Service. If you do not agree, please refrain from using our services.",
  },
  {
    title: "2. Medical Disclaimer",
    content: "Information provided on this website:",
    list: [
      "Is for educational purposes only",
      "Does not replace professional medical advice",
      "Should not be used for self-diagnosis",
    ],
    after:
      "Medical decisions must be made in consultation with a qualified healthcare professional.",
  },
  {
    title: "3. Appointment & Consultation Terms",
    content: "",
    list: [
      "Appointments are subject to availability",
      "Accurate medical history must be disclosed",
      "Emergency conditions must seek immediate hospital care",
    ],
    after:
      "Pranavayu is a rehabilitation center and does not function as an emergency department.",
  },
  {
    title: "4. Payment & Billing",
    content: "",
    list: [
      "Consultation and therapy fees must be paid as per agreed schedule",
      "Refund policies, if applicable, will be communicated at the time of enrollment",
      "International patients must comply with advance payment requirements",
    ],
  },
  {
    title: "5. Limitation of Liability",
    content: "While we strive to deliver the highest medical standards:",
    list: [
      "Outcomes may vary based on individual health conditions",
      "No specific treatment result is guaranteed",
      "Pranavayu shall not be liable for indirect or consequential damages",
    ],
    after: "This does not limit liability under applicable law.",
  },
  {
    title: "6. Intellectual Property",
    content: "All website content including:",
    list: ["Text", "Graphics", "Logos", "Program materials"],
    after:
      "Is the property of Pranavayu and may not be reproduced without written permission.",
  },
  {
    title: "7. User Conduct",
    content: "Users must not:",
    list: [
      "Provide false medical information",
      "Attempt to breach website security",
      "Misuse contact forms",
      "Engage in defamatory or unlawful behavior",
    ],
  },
  {
    title: "8. Teleconsultation Terms",
    content: "If applicable:",
    list: [
      "Teleconsultation is subject to patient consent",
      "Technical failures may affect service",
      "Cross-border regulations may apply",
    ],
  },
  {
    title: "9. Governing Law",
    content:
      "These terms are governed by the Laws of India. Jurisdiction: Visakhapatnam, Andhra Pradesh.",
  },
  {
    title: "10. Changes to Terms",
    content:
      "We reserve the right to modify these Terms. Continued use constitutes acceptance.",
  },
  {
    title: "11. Contact",
    content: `For legal queries:
Email: pranavayurehabilitation@gmail.com

Pranavayu Rehabilitation Center
14-1-128, 1st Floor, Nowroji Road
Maharanipeta, Visakhapatnam – 530002
Phone: +91 79975 92222 / +91 79975 99222`,
  },
];

export function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-36 pb-14 bg-[#062A3E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,172,163,0.08),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-5 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/5">
              <FileText size={12} strokeWidth={1.5} className="text-[#5CE0D8]" />
              <span className="text-white/60 text-[11px] tracking-[0.15em] uppercase">
                Legal
              </span>
            </div>
            <h1
              className="text-white mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, lineHeight: 1.2 }}
            >
              Terms of Service
            </h1>
            <p className="text-white/40 text-[14px]">
              Effective Date: 2026-03-08
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, si) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: si * 0.03 }}
              >
                <h2
                  className="text-[#1a3a4a] mb-3"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  {section.title}
                </h2>
                {section.content && (
                  <p
                    className="text-gray-500 text-[14px] whitespace-pre-line"
                    style={{ lineHeight: 1.8 }}
                  >
                    {section.content}
                  </p>
                )}
                {section.list && (
                  <ul className="mt-3 space-y-1.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-gray-500 text-[14px]">
                        <div className="w-1.5 h-1.5 bg-[#0FACA3] rounded-full shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.after && (
                  <p
                    className="text-gray-400 text-[13px] mt-3"
                    style={{ lineHeight: 1.7 }}
                  >
                    {section.after}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="mt-14 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
            <Link
              to="/privacy"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-600 rounded-full text-[13px] hover:border-[#0B4D6E]/30 hover:text-[#0B4D6E] transition-all"
              style={{ fontWeight: 500 }}
            >
              Privacy Policy
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0FACA3] text-white rounded-full text-[13px] hover:bg-[#0d9990] transition-all"
              style={{ fontWeight: 500 }}
            >
              Contact Us
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}