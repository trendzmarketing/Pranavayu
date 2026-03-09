import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router";
import {
  GraduationCap, Award, Globe, Heart, Calendar, Trophy, Stethoscope,
  ArrowRight, BookOpen, Briefcase, MapPin, FlaskConical, Phone,
  Activity, Zap, ShieldCheck
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useSEO } from "../hooks/useSEO";
import { physicianSchema, organizationSchema, buildBreadcrumbSchema } from "../seo/schemas";

const doctorImg = "/images/doctor/dr-harivadan-hero.webp";

/* ── Clinical Expertise Data ── */
const expertiseTabs = [
  {
    id: "cardiac",
    label: "Cardiac Surgery",
    icon: Heart,
    items: [
      "Coronary Artery Bypass Grafting (CABG)",
      "Mitral Valve Replacement",
      "Aortic Valve Replacement",
      "Double Valve Replacement",
      "Minimally Invasive Cardiac Surgery (MICS)",
      "Beating Heart Revascularization",
    ],
  },
  {
    id: "endovascular",
    label: "Endovascular & Vascular",
    icon: Activity,
    items: [
      "Deep Vein Thrombosis (DVT) Management",
      "Venoplasty & IVC Filter Placement",
      "Catheter-Directed Thrombolysis",
      "Cyanoacrylate Glue Closure for Varicose Veins",
      "Radiofrequency Ablation",
      "Infra-Renal Venacavoplasty (Pioneering in AP)",
    ],
  },
  {
    id: "peripheral",
    label: "Peripheral & Limb Salvage",
    icon: Zap,
    items: [
      "Femoro-popliteal Interventions",
      "Infra-popliteal Drug-Coated Balloon Procedures",
      "Carotid Artery Interventions",
      "Renal Artery Stenting",
      "Advanced Pedal Arch Interventions",
      "Distal Limb Salvage Techniques",
    ],
  },
  {
    id: "aortic",
    label: "Complex Aortic & Hybrid",
    icon: ShieldCheck,
    items: [
      "Thoracic Aortic Pathology Management",
      "Abdominal Aortic Endovascular Repair",
      "Hybrid Aortic Interventions",
      "Multidisciplinary Complex Aortic Planning",
    ],
  },
];

const academicPositions = [
  {
    period: "Feb 2025 – Present",
    title: "Professor & Head – Dept. of CTVS",
    institution: "ANH Hospitals & NRI Institute of Medical Sciences, Visakhapatnam",
    description: "Leading advanced cardiothoracic and vascular surgery services and structured cardiac rehabilitation integration.",
    current: true,
  },
  {
    period: "Previous",
    title: "Professor",
    institution: "Rangaraya Medical College",
    description: "Teaching, mentoring postgraduate residents and advancing research initiatives.",
    current: false,
  },
  {
    period: "Previous",
    title: "Associate Professor",
    institution: "Rangaraya Medical College",
    description: "Academic leadership in cardiothoracic surgery training programs.",
    current: false,
  },
  {
    period: "Previous",
    title: "Assistant Professor",
    institution: "Andhra Medical College & King George Hospital",
    description: "Clinical training and surgical mentorship.",
    current: false,
  },
];

const internationalTraining = [
  { location: "New Delhi, India", program: "Vascular & Endovascular Surgery", institution: "Sir Ganga Ram Hospital" },
  { location: "London, UK", program: "Venous Stenting & Thrombolysis", institution: "Guy's & St Thomas' Hospitals" },
  { location: "Leipzig, Germany", program: "Peripheral Vascular Interventions", institution: "Leipzig Heart Center" },
  { location: "Tokyo, Japan", program: "Pedal Arch & Distal Interventions", institution: "Johnson & Johnson Institute" },
  { location: "International", program: "Complex Aortic Observership", institution: "International Mentorship Program" },
  { location: "Lisbon, Portugal", program: "Minimally Invasive Cardiac Surgery", institution: "Advanced MICS Training" },
];

const publications = [
  "Clinical and Vaccine Immunology",
  "Indian Journal of Medical Research",
  "Journal of Vascular and Endovascular Therapy",
];

const awards = [
  { title: "Best Doctor Award", detail: "Visakhapatnam (2009, 2010)" },
  { title: "Young Research Scholar", detail: "International Digestive Diseases Forum, Hong Kong" },
  { title: "Organizer & Faculty", detail: "EVOLUTION Endovascular Series" },
  { title: "Faculty", detail: "National & International Endovascular Conferences" },
];

const philosophyPillars = [
  { label: "Precision Surgical Technique", icon: Heart },
  { label: "Data-Driven Rehabilitation", icon: Activity },
  { label: "Oxygen-Based Recovery Science", icon: Zap },
  { label: "Multidisciplinary Coordination", icon: ShieldCheck },
];

