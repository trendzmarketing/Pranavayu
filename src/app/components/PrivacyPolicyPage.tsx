import { motion } from "motion/react";
import { Link } from "react-router";
import { Shield, ArrowRight } from "lucide-react";
import { useSEO } from "../hooks/useSEO";

const sections = [
  {
    title: "1. Introduction",
    content: `Pranavayu Rehabilitation Center ("Pranavayu", "we", "our", or "us") is committed to protecting the privacy, confidentiality, and security of personal and medical information of patients, website visitors, and users.

This Privacy Policy explains how we collect, use, disclose, store, and protect personal data in compliance with:`,
    list: [
      "The Information Technology Act, 2000 (India)",
      "SPDI Rules, 2011",
      "Digital Personal Data Protection Act, 2023 (India)",
      "General Data Protection Regulation (GDPR) for international users",
      "International healthcare data protection best practices",
    ],
    after: "By using our website or services, you agree to the terms outlined in this policy.",
  },
  {
    title: "2. Information We Collect",
    content: "We may collect the following categories of information:",
    subsections: [
      {
        subtitle: "A. Personal Identification Information",
        list: [
          "Full name",
          "Phone number",
          "Email address",
          "Residential address",
          "Date of birth",
          "Identification documents (if required for medical records)",
        ],
      },
      {
        subtitle: "B. Health & Medical Information (Sensitive Data)",
        list: [
          "Medical history",
          "Diagnostic reports",
          "Treatment plans",
          "Clinical notes",
          "Therapy records",
          "Surgical history",
        ],
      },
      {
        subtitle: "C. Technical & Website Data",
        list: [
          "IP address",
          "Browser type",
          "Device information",
          "Cookies and analytics data",
        ],
      },
    ],
    after: "Health data is treated as Sensitive Personal Data and is protected under applicable laws.",
  },
  {
    title: "3. Purpose of Data Collection",
    content: "We collect personal data for:",
    list: [
      "Appointment scheduling",
      "Medical consultation and treatment",
      "Rehabilitation program design",
      "Diagnostic and clinical documentation",
      "Billing and administrative purposes",
      "Website improvement and analytics",
      "Legal and regulatory compliance",
    ],
    after: "We do not sell, trade, or rent personal medical data.",
  },
  {
    title: "4. Consent",
    content:
      "By submitting your information through our website, WhatsApp, phone, or in-person consultation, you provide explicit consent for:",
    list: [
      "Collection of personal and medical data",
      "Storage and processing for treatment purposes",
      "Communication related to appointments and services",
    ],
    after:
      "International patients consent to cross-border data transfer when required. You may withdraw consent in writing, subject to medical record retention laws.",
  },
  {
    title: "5. Data Sharing & Disclosure",
    content: "We may share information only with:",
    list: [
      "Authorized medical professionals involved in treatment",
      "Diagnostic laboratories",
      "Insurance providers (where applicable)",
      "Government authorities (if legally required)",
      "Technology vendors under strict confidentiality agreements",
    ],
    after: "We do not share data for marketing without explicit consent.",
  },
  {
    title: "6. International Data Transfers",
    content: "For international patients, data may be processed in India. We ensure:",
    list: [
      "Adequate safeguards",
      "Secure transmission protocols",
      "GDPR-aligned protections",
    ],
  },
  {
    title: "7. Data Retention",
    content: "Medical records are retained in accordance with:",
    list: [
      "National Medical Commission guidelines",
      "Applicable Indian medical record laws",
    ],
    after: "Non-medical website data may be retained for analytics and security monitoring.",
  },
  {
    title: "8. Data Security Measures",
    content: "We implement:",
    list: [
      "Encrypted digital storage",
      "Restricted access controls",
      "Role-based data permissions",
      "Secure communication systems",
      "Periodic cybersecurity assessments",
    ],
    after: "While we follow industry standards, no system is completely immune from risk.",
  },
  {
    title: "9. Patient Rights",
    content: "Under applicable laws, you may:",
    list: [
      "Request access to your data",
      "Request correction of inaccurate information",
      "Withdraw consent (subject to legal retention requirements)",
      "Request deletion where legally permissible",
      "Lodge complaints with appropriate authorities",
    ],
    after: "Requests may be made via email: pranavayurehabilitation@gmail.com",
  },
  {
    title: "10. Cookies & Website Tracking",
    content: "Our website may use cookies to:",
    list: [
      "Improve functionality",
      "Analyze visitor behavior",
      "Enhance user experience",
    ],
    after: "You may disable cookies through browser settings.",
  },
  {
    title: "11. Third-Party Links",
    content:
      "Our website may contain links to external websites. We are not responsible for their privacy practices.",
  },
  {
    title: "12. Policy Updates",
    content:
      "We reserve the right to modify this Privacy Policy. Updates will be posted on this page with a revised effective date.",
  },
  {
    title: "13. Contact Information",
    content: `Pranavayu Rehabilitation Center
14-1-128, 1st Floor, Nowroji Road
Maharanipeta, Visakhapatnam – 530002
Phone: +91 79975 92222 / +91 79975 99222
Email: pranavayurehabilitation@gmail.com`,
  },
];

export function PrivacyPolicyPage() {
  useSEO({
    title: "Privacy Policy | Pranavayu Rehabilitation Center",
    description:
      "Read Pranavayu's privacy policy to understand how we collect, use, and protect your personal and medical information on our rehabilitation services website.",
    keywords: "Privacy Policy Pranavayu, Data Protection Rehabilitation Center",
    canonicalPath: "/privacy",
  });
  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-36 pb-14 bg-[#062A3E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,172,163,0.08),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-5 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/5">
              <Shield size={12} strokeWidth={1.5} className="text-[#5CE0D8]" />
              <span className="text-white/60 text-[11px] tracking-[0.15em] uppercase">
                Legal
              </span>
            </div>
            <h1
              className="text-white mb-3"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600, lineHeight: 1.2 }}
            >
              Privacy Policy
            </h1>
            <p className="text-white/40 text-[14px]">
              Effective Date: 2026-03-08 &nbsp;·&nbsp; Last Updated: 2026-03-08
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
                {section.subsections &&
                  section.subsections.map((sub) => (
                    <div key={sub.subtitle} className="mt-4">
                      <h3
                        className="text-[#1a3a4a] mb-2 text-[14px]"
                        style={{ fontWeight: 600 }}
                      >
                        {sub.subtitle}
                      </h3>
                      <ul className="space-y-1.5">
                        {sub.list.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-gray-500 text-[14px]">
                            <div className="w-1.5 h-1.5 bg-[#0FACA3] rounded-full shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
              to="/terms"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-600 rounded-full text-[13px] hover:border-[#0B4D6E]/30 hover:text-[#0B4D6E] transition-all"
              style={{ fontWeight: 500 }}
            >
              Terms of Service
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