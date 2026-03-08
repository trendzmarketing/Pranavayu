import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Check,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Heart,
  Wind,
  Brain,
  Syringe,
  Droplets,
  Activity,
  Users,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProgramData {
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  whoNeedsIt: string[];
  howItWorks: { title: string; desc: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  ctaLine: string;
  icon: typeof Heart;
}

const programData: Record<string, ProgramData> = {
  "cardiac-rehabilitation": {
    title: "Cardiac Rehabilitation",
    tagline: "Rebuild your heart strength with guided, safe exercise and lifestyle support.",
    heroImage:
      "/images/programs/cardiac-hero.webp",
    description:
      "Our Cardiac Rehabilitation program is a doctor-supervised recovery plan that helps you get stronger after a heart event. Whether you've had a heart attack, bypass surgery, valve replacement, or are living with heart failure — this program combines safe exercise, lifestyle coaching, and continuous monitoring to improve your heart health and prevent future problems.",
    icon: Heart,
    whoNeedsIt: [
      "Recovering from a heart attack or heart surgery",
      "Living with blocked arteries or heart failure",
      "Dealing with high blood pressure or chest pain",
      "Family history of heart disease",
      "Feeling low on energy or stamina after a cardiac event",
    ],
    howItWorks: [
      {
        title: "Full Heart Check-Up",
        desc: "We start by checking your blood pressure, heart rate patterns, oxygen levels, and overall fitness to create a safe starting point.",
      },
      {
        title: "Guided Exercise Sessions",
        desc: "Low-impact, monitored workouts that slowly build your strength — always within safe limits for your heart.",
      },
      {
        title: "Lifestyle & Diet Guidance",
        desc: "Practical tips on eating right, managing stress, quitting smoking, and maintaining a healthy weight.",
      },
      {
        title: "Progress Tracking",
        desc: "Regular check-ins and tests to track your improvement and adjust your program as you get stronger.",
      },
    ],
    benefits: [
      "Stronger, healthier heart",
      "Lower risk of another heart event",
      "Better stamina and breathing",
      "Controlled blood pressure and cholesterol",
      "More energy for daily activities",
      "Greater confidence in your body",
    ],
    faqs: [
      {
        q: "Is it safe to exercise after a heart attack?",
        a: "Yes — that's exactly what cardiac rehab is designed for. All exercises are supervised by our medical team and tailored to your current condition. We monitor your vitals throughout every session.",
      },
      {
        q: "How soon after surgery can I start?",
        a: "Most patients can begin within 2–4 weeks after surgery, depending on your doctor's clearance. We start gently and build up gradually.",
      },
      {
        q: "How long does the program last?",
        a: "A typical cardiac rehab program runs 8–12 weeks with 2–3 sessions per week. The exact duration depends on your recovery progress.",
      },
      {
        q: "Will I need to change my diet?",
        a: "We provide practical, easy-to-follow dietary guidance that works with Indian diets. Small changes like reducing salt and fried foods can make a big difference.",
      },
      {
        q: "What results can I expect?",
        a: "Most patients report better energy, easier breathing, lower blood pressure, and improved confidence within the first few weeks of the program.",
      },
    ],
    ctaLine: "Ready to strengthen your heart? Book a cardiac assessment today.",
  },
  "pulmonary-rehabilitation": {
    title: "Pulmonary Rehabilitation",
    tagline: "Breathe easier with structured lung conditioning and respiratory training.",
    heroImage:
      "/images/therapies/hydrogen-inhalation.webp",
    description:
      "Our Pulmonary Rehabilitation program helps people who struggle with breathing problems. If you have chronic cough, asthma, COPD, or feel breathless after even simple activities — this program strengthens your lungs, improves oxygen flow, and helps you regain energy through guided breathing techniques and safe exercises.",
    icon: Wind,
    whoNeedsIt: [
      "Feeling breathless after climbing stairs or walking",
      "Living with asthma, COPD, or chronic bronchitis",
      "Experiencing post-COVID breathing difficulties",
      "Frequent chest tightness or respiratory infections",
      "Low energy and fatigue due to poor lung function",
    ],
    howItWorks: [
      {
        title: "Breathing Assessment",
        desc: "We measure your lung capacity, oxygen levels, and breathing patterns to understand exactly where you need help.",
      },
      {
        title: "Breathing Retraining",
        desc: "Learn proper breathing techniques like diaphragmatic breathing and controlled exhalation to use your lungs more efficiently.",
      },
      {
        title: "Lung Muscle Strengthening",
        desc: "Targeted exercises and resistance breathing training to make your respiratory muscles stronger over time.",
      },
      {
        title: "Stamina Building",
        desc: "Safe, progressive activities designed to increase your endurance without pushing you too hard.",
      },
    ],
    benefits: [
      "Improved oxygen levels throughout the day",
      "Less breathlessness during daily activities",
      "Better sleep quality",
      "More energy and reduced fatigue",
      "Stronger immune system",
      "Greater ability to be active and independent",
    ],
    faqs: [
      {
        q: "Can this help with asthma?",
        a: "Yes. Breathing retraining and lung conditioning can significantly reduce asthma symptoms and improve your ability to manage flare-ups.",
      },
      {
        q: "Is this suitable for elderly patients?",
        a: "Absolutely. The program is tailored to your fitness level. We work with patients of all ages, including seniors, at a pace that's comfortable and safe.",
      },
      {
        q: "How quickly will I notice improvement?",
        a: "Many patients feel a noticeable difference in breathing ease and energy levels within 2–3 weeks of consistent sessions.",
      },
      {
        q: "Do I need to bring any equipment?",
        a: "No. All equipment and monitoring devices are provided at our center. Just come in comfortable clothing.",
      },
      {
        q: "Can I do this alongside my regular medications?",
        a: "Yes. Pulmonary rehab works alongside your existing treatment plan. We coordinate with your doctor to ensure everything is aligned.",
      },
    ],
    ctaLine: "Struggling to breathe easy? Start your pulmonary recovery today.",
  },
  "neurovascular-recovery": {
    title: "Neurovascular Recovery",
    tagline: "Restore movement, balance, and independence after stroke or nerve injury.",
    heroImage:
      "/images/programs/neurovascular-hero.webp",
    description:
      "After a stroke or nerve injury, the brain needs guided help to rebuild connections. Our Neurovascular Recovery program uses science-backed techniques to retrain your brain, restore movement, improve balance, and help you regain your independence — step by step, at your own pace.",
    icon: Brain,
    whoNeedsIt: [
      "Recovering from a stroke",
      "Experiencing numbness or weakness in hands or legs",
      "Struggling with balance or coordination",
      "Diagnosed with peripheral neuropathy",
      "Living with reduced mobility after a vascular event",
    ],
    howItWorks: [
      {
        title: "Neurological Assessment",
        desc: "A thorough evaluation of your movement, balance, sensation, and nerve function to create a personalized recovery plan.",
      },
      {
        title: "Balance & Gait Training",
        desc: "Guided exercises to improve your walking, standing balance, and coordination in a safe environment.",
      },
      {
        title: "Neural Activation Exercises",
        desc: "Targeted movements designed to stimulate your brain and encourage it to form new nerve pathways.",
      },
      {
        title: "Circulation Enhancement",
        desc: "Techniques to improve blood flow to affected areas, supporting nerve repair and reducing pain.",
      },
    ],
    benefits: [
      "Better balance and walking ability",
      "Improved coordination and hand function",
      "Reduced numbness and tingling",
      "Greater mobility and independence",
      "Improved blood circulation",
      "Renewed confidence in daily activities",
    ],
    faqs: [
      {
        q: "How soon after a stroke should I start rehab?",
        a: "The sooner the better. Most patients can begin within a few weeks of their stroke. Early intervention leads to better long-term outcomes.",
      },
      {
        q: "Can nerve damage be reversed?",
        a: "While not all nerve damage is fully reversible, targeted rehab can significantly improve function by helping the brain create new pathways — this is called neuroplasticity.",
      },
      {
        q: "Is this only for stroke patients?",
        a: "No. This program also helps people with peripheral neuropathy, balance disorders, nerve injuries, and vascular insufficiency.",
      },
      {
        q: "How long does recovery take?",
        a: "Recovery timelines vary, but most patients see meaningful improvements within 6–12 weeks of consistent rehabilitation.",
      },
      {
        q: "Will I need a caretaker during sessions?",
        a: "Our team provides full support during every session. A caretaker is welcome but not required.",
      },
    ],
    ctaLine: "Ready to regain your mobility? Start your recovery journey today.",
  },
  "post-surgical-recovery": {
    title: "Post-Surgical Recovery",
    tagline: "Heal faster and stronger after cardiac, lung, or vascular surgery.",
    heroImage:
      "/images/programs/post-surgical-hero.webp",
    description:
      "Surgery is just the first step — what you do after determines how well you recover. Our Post-Surgical Recovery program helps your body heal properly through safe movement, breathing exercises, circulation support, and gradual strength building, so you can get back to your normal life faster and avoid complications.",
    icon: Syringe,
    whoNeedsIt: [
      "Recovering from heart surgery (bypass, valve replacement)",
      "After lung or chest surgery",
      "Post vascular procedures",
      "Extended hospital stays with limited mobility",
      "Feeling weak, stiff, or breathless after any major surgery",
    ],
    howItWorks: [
      {
        title: "Post-Surgery Assessment",
        desc: "We evaluate your current mobility, breathing capacity, pain levels, and overall condition to plan your recovery safely.",
      },
      {
        title: "Safe Movement Restoration",
        desc: "Gentle, guided movements to get you moving again without straining your surgical site or putting you at risk.",
      },
      {
        title: "Breathing Reconditioning",
        desc: "Exercises to expand your lungs properly and prevent post-surgical complications like fluid buildup.",
      },
      {
        title: "Strength Rebuilding",
        desc: "Progressive exercises to rebuild the muscle strength and endurance you lost during recovery and bed rest.",
      },
    ],
    benefits: [
      "Faster recovery and shorter healing time",
      "Lower risk of complications and readmission",
      "Improved circulation and reduced swelling",
      "Better lung expansion and breathing",
      "Restored strength and mobility",
      "Greater confidence to return to daily life",
    ],
    faqs: [
      {
        q: "When can I start rehab after surgery?",
        a: "Most patients can begin gentle rehabilitation within 1–3 weeks after surgery, based on your surgeon's clearance. We start very gently.",
      },
      {
        q: "Will it hurt?",
        a: "We design every session around your comfort. While some mild discomfort during early movement is normal, we never push beyond safe limits.",
      },
      {
        q: "How does this prevent complications?",
        a: "Staying inactive after surgery can lead to blood clots, muscle weakness, and poor lung expansion. Structured rehab keeps your body active and healing properly.",
      },
      {
        q: "How many sessions will I need?",
        a: "Typically 4–8 weeks of regular sessions, depending on the type of surgery and your recovery progress.",
      },
      {
        q: "Can I do this at home?",
        a: "Initial sessions should be at our center under supervision. As you progress, we can provide home exercise plans to continue your recovery.",
      },
    ],
    ctaLine: "Recovering from surgery? Let us help you heal faster and stronger.",
  },
  "long-covid-recovery": {
    title: "Long COVID Recovery",
    tagline: "Overcome persistent fatigue, breathlessness, and brain fog after COVID.",
    heroImage:
      "/images/programs/long-covid-hero.webp",
    description:
      "Many people continue to feel unwell months after recovering from COVID — extreme tiredness, difficulty breathing, brain fog, and heart palpitations are common. Our Long COVID Recovery program addresses these lingering symptoms with a structured, step-by-step approach that helps your body and mind recover fully.",
    icon: Droplets,
    whoNeedsIt: [
      "Extreme fatigue that doesn't improve with rest",
      "Breathlessness during simple daily tasks",
      "Brain fog, poor concentration, or memory issues",
      "Heart palpitations or irregular heartbeat",
      "Low stamina — can't do what you used to do easily",
    ],
    howItWorks: [
      {
        title: "Comprehensive Evaluation",
        desc: "We assess your heart, lungs, energy levels, and cognitive function to understand exactly how COVID has affected you.",
      },
      {
        title: "Fatigue Management",
        desc: "A structured plan to manage your energy — learning when to rest, when to push, and how to gradually build capacity.",
      },
      {
        title: "Oxygen & Breathing Therapy",
        desc: "Techniques to improve how your lungs take in and use oxygen, reducing breathlessness and improving energy.",
      },
      {
        title: "Gradual Stamina Rebuilding",
        desc: "Safe, progressive exercises that slowly bring your fitness back without causing setbacks or crashes.",
      },
    ],
    benefits: [
      "Improved mental clarity and focus",
      "Reduced fatigue and better energy management",
      "Easier breathing during daily activities",
      "Stabilized heart rhythm",
      "Ability to return to work and normal life",
      "Overall sense of wellbeing restored",
    ],
    faqs: [
      {
        q: "Is Long COVID real?",
        a: "Yes. Long COVID is a recognized medical condition where symptoms persist for weeks or months after the initial infection. It can affect anyone, regardless of how severe their original COVID was.",
      },
      {
        q: "How long does recovery take?",
        a: "It varies by individual, but most patients see significant improvement within 6–12 weeks of structured rehabilitation.",
      },
      {
        q: "Can this help with brain fog?",
        a: "Yes. Our program includes cognitive exercises and oxygen therapy that help improve mental clarity and concentration.",
      },
      {
        q: "Is exercise safe if I'm still fatigued?",
        a: "We use a carefully paced approach. We never push you beyond what's safe. The key is structured, gradual activity — not pushing through exhaustion.",
      },
      {
        q: "Do I need a referral from my doctor?",
        a: "A referral is helpful but not required. You can book a consultation directly, and our team will coordinate with your doctor.",
      },
    ],
    ctaLine: "Still feeling the effects of COVID? Start your recovery today.",
  },
  "preventive-cardio": {
    title: "Preventive Cardio Programs",
    tagline: "Catch heart risks early and prevent problems before they start.",
    heroImage:
      "/images/programs/preventive-hero.webp",
    description:
      "Heart disease often develops silently — you may feel perfectly fine until something serious happens. Our Preventive Cardio Program helps you catch risks early through screening, fitness testing, and a personalized plan to keep your heart healthy for the long run. Prevention is always better than cure.",
    icon: Activity,
    whoNeedsIt: [
      "Age 35+ and haven't had a heart check-up recently",
      "Family history of heart disease or stroke",
      "High blood pressure, cholesterol, or diabetes",
      "Sedentary lifestyle or desk job",
      "Fitness-conscious individuals wanting heart optimization",
    ],
    howItWorks: [
      {
        title: "Cardiovascular Screening",
        desc: "A baseline check of your heart health including blood pressure, cholesterol, stress testing, and oxygen capacity.",
      },
      {
        title: "Risk Assessment",
        desc: "We identify your personal risk factors and explain what they mean in simple, clear terms.",
      },
      {
        title: "Lifestyle Correction Plan",
        desc: "Practical, realistic changes to your diet, exercise, stress management, and daily habits — tailored to your life.",
      },
      {
        title: "Heart Conditioning",
        desc: "Structured exercise sessions designed to keep your cardiovascular system strong and resilient.",
      },
    ],
    benefits: [
      "Early detection of hidden heart risks",
      "Lower long-term risk of heart attack or stroke",
      "Better stamina and physical fitness",
      "Controlled blood pressure and cholesterol",
      "Peace of mind about your heart health",
      "A clear, actionable plan for staying healthy",
    ],
    faqs: [
      {
        q: "I feel healthy — do I really need this?",
        a: "Heart disease is often called the 'silent killer' because it can develop without symptoms. A preventive check-up can catch problems years before they become dangerous.",
      },
      {
        q: "What age should I start preventive care?",
        a: "We recommend starting at age 35, or earlier if you have risk factors like family history, diabetes, or high blood pressure.",
      },
      {
        q: "Is this a one-time check or ongoing program?",
        a: "We offer both — a one-time comprehensive screening and ongoing conditioning programs for those who want continued support.",
      },
      {
        q: "How is this different from a regular health check-up?",
        a: "Our screening is specifically focused on cardiovascular health with specialized tests like stress testing and oxygen capacity assessment that go beyond a standard check-up.",
      },
      {
        q: "Can corporate groups sign up?",
        a: "Yes! We offer corporate heart health programs for companies. Contact us for group packages.",
      },
    ],
    ctaLine: "Don't wait for symptoms. Book your preventive heart assessment today.",
  },
};

export function ProgramPage() {
  const { programId } = useParams();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const program = programData[programId || ""];

  if (!program) {
    return (
      <div className="pt-32 lg:pt-36 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[#1a3a4a] mb-4" style={{ fontSize: "1.5rem", fontWeight: 600 }}>
            Program Not Found
          </h1>
          <Link
            to="/"
            className="text-[#0B4D6E] text-[14px] inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            <ArrowLeft size={16} strokeWidth={1.5} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = program.icon;

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 lg:pt-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#041E2D] via-[#0B4D6E] to-[#0a3c55]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,172,163,0.15),transparent_60%)]" />

        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/#programs"
                className="inline-flex items-center gap-1.5 text-white/50 hover:text-white/80 text-[13px] mb-6 transition-colors"
              >
                <ArrowLeft size={14} strokeWidth={1.5} /> All Programs
              </Link>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <IconComponent size={22} className="text-[#0FACA3]" strokeWidth={1.5} />
                </div>
                <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase">
                  Rehabilitation Program
                </p>
              </div>

              <h1 className="text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 600 }}>
                {program.title}
              </h1>
              <p className="text-white/60 text-[15px] mb-8" style={{ lineHeight: 1.7 }}>
                {program.tagline}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-[#0FACA3] text-white rounded-full text-[13px] hover:bg-[#0d9a92] transition-all hover:shadow-lg hover:shadow-[#0FACA3]/20"
                  style={{ fontWeight: 500 }}
                >
                  Book Assessment
                </Link>
                <a
                  href="tel:+917997592222"
                  className="px-6 py-3 border border-white/20 text-white rounded-full text-[13px] hover:bg-white/10 transition-all inline-flex items-center gap-2"
                >
                  <Phone size={14} strokeWidth={1.5} /> Call Us
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <ImageWithFallback
                  src={program.heroImage}
                  alt={program.title}
                  className="w-full h-[360px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041E2D]/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#1a3a4a] mb-5" style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 600 }}>
              What is {program.title}?
            </h2>
            <p className="text-gray-500 text-[14.5px]" style={{ lineHeight: 1.85 }}>
              {program.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who Needs It */}
      <section className="py-16 lg:py-20 bg-[#f6f9fc]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#0FACA3]/10 flex items-center justify-center">
                <Users size={18} className="text-[#0FACA3]" strokeWidth={1.5} />
              </div>
              <h2 className="text-[#1a3a4a]" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)", fontWeight: 600 }}>
                Is This Program For You?
              </h2>
            </div>
            <p className="text-gray-400 text-[14px] mb-8">
              This program can help if you're experiencing any of the following:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {program.whoNeedsIt.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0FACA3]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-[#0FACA3]" strokeWidth={2} />
                  </div>
                  <span className="text-gray-600 text-[13.5px]" style={{ lineHeight: 1.6 }}>
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-3">
              Our Approach
            </p>
            <h2
              className="text-[#1a3a4a]"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 600 }}
            >
              How the Program Works
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[23px] top-8 bottom-8 w-px bg-gradient-to-b from-[#0FACA3]/30 via-[#0FACA3]/15 to-transparent hidden sm:block" />

            <div className="space-y-6">
              {program.howItWorks.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-5"
                >
                  <div className="relative z-10 w-[46px] h-[46px] rounded-xl bg-[#0B4D6E]/8 flex items-center justify-center shrink-0">
                    <span className="text-[#0B4D6E] text-[14px]" style={{ fontWeight: 600 }}>
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1 p-5 bg-[#f6f9fc] rounded-2xl">
                    <h3 className="text-[#1a3a4a] mb-2" style={{ fontSize: "15px", fontWeight: 600 }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-[13.5px]" style={{ lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-[#f6f9fc]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#0FACA3] text-[11px] tracking-[0.15em] uppercase mb-3">
              Results You Can Expect
            </p>
            <h2
              className="text-[#1a3a4a]"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 600 }}
            >
              Key Benefits
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {program.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-5 bg-white rounded-xl border border-gray-100"
              >
                <div className="w-6 h-6 rounded-full bg-[#0FACA3]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={13} className="text-[#0FACA3]" strokeWidth={2} />
                </div>
                <span className="text-gray-600 text-[13.5px]" style={{ lineHeight: 1.6 }}>
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0B4D6E]/8 flex items-center justify-center mx-auto mb-4">
              <HelpCircle size={18} className="text-[#0B4D6E]" strokeWidth={1.5} />
            </div>
            <h2
              className="text-[#1a3a4a]"
              style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 600 }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {program.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className="text-[#1a3a4a] text-[14px] pr-4" style={{ fontWeight: 500 }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    strokeWidth={1.5}
                    className={`text-gray-400 shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 -mt-1">
                    <p className="text-gray-400 text-[13.5px]" style={{ lineHeight: 1.75 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#041E2D] to-[#0B4D6E] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(15,172,163,0.12),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 600 }}>
              {program.ctaLine}
            </h2>
            <p className="text-white/50 text-[14px] mb-8 max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
              Our team is ready to guide you through every step of your recovery. Book a consultation to get started.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="px-7 py-3 bg-[#0FACA3] text-white rounded-full text-[14px] hover:bg-[#0d9a92] transition-all hover:shadow-lg hover:shadow-[#0FACA3]/25"
                style={{ fontWeight: 500 }}
              >
                Book Consultation
              </Link>
              <a
                href="tel:+917997592222"
                className="px-7 py-3 border border-white/20 text-white rounded-full text-[14px] hover:bg-white/10 transition-all inline-flex items-center gap-2"
              >
                <Phone size={15} strokeWidth={1.5} /> +91 79975 92222
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-16 lg:py-20 bg-[#f6f9fc]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2
              className="text-[#1a3a4a]"
              style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", fontWeight: 600 }}
            >
              Explore Other Programs
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(programData)
              .filter(([slug]) => slug !== programId)
              .slice(0, 3)
              .map(([slug, p], i) => {
                const PIcon = p.icon;
                return (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={`/programs/${slug}`}
                      className="group block p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#0B4D6E]/15 hover:shadow-[0_4px_20px_rgba(11,77,110,0.08)] transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#0FACA3]/8 flex items-center justify-center mb-4 group-hover:bg-[#0FACA3]/12 transition-colors">
                        <PIcon size={18} className="text-[#0FACA3]" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-[#1a3a4a] mb-1.5" style={{ fontSize: "14px", fontWeight: 600 }}>
                        {p.title}
                      </h3>
                      <p className="text-gray-400 text-[12.5px]" style={{ lineHeight: 1.6 }}>
                        {p.tagline}
                      </p>
                      <div className="flex items-center gap-1 text-[#0B4D6E] text-[12.5px] mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span style={{ fontWeight: 500 }}>Learn more</span>
                        <ArrowRight size={13} />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}