import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { buildMedicalWebPageSchema, buildBreadcrumbSchema } from "../seo/schemas";

const yogaComponents = [
  {
    title: "Therapeutic Yoga",
    text: "Adapted yoga practices designed specifically for cardiac and respiratory patients — gentle, supervised, and progressed based on recovery stage. Improves flexibility, breathing, and mental calm.",
  },
  {
    title: "Clinical Nutrition Planning",
    text: "Individualised meal planning by a clinical nutritionist — focusing on heart-healthy, anti-inflammatory foods, weight management, and managing comorbidities like diabetes and hypertension.",
  },
  {
    title: "Supervised Exercise Therapy",
    text: "Structured, monitored physical exercise tailored to each patient's capacity — progressively improving cardiovascular fitness, strength, and endurance in a safe environment.",
  },
  {
    title: "Breathing Techniques",
    text: "Pranayama and clinical breathing exercises to improve lung capacity, reduce breathlessness, manage stress, and support cardiac recovery.",
  },
  {
    title: "Mind-Body Connection",
    text: "Practices targeting the bidirectional link between emotional health and physical recovery — reducing anxiety, depression, and cortisol-driven inflammation.",
  },
  {
    title: "Recovery-Supportive Nutrition",
    text: "Specific nutritional protocols for post-surgery recovery, immune support, wound healing, and managing medications' nutritional interactions.",
  },
];

const benefits = [
  "Complements and enhances medical rehabilitation",
  "Improves flexibility, strength, and endurance safely",
  "Reduces stress, anxiety, and depression",
  "Supports healthy body weight and metabolism",
  "Improves sleep quality and energy levels",
  "Builds sustainable healthy habits for life",
];

export function YogaNutritionPage() {
  useSEO({
    title: "Yoga & Nutrition Therapy for Cardiac Recovery | Pranavayu",
    description:
      "Therapeutic yoga, clinical nutrition planning & supervised exercise therapy to support cardiac and medical rehabilitation at Pranavayu, Visakhapatnam.",
    keywords:
      "Therapeutic Yoga Vizag, Clinical Nutrition Visakhapatnam, Exercise Therapy for Heart Patients, Cardiac Yoga India, Pranayama Breathing Rehabilitation",
    canonicalPath: "/yoga-nutrition-therapy",
    schema: [
      buildMedicalWebPageSchema({
        name: "Yoga, Nutrition & Fitness Therapy",
        description:
          "Therapeutic yoga, clinical nutrition, and supervised exercise to support cardiac and medical rehabilitation at Pranavayu, Visakhapatnam.",
        url: "/yoga-nutrition-therapy",
        specialty: "Cardiac Rehabilitation",
      }),
      buildBreadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Yoga & Nutrition Therapy", url: "/yoga-nutrition-therapy" },
      ]),
    ],
  });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 bg-gradient-to-br from-[#062A3E] via-[#0a3f58] to-[#062A3E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(132,204,22,0.06),transparent_60%)] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-5 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/10 px-4 py-1.5 rounded-full text-[12px] tracking-widest uppercase text-white/60 font-medium mb-6">
              🧘 Yoga, Nutrition & Fitness
            </div>
            <h1
              className="text-white mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              Supporting Recovery Naturally — Yoga, Nutrition & Fitness at Pranavayu
            </h1>
            <p className="text-white/55 text-[17px] leading-relaxed mb-8 max-w-2xl">
              Therapeutic yoga, clinical nutrition, and supervised fitness therapy work synergistically to accelerate recovery, build resilience, and support the body's natural healing processes — alongside medical treatment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-[#0FACA3] text-white rounded-full text-[15px] hover:bg-[#0d9990] transition-all duration-300 hover:-translate-y-[1px]"
              >
                Book Consultation
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <a
                href="https://wa.me/917997592222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 border border-white/20 text-white/80 rounded-full text-[15px] hover:bg-white/5 hover:border-white/35 transition-all duration-300 hover:-translate-y-[1px]"
              >
                <MessageCircle size={15} strokeWidth={1.5} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Components */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-4">What the Program Includes</h2>
            <p className="text-gray-500 text-[15.5px] leading-relaxed">
              Our integrated program combines therapeutic yoga, expert nutrition guidance, and structured exercise therapy — each component tailored to your medical condition and recovery needs.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {yogaComponents.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#f7fff2] border border-lime-100 rounded-2xl p-6 hover:border-lime-300/50 hover:shadow-md transition-all duration-300"
              >
                <div className="text-2xl mb-3">🌿</div>
                <h3 className="text-[#1a3a4a] font-semibold text-[15px] mb-2">{c.title}</h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#f7fff2]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-[#1a3a4a] font-bold text-[1.75rem] mb-3">Benefits of This Integrated Approach</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white border border-lime-100 rounded-xl px-5 py-3.5 flex items-start gap-3"
              >
                <CheckCircle size={15} className="text-lime-500 mt-0.5 shrink-0" />
                <span className="text-gray-600 text-[13.5px] leading-snug">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#062A3E] to-[#0B4D6E]">
        <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-white font-bold text-[1.75rem] mb-3">Support Your Recovery Holistically</h2>
          <p className="text-white/55 text-[15.5px] leading-relaxed mb-7">
            Connect with our yoga, nutrition, and fitness therapy team to begin your integrated recovery journey.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#0FACA3] text-white rounded-full text-[15px] hover:bg-[#0d9990] transition-all duration-300 hover:-translate-y-[1px]"
            >
              Book Consultation
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
            <a
              href="https://wa.me/917997592222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#25D366] text-white rounded-full text-[15px] hover:bg-[#20bd59] transition-all duration-300 hover:-translate-y-[1px]"
            >
              <MessageCircle size={16} strokeWidth={1.5} />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