/* ── Animated Counter ── */
function AnimatedCounter({ end, suffix = "", label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.max(1, Math.floor(end / 60));
    const interval = duration / (end / step);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-white" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 700, lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <p className="text-white/40 text-[12px] mt-2 tracking-wide uppercase">{label}</p>
    </div>
  );
}

export function DoctorPage() {
  const [activeTab, setActiveTab] = useState("cardiac");

  useSEO({
    title: "Dr. Harivadan Lukka | Cardiothoracic & Vascular Surgeon | Pranavayu",
    description:
      "Dr. Harivadan Lukka (MBBS, MS, M.Ch) — Internationally trained Cardiothoracic & Vascular Surgeon with 15+ years experience, leading advanced rehabilitation at Pranavayu, Visakhapatnam.",
    canonicalPath: "/doctor",
    schema: [
      physicianSchema,
      organizationSchema,
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Dr. Harivadan Lukka", url: "/doctor" },
      ]),
    ],
  });

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 lg:pt-36 pb-16 bg-[#062A3E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,172,163,0.08),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-5 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/5">
                <Stethoscope size={12} strokeWidth={1.5} className="text-[#5CE0D8]" />
                <span className="text-white/60 text-[11px] tracking-[0.15em] uppercase">
                  Professor & Head – Dept. of CTVS
                </span>
              </div>
              <h1 className="text-white mb-2" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 600, lineHeight: 1.2 }}>
                Dr. Harivadan Lukka
              </h1>
              <p className="text-[#5CE0D8]/80 mb-1 text-[14px]">MBBS, MS, M.Ch (CTVS)</p>
              <p className="text-white/40 text-[13px] mb-6">
                Cardiothoracic, Vascular & Endovascular Surgeon
              </p>
              <h2 className="text-white/90 mb-4" style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", fontWeight: 500, lineHeight: 1.4 }}>
                Where Surgical Precision Meets Structured Recovery
              </h2>
              <p className="text-white/45 max-w-lg text-[14px] mb-8" style={{ lineHeight: 1.8 }}>
                A senior Cardiothoracic and Vascular Surgeon with over a decade of advanced experience
                in complex cardiac surgeries, aortic interventions, and minimally invasive endovascular procedures.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0FACA3] text-white rounded-full text-[13px] hover:bg-[#0d9990] transition-all duration-300 hover:shadow-lg hover:shadow-[#0FACA3]/25"
                  style={{ fontWeight: 500 }}
                >
                  <Calendar size={14} strokeWidth={1.5} />
                  Book Consultation
                </Link>
                <a
                  href="#expertise"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white rounded-full text-[13px] hover:bg-white/8 transition-all duration-300"
                  style={{ fontWeight: 500 }}
                >
                  View Clinical Expertise
                  <ArrowRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex justify-center"
            >
              <div className="relative">
                <ImageWithFallback
                  src={doctorImg}
                  alt="Dr. Harivadan Lukka"
                  className="w-[300px] lg:w-[340px] h-[400px] lg:h-[430px] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10">
                  <p className="text-white text-[13px]" style={{ fontWeight: 600 }}>15+ Years</p>
                  <p className="text-white/40 text-[11px]">Surgical Excellence</p>
                </div>
                <a
                  href="https://sites.google.com/view/drharivadan/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-4 -right-2 lg:-right-4 inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md rounded-full px-4 py-2.5 border border-white/10 text-white text-[12px] hover:bg-white/15 transition-all"
                  style={{ fontWeight: 500 }}
                >
                  Learn More
                  <ArrowRight size={12} strokeWidth={1.5} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Counter Strip ── */}
      <section className="py-10 bg-[#041E2D]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCounter end={15} suffix="+" label="Years Experience" />
            <AnimatedCounter end={6} suffix="" label="International Trainings" />
            <AnimatedCounter end={4} suffix="" label="Academic Positions" />
            <AnimatedCounter end={3} suffix="+" label="Published Journals" />
          </div>
        </div>
      </section>

      {/* ── Professional Overview ── */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase size={16} strokeWidth={1.5} className="text-[#0FACA3]" />
              <h2 className="text-[#1a3a4a] text-[18px]" style={{ fontWeight: 600 }}>
                Professional Overview
              </h2>
            </div>
            <p className="text-gray-500 text-[14px] mb-4" style={{ lineHeight: 1.9 }}>
              Dr. Harivadan Lukka is a distinguished Cardiothoracic and Vascular Surgeon recognized for his
              expertise in complex aortic surgeries, hybrid endovascular procedures, and minimally invasive
              cardiac interventions.
            </p>
            <p className="text-gray-500 text-[14px] mb-8" style={{ lineHeight: 1.9 }}>
              With extensive academic leadership and advanced international training, he integrates precision
              surgical care with structured rehabilitation models to optimize patient outcomes.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "Complex aortic endovascular planning",
                "Hybrid vascular interventions",
                "Minimally invasive cardiac surgery",
                "Advanced venous & arterial procedures",
                "Multidisciplinary cardiac rehab integration",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#f6f9fc] border border-gray-100/60"
                >
                  <div className="w-1.5 h-1.5 bg-[#0FACA3] rounded-full shrink-0" />
                  <span className="text-gray-600 text-[13px]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Clinical Expertise (Tabbed) ── */}
      <section id="expertise" className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#f8fafb]">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Heart size={16} strokeWidth={1.5} className="text-[#0FACA3]" />
              <h2 className="text-[#1a3a4a] text-[18px]" style={{ fontWeight: 600 }}>
                Clinical Expertise
              </h2>
            </div>
            <p className="text-gray-400 text-[13px] mb-8">
              Specialized across four key domains of cardiothoracic and vascular surgery
            </p>
          </motion.div>

          {/* Tabs — minimal underline style */}
          <div className="flex flex-wrap gap-0 mb-10 border-b border-gray-200">
            {expertiseTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative inline-flex items-center gap-2 px-5 py-3 text-[14px] transition-all duration-300 ${activeTab === tab.id
                    ? "text-[#0B4D6E]"
                    : "text-gray-400 hover:text-gray-600"
                    }`}
                  style={{ fontWeight: activeTab === tab.id ? 600 : 400 }}
                >
                  <Icon size={14} strokeWidth={1.5} className={activeTab === tab.id ? "text-[#0FACA3]" : "text-gray-400"} />
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="expertiseTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0FACA3]"
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          {expertiseTabs
            .filter((t) => t.id === activeTab)
            .map((tab) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 gap-3"
              >
                {tab.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-sm transition-shadow"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#0B4D6E]/8 flex items-center justify-center shrink-0">
                      <tab.icon size={14} strokeWidth={1.5} className="text-[#0B4D6E]" />
                    </div>
                    <span className="text-gray-600 text-[13px]">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            ))}
        </div>
      </section>

      {/* ── Academic & Leadership ── */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={16} strokeWidth={1.5} className="text-[#0FACA3]" />
              <h2 className="text-[#1a3a4a] text-[18px]" style={{ fontWeight: 600 }}>
                Academic & Leadership Positions
              </h2>
            </div>
            <p className="text-gray-400 text-[13px] mb-8">
              Extensive experience mentoring postgraduate residents and advancing research initiatives
            </p>
          </motion.div>

          <div className="space-y-3">
            {academicPositions.map((pos, i) => (
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`flex items-start gap-4 p-5 rounded-2xl border ${pos.current
                  ? "bg-[#0B4D6E]/4 border-[#0B4D6E]/12"
                  : "bg-[#f6f9fc] border-gray-100/60"
                  }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${pos.current ? "bg-[#0B4D6E]" : "bg-[#0B4D6E]/10"
                  }`}>
                  <Briefcase size={16} strokeWidth={1.5} className={pos.current ? "text-white" : "text-[#0B4D6E]"} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 className="text-[#1a3a4a] text-[14px]" style={{ fontWeight: 600 }}>{pos.title}</h4>
                    {pos.current && (
                      <span className="px-2 py-0.5 bg-[#0FACA3]/10 text-[#0FACA3] rounded-full text-[10px]" style={{ fontWeight: 600 }}>
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-[#0B4D6E]/60 text-[13px] mb-1">{pos.institution}</p>
                  <p className="text-gray-400 text-[12px] mb-1">{pos.period}</p>
                  <p className="text-gray-400 text-[12px]">{pos.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── International Training ── */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#f8fafb]">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Globe size={16} strokeWidth={1.5} className="text-[#0FACA3]" />
              <h2 className="text-[#1a3a4a] text-[18px]" style={{ fontWeight: 600 }}>
                International Training & Fellowships
              </h2>
            </div>
            <p className="text-gray-400 text-[13px] mb-8">
              Global exposure that strengthens internationally aligned surgical standards
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {internationalTraining.map((t, i) => (
              <motion.div
                key={t.program}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-5 rounded-2xl bg-white border border-gray-100 hover:shadow-sm transition-shadow"
              >
                <div className="flex items-center gap-1.5 mb-3">
                  <MapPin size={12} strokeWidth={1.5} className="text-[#0FACA3]" />
                  <span className="text-[#0FACA3] text-[11px] tracking-wide uppercase" style={{ fontWeight: 600 }}>
                    {t.location}
                  </span>
                </div>
                <h4 className="text-[#1a3a4a] text-[13px] mb-1" style={{ fontWeight: 600 }}>{t.program}</h4>
                <p className="text-gray-400 text-[12px]">{t.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research & Publications + Awards ── */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Research */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FlaskConical size={16} strokeWidth={1.5} className="text-[#0FACA3]" />
                <h2 className="text-[#1a3a4a] text-[18px]" style={{ fontWeight: 600 }}>
                  Research & Publications
                </h2>
              </div>
              <p className="text-gray-400 text-[13px] mb-6">
                Published in peer-reviewed journals and contributor to academic textbooks
              </p>
              <div className="space-y-2.5 mb-4">
                {publications.map((pub) => (
                  <div key={pub} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#f6f9fc]">
                    <BookOpen size={14} strokeWidth={1.5} className="text-[#0B4D6E] shrink-0" />
                    <span className="text-gray-600 text-[13px]">{pub}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-[12px]" style={{ lineHeight: 1.7 }}>
                Recognized for multidisciplinary research initiatives including DRDO-sponsored projects.
                Contributor to academic textbooks and international research presentations.
              </p>
            </motion.div>

            {/* Awards */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Trophy size={16} strokeWidth={1.5} className="text-[#0FACA3]" />
                <h2 className="text-[#1a3a4a] text-[18px]" style={{ fontWeight: 600 }}>
                  Awards & Recognitions
                </h2>
              </div>
              <p className="text-gray-400 text-[13px] mb-6">
                Honored for clinical excellence and contribution to medical education
              </p>
              <div className="space-y-2.5">
                {awards.map((a, i) => (
                  <div key={a.title + i} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f6f9fc]">
                    <Award size={14} strokeWidth={1.5} className="text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[#1a3a4a] text-[13px]" style={{ fontWeight: 600 }}>{a.title}</span>
                      <p className="text-gray-400 text-[12px]">{a.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Philosophy of Care ── */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-[#062A3E] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center relative">
          {/* Large centered quotation mark graphic — low opacity */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[280px] text-white/[0.03] pointer-events-none select-none" style={{ fontFamily: "serif", lineHeight: 1 }}>
            &ldquo;
          </div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Globe size={28} strokeWidth={1.5} className="text-[#0FACA3] mx-auto mb-6" />
            <h2 className="text-white mb-6 text-[18px]" style={{ fontWeight: 600 }}>
              Philosophy of Care
            </h2>
            <p className="text-white/50 text-[14px] max-w-xl mx-auto mb-2" style={{ lineHeight: 1.9 }}>
              "Advanced surgery must be complemented by structured rehabilitation."
            </p>
            <p className="text-white/35 text-[13px] max-w-lg mx-auto mb-10" style={{ lineHeight: 1.8 }}>
              Dr. Lukka believes that surgical excellence alone is not sufficient — recovery must be guided,
              monitored, and personalized to restore full functional capacity.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {philosophyPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-4 rounded-2xl bg-white/5 border border-white/8 backdrop-blur-sm"
                  >
                    <Icon size={20} strokeWidth={1.5} className="text-[#5CE0D8] mx-auto mb-3" />
                    <p className="text-white/60 text-[12px]">{pillar.label}</p>
                  </motion.div>
                );
              })}
            </div>

            <p className="text-[#5CE0D8]/70 mt-8 text-[13px]" style={{ fontWeight: 500 }}>
              — Dr. Harivadan Lukka
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-[60px] md:py-[80px] lg:py-[120px] bg-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#1a3a4a] mb-3" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)", fontWeight: 600 }}>
              Schedule a Consultation with Dr. Harivadan Lukka
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Advanced Cardiac & Vascular Care", "Structured Recovery", "Measured Outcomes"].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full bg-[#0B4D6E]/6 text-[#0B4D6E] text-[12px]"
                  style={{ fontWeight: 500 }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0FACA3] text-white rounded-full text-[14px] hover:bg-[#0d9990] transition-all hover:shadow-lg hover:shadow-[#0FACA3]/25"
                style={{ fontWeight: 500 }}
              >
                <Calendar size={16} strokeWidth={1.5} />
                Book Appointment
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-600 rounded-full text-[14px] hover:border-[#0B4D6E]/30 hover:text-[#0B4D6E] transition-all"
                style={{ fontWeight: 500 }}
              >
                <Phone size={16} strokeWidth={1.5} />
                Contact Clinic
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}