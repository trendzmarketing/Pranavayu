import { motion } from "motion/react";
import { Link } from "react-router";
import {
    Heart, Wind, Zap, Syringe, Shield, Leaf, Users, MapPin,
    ArrowRight, MessageCircle, Activity, Dumbbell, Apple, Sparkles,
    Briefcase, Stethoscope
} from "lucide-react";
import { useSEO } from "../hooks/useSEO";
import { organizationSchema, buildBreadcrumbSchema } from "../seo/schemas";

/* ── section helpers ── */
function SectionDivider() {
    return (
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#0FACA3]/20 to-transparent" />
        </div>
    );
}

function BulletList({ items }: { items: string[] }) {
    return (
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mt-5">
            {items.map((item, i) => (
                <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-start gap-3"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0FACA3] mt-[8px] shrink-0" />
                    <span className="text-gray-600 text-[14px]" style={{ lineHeight: 1.7 }}>{item}</span>
                </motion.div>
            ))}
        </div>
    );
}

/* ── Main Page ── */
export function ServicesPage() {
    useSEO({
        title: "Our Services | Cardiac Rehab, Pulmonary Rehab, HBOT & Wellness | Pranavayu",
        description:
            "Pranavayu is a specialized center dedicated to Cardiac Rehabilitation, Pulmonary Rehabilitation, Hyperbaric Therapy, and Medical Wellness — supporting complete health recovery and long-term well-being in Visakhapatnam.",
        keywords:
            "Cardiac Rehab, Heart Care, Pulmonary Rehab, Hyperbaric Therapy, HBOT Therapy, Medical Rehab, Health Recovery, Rehabilitation Care, Yoga Therapy, Cardiac Rehabilitation, Heart Rehab Program, Heart Therapy, Heart Recovery Care, Heart Surgery Recovery, Post Surgery Rehab, Post Stent Rehab, Post Angioplasty Rehab, Post Heart Attack Care, Heart Disease Prevention, Cardio Pulmonary Rehab, Breathing Rehabilitation, Lung Rehabilitation, Respiratory Rehabilitation, Doctor Supervised Rehab, Clinical Cardiac Rehab, Medical Rehabilitation, Advanced Cardiac Rehab, Structured Cardiac Rehab, Cardiac Rehab Center, Heart Rehab Clinic, Cardiac Rehab India, Cardiac Rehab Vizag, Cardiac Recovery Program, Heart Recovery, Heart Wellness, Heart Fitness, Heart Strength, Cardiac Health, Lung Health, Breathing Therapy, Respiratory Care, Oxygen Therapy, Oxygen Healing, Preventive Cardiology, Preventive Health, Medical Wellness, Holistic Wellness, Lifestyle Medicine, Healthy Living, Healthy Aging, Longevity Care, Corporate Wellness, Executive Health, Workplace Wellness, Nutrition Therapy, Fitness Therapy, Wellness Coaching, Vizag Wellness, India Wellness, Vizag Rehab, India Rehabilitation",
        canonicalPath: "/services",
        schema: [
            organizationSchema,
            buildBreadcrumbSchema([
                { name: "Home", url: "/" },
                { name: "Our Services", url: "/services" },
            ]),
        ],
    });

    return (
        <div>
            {/* ═══════════════════════════════════════════════════════════════════
          HERO — Pranavayu Overview
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="relative overflow-hidden pt-32 lg:pt-36">
                <div className="absolute inset-0 bg-gradient-to-br from-[#041E2D] via-[#0B4D6E] to-[#0a3c55]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,172,163,0.15),transparent_60%)]" />

                {/* Animated pulse rings */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full border border-[#0FACA3]/8"
                            style={{
                                width: 200 + i * 100,
                                height: 200 + i * 100,
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.35, 0.15] }}
                            transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                        />
                    ))}
                </div>

                <div className="relative max-w-4xl mx-auto px-5 lg:px-8 py-20 lg:py-28 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-[#0FACA3] text-[11px] tracking-[0.2em] uppercase mb-5">Pranavayu</p>
                        <h1 className="text-white mb-5" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)", fontWeight: 600 }}>
                            Advanced Cardiac Rehabilitation, Pulmonary Rehabilitation
                            <br />
                            <span className="text-white/70">& Medical Wellness Center</span>
                        </h1>
                        <p className="text-[#5CE0D8] text-[18px] mb-6" style={{ fontWeight: 500 }}>
                            Rebuild Your Heart. Restore Your Health. Rediscover Your Life.
                        </p>
                        <p className="text-white/50 max-w-2xl mx-auto text-[15px] mb-4" style={{ lineHeight: 1.8 }}>
                            Pranavayu is a specialized center dedicated to Cardiac Rehabilitation, Pulmonary Rehabilitation, Hyperbaric Therapy, and Medical Wellness, designed to support individuals on their journey toward complete health recovery and long-term well-being.
                        </p>
                        <p className="text-white/40 max-w-2xl mx-auto text-[14px] mb-4" style={{ lineHeight: 1.8 }}>
                            Modern healthcare has significantly improved survival after heart disease, cardiac procedures, and respiratory illness, but recovery does not end in the hospital. Many patients experience fatigue, reduced stamina, breathing difficulty, or fear of physical activity after treatment. This is where structured rehabilitation becomes essential.
                        </p>
                        <p className="text-white/40 max-w-2xl mx-auto text-[14px] mb-4" style={{ lineHeight: 1.8 }}>
                            At Pranavayu, we provide doctor supervised rehabilitation care that focuses on restoring heart strength, lung health, physical fitness, and overall vitality. Our programs integrate clinical cardiac rehab, breathing rehabilitation, oxygen therapy, lifestyle medicine, yoga therapy, nutrition therapy, and wellness coaching to help patients regain confidence and improve their quality of life.
                        </p>
                        <div className="inline-flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-[#0FACA3]/15 mt-4">
                            <Heart size={20} className="text-[#0FACA3] shrink-0 mt-0.5" strokeWidth={1.5} />
                            <p className="text-white/60 text-[15px] text-left" style={{ fontWeight: 500, lineHeight: 1.7 }}>
                                Our mission is simple: to help patients recover safely, prevent future disease, and live healthier, stronger lives.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          1. CARDIAC REHABILITATION
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#E74C6F]/8 flex items-center justify-center">
                                <Heart size={22} className="text-[#E74C6F]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-[#1a3a4a]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 600 }}>
                                Cardiac Rehabilitation
                            </h2>
                        </div>
                        <p className="text-[#0FACA3] text-[14px] mb-6" style={{ fontWeight: 500 }}>
                            Structured Heart Recovery for Long-Term Cardiac Health
                        </p>

                        <p className="text-gray-500 text-[15px] mb-4" style={{ lineHeight: 1.8 }}>
                            Cardiac rehabilitation is a medically guided program that helps patients recover after heart disease or cardiac procedures. Research across the world has shown that patients who participate in structured cardiac rehab programs experience better recovery, improved heart function, and reduced risk of future cardiac events.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-2" style={{ lineHeight: 1.8 }}>
                            At Pranavayu, our Cardiac Rehabilitation Program is designed to support individuals who have experienced:
                        </p>
                        <BulletList items={[
                            "Heart Surgery Recovery",
                            "Post Stent Rehab",
                            "Post Angioplasty Rehab",
                            "Post Heart Attack Care",
                            "Chronic Heart Disease",
                        ]} />

                        <p className="text-gray-500 text-[15px] mt-6 mb-2" style={{ lineHeight: 1.8 }}>
                            Through a structured cardiac rehab program, patients gradually rebuild heart strength, heart fitness, and cardiac health under medical supervision.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-2" style={{ lineHeight: 1.8 }}>
                            The program includes:
                        </p>
                        <BulletList items={[
                            "monitored cardiac exercise programs",
                            "heart strength training",
                            "heart recovery therapy",
                            "risk factor management",
                            "lifestyle cardiology guidance",
                            "heart disease prevention strategies",
                        ]} />

                        <p className="text-gray-500 text-[15px] mt-6 mb-2" style={{ lineHeight: 1.8 }}>
                            Our goal is to help patients achieve stronger heart performance, improved cardiac fitness, and long-term heart protection.
                        </p>
                        <p className="text-gray-500 text-[15px]" style={{ lineHeight: 1.8 }}>
                            Cardiac rehabilitation not only improves physical recovery but also helps patients regain confidence in their ability to live a healthy and active life.
                        </p>

                        <Link
                            to="/programs/cardiac-rehabilitation"
                            className="inline-flex items-center gap-2 mt-6 text-[#0B4D6E] text-[14px] hover:gap-3 transition-all"
                            style={{ fontWeight: 500 }}
                        >
                            View Cardiac Rehab Program <ArrowRight size={14} strokeWidth={1.5} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <SectionDivider />

            {/* ═══════════════════════════════════════════════════════════════════
          2. PULMONARY REHABILITATION
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#0FACA3]/8 flex items-center justify-center">
                                <Wind size={22} className="text-[#0FACA3]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-[#1a3a4a]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 600 }}>
                                Pulmonary Rehabilitation
                            </h2>
                        </div>
                        <p className="text-[#0FACA3] text-[14px] mb-6" style={{ fontWeight: 500 }}>
                            Improving Lung Health and Breathing Efficiency
                        </p>

                        <p className="text-gray-500 text-[15px] mb-4" style={{ lineHeight: 1.8 }}>
                            Many patients recovering from illness experience reduced lung capacity or breathing difficulty. Pulmonary rehabilitation and respiratory rehabilitation programs help strengthen the respiratory system and improve oxygen efficiency.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-2" style={{ lineHeight: 1.8 }}>
                            At Pranavayu, our Pulmonary Rehab and Cardio Pulmonary Rehab programs are designed to improve breathing and overall endurance.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-2" style={{ lineHeight: 1.8 }}>
                            These programs include:
                        </p>
                        <BulletList items={[
                            "breathing rehabilitation exercises",
                            "lung rehabilitation training",
                            "respiratory care programs",
                            "breathing therapy techniques",
                            "cardio pulmonary therapy",
                        ]} />
                        <p className="text-gray-500 text-[15px] mt-6" style={{ lineHeight: 1.8 }}>
                            By improving lung health, breathing health, and oxygen utilization, patients can experience improved energy levels, better exercise tolerance, and enhanced overall health recovery.
                        </p>

                        <Link
                            to="/programs/pulmonary-rehabilitation"
                            className="inline-flex items-center gap-2 mt-6 text-[#0B4D6E] text-[14px] hover:gap-3 transition-all"
                            style={{ fontWeight: 500 }}
                        >
                            View Pulmonary Rehab Program <ArrowRight size={14} strokeWidth={1.5} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <SectionDivider />

            {/* ═══════════════════════════════════════════════════════════════════
          3. HYPERBARIC OXYGEN THERAPY
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#6366F1]/8 flex items-center justify-center">
                                <Zap size={22} className="text-[#6366F1]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-[#1a3a4a]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 600 }}>
                                Hyperbaric Oxygen Therapy
                            </h2>
                        </div>
                        <p className="text-[#0FACA3] text-[14px] mb-6" style={{ fontWeight: 500 }}>
                            Supporting Healing Through Advanced Oxygen Therapy
                        </p>

                        <p className="text-gray-500 text-[15px] mb-4" style={{ lineHeight: 1.8 }}>
                            Pranavayu offers Hyperbaric Therapy and HBOT Therapy as part of an advanced approach to medical rehabilitation and healing support.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-4" style={{ lineHeight: 1.8 }}>
                            Hyperbaric oxygen therapy involves breathing oxygen in a controlled environment that enhances oxygen delivery to tissues. Improved oxygen availability supports the body's natural healing mechanisms and may assist recovery in certain medical conditions.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-4" style={{ lineHeight: 1.8 }}>
                            HBOT therapy at Pranavayu is integrated with recovery therapy, healing therapy, and structured rehabilitation care to enhance overall treatment outcomes.
                        </p>
                        <p className="text-gray-500 text-[15px]" style={{ lineHeight: 1.8 }}>
                            Our hyperbaric program is provided under medical supervision as part of a comprehensive oxygen healing and oxygen recovery approach.
                        </p>

                        <Link
                            to="/therapies/hbot"
                            className="inline-flex items-center gap-2 mt-6 text-[#0B4D6E] text-[14px] hover:gap-3 transition-all"
                            style={{ fontWeight: 500 }}
                        >
                            Learn More About HBOT <ArrowRight size={14} strokeWidth={1.5} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <SectionDivider />

            {/* ═══════════════════════════════════════════════════════════════════
          4. MEDICAL REHABILITATION & PHYSICAL RECOVERY
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-[#f6f9fc]">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#0B4D6E]/8 flex items-center justify-center">
                                <Syringe size={22} className="text-[#0B4D6E]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-[#1a3a4a]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 600 }}>
                                Medical Rehabilitation & Physical Recovery Programs
                            </h2>
                        </div>
                        <p className="text-[#0FACA3] text-[14px] mb-6" style={{ fontWeight: 500 }}>
                            Comprehensive Rehabilitation Care
                        </p>

                        <p className="text-gray-500 text-[15px] mb-4" style={{ lineHeight: 1.8 }}>
                            Recovery after illness or surgery often requires structured support to restore physical strength and mobility. Pranavayu provides Medical Rehab and Physical Rehab programs designed to support safe and gradual recovery.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-2" style={{ lineHeight: 1.8 }}>
                            Our rehabilitation programs include:
                        </p>
                        <BulletList items={[
                            "Post Surgery Rehab",
                            "Surgery Recovery Programs",
                            "Body Recovery Programs",
                            "Physical Rehabilitation",
                            "Clinical Therapy and Medical Therapy",
                        ]} />
                        <p className="text-gray-500 text-[15px] mt-6 mb-2" style={{ lineHeight: 1.8 }}>
                            Through structured rehabilitation care and personalized therapy programs, patients can rebuild strength, improve endurance, and regain independence.
                        </p>
                        <p className="text-gray-500 text-[15px]" style={{ lineHeight: 1.8 }}>
                            These programs focus on enhancing mobility, muscle strength, physical fitness, and overall health recovery.
                        </p>

                        <Link
                            to="/programs/post-surgical-recovery"
                            className="inline-flex items-center gap-2 mt-6 text-[#0B4D6E] text-[14px] hover:gap-3 transition-all"
                            style={{ fontWeight: 500 }}
                        >
                            View Recovery Programs <ArrowRight size={14} strokeWidth={1.5} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          5. PREVENTIVE CARDIOLOGY
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#D97706]/8 flex items-center justify-center">
                                <Shield size={22} className="text-[#D97706]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-[#1a3a4a]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 600 }}>
                                Preventive Cardiology
                            </h2>
                        </div>
                        <p className="text-[#0FACA3] text-[14px] mb-6" style={{ fontWeight: 500 }}>
                            Protecting the Heart Before Disease Occurs
                        </p>

                        <p className="text-gray-500 text-[15px] mb-4" style={{ lineHeight: 1.8 }}>
                            One of the most important goals of modern healthcare is preventing heart disease before it develops.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-2" style={{ lineHeight: 1.8 }}>
                            Pranavayu offers specialized programs in Preventive Cardiology and Preventive Health, focusing on identifying risk factors early and helping individuals adopt healthier lifestyles.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-2" style={{ lineHeight: 1.8 }}>
                            Our preventive health services include:
                        </p>
                        <BulletList items={[
                            "comprehensive health screening",
                            "cardiac risk assessment",
                            "heart risk reduction programs",
                            "cardiac prevention strategies",
                            "heart protection plans",
                        ]} />
                        <p className="text-gray-500 text-[15px] mt-6" style={{ lineHeight: 1.8 }}>
                            Through early detection and lifestyle modification, individuals can significantly reduce the risk of heart disease and achieve long-term cardiac wellness and heart longevity.
                        </p>

                        <Link
                            to="/programs/preventive-cardio"
                            className="inline-flex items-center gap-2 mt-6 text-[#0B4D6E] text-[14px] hover:gap-3 transition-all"
                            style={{ fontWeight: 500 }}
                        >
                            View Preventive Programs <ArrowRight size={14} strokeWidth={1.5} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <SectionDivider />

            {/* ═══════════════════════════════════════════════════════════════════
          6. MEDICAL WELLNESS & LIFESTYLE MEDICINE
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#0FACA3]/8 flex items-center justify-center">
                                <Leaf size={22} className="text-[#0FACA3]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-[#1a3a4a]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 600 }}>
                                Medical Wellness & Lifestyle Medicine
                            </h2>
                        </div>
                        <p className="text-[#0FACA3] text-[14px] mb-6" style={{ fontWeight: 500 }}>
                            A Holistic Approach to Healthy Living
                        </p>

                        <p className="text-gray-500 text-[15px] mb-4" style={{ lineHeight: 1.8 }}>
                            At Pranavayu, we believe that long-term health requires more than medical treatment alone. Our Medical Wellness and Holistic Wellness programs integrate evidence-based medicine with lifestyle interventions to support optimal health.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-2" style={{ lineHeight: 1.8 }}>
                            These programs include:
                        </p>
                        <BulletList items={[
                            "lifestyle medicine programs",
                            "healthy living programs",
                            "healthy aging strategies",
                            "longevity care programs",
                        ]} />
                        <p className="text-gray-500 text-[15px] mt-6" style={{ lineHeight: 1.8 }}>
                            The goal is to improve metabolic health, heart wellness, energy levels, and overall vitality, helping individuals maintain a healthy and active life.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionDivider />

            {/* ═══════════════════════════════════════════════════════════════════
          7. YOGA, NUTRITION, FITNESS
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#0FACA3]/8 flex items-center justify-center">
                                <Sparkles size={22} className="text-[#0FACA3]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-[#1a3a4a]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 600 }}>
                                Yoga Therapy, Nutrition Therapy & Fitness Programs
                            </h2>
                        </div>
                        <p className="text-[#0FACA3] text-[14px] mb-6" style={{ fontWeight: 500 }}>
                            Supporting Recovery Through Lifestyle Therapies
                        </p>

                        <p className="text-gray-500 text-[15px] mb-4" style={{ lineHeight: 1.8 }}>
                            Complementary therapies play a vital role in supporting recovery and improving overall well-being.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-2" style={{ lineHeight: 1.8 }}>
                            Pranavayu offers supportive programs including:
                        </p>

                        <div className="grid sm:grid-cols-2 gap-3 mt-4">
                            {[
                                { icon: Sparkles, title: "Yoga Therapy", desc: "for breathing control and relaxation" },
                                { icon: Apple, title: "Nutrition Therapy", desc: "for heart-healthy diet planning" },
                                { icon: Dumbbell, title: "Fitness Therapy", desc: "for improving strength and endurance" },
                                { icon: Users, title: "Wellness Coaching", desc: "for sustainable lifestyle change" },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-3 p-4 rounded-2xl bg-[#f6f9fc] border border-gray-100/60">
                                    <div className="w-9 h-9 rounded-lg bg-[#0FACA3]/8 flex items-center justify-center shrink-0 mt-0.5">
                                        <item.icon size={16} className="text-[#0FACA3]" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <div className="text-[#1a3a4a] text-[14px]" style={{ fontWeight: 600 }}>{item.title}</div>
                                        <div className="text-gray-400 text-[13px]">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-500 text-[15px] mt-6" style={{ lineHeight: 1.8 }}>
                            These programs enhance heart fitness programs, heart strength training, breathing health, and body recovery, helping patients build healthier habits for life.
                        </p>
                    </motion.div>
                </div>
            </section>

            <SectionDivider />

            {/* ═══════════════════════════════════════════════════════════════════
          8. CORPORATE WELLNESS
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-[#f6f9fc]">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#0B4D6E]/8 flex items-center justify-center">
                                <Briefcase size={22} className="text-[#0B4D6E]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-[#1a3a4a]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 600 }}>
                                Corporate Wellness & Executive Health Programs
                            </h2>
                        </div>
                        <p className="text-[#0FACA3] text-[14px] mb-6" style={{ fontWeight: 500 }}>
                            Promoting Health in the Workplace
                        </p>

                        <p className="text-gray-500 text-[15px] mb-4" style={{ lineHeight: 1.8 }}>
                            Pranavayu also provides specialized Corporate Wellness and Executive Health Programs designed for organizations seeking to improve employee health and productivity.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-2" style={{ lineHeight: 1.8 }}>
                            These programs include:
                        </p>
                        <BulletList items={[
                            "workplace wellness initiatives",
                            "employee health programs",
                            "executive health assessments",
                            "preventive health screening",
                        ]} />
                        <p className="text-gray-500 text-[15px] mt-6" style={{ lineHeight: 1.8 }}>
                            Corporate wellness programs help organizations promote healthy living, risk prevention, and improved workforce well-being.
                        </p>

                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 mt-6 text-[#0B4D6E] text-[14px] hover:gap-3 transition-all"
                            style={{ fontWeight: 500 }}
                        >
                            Enquire About Corporate Programs <ArrowRight size={14} strokeWidth={1.5} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          9. TRUSTED CENTER IN VIZAG
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white">
                <div className="max-w-4xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-[#0FACA3]/8 flex items-center justify-center">
                                <MapPin size={22} className="text-[#0FACA3]" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-[#1a3a4a]" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 600 }}>
                                A Trusted Cardiac Rehab Center in Vizag
                            </h2>
                        </div>

                        <p className="text-gray-500 text-[15px] mb-4" style={{ lineHeight: 1.8 }}>
                            Pranavayu is recognized as a specialized Cardiac Rehab Center and Heart Rehab Clinic in Vizag, offering advanced rehabilitation services to patients across India.
                        </p>
                        <p className="text-gray-500 text-[15px] mb-2" style={{ lineHeight: 1.8 }}>
                            Our services include:
                        </p>
                        <BulletList items={[
                            "Cardiac Rehab India programs",
                            "Cardiac Rehab Vizag services",
                            "Heart Recovery Center programs",
                            "Vizag Wellness and India Rehabilitation programs",
                        ]} />
                        <p className="text-gray-500 text-[15px] mt-6" style={{ lineHeight: 1.8 }}>
                            Our multidisciplinary approach combines medical expertise, rehabilitation science, and wellness therapies to deliver comprehensive care.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════════
          10. CTA — BEGIN YOUR JOURNEY
      ═══════════════════════════════════════════════════════════════════ */}
            <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-gradient-to-br from-[#041E2D] to-[#0B4D6E] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(15,172,163,0.12),transparent_60%)]" />
                <div className="relative max-w-3xl mx-auto px-5 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <Stethoscope size={32} className="text-[#0FACA3] mx-auto mb-6" strokeWidth={1.5} />
                        <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.4rem, 2.8vw, 2rem)", fontWeight: 600 }}>
                            Begin Your Journey Toward Better Health
                        </h2>
                        <p className="text-white/50 text-[15px] mb-8 max-w-xl mx-auto" style={{ lineHeight: 1.8 }}>
                            Whether you are recovering from heart disease, surgery, respiratory illness, or seeking preventive wellness, Pranavayu offers comprehensive programs designed to help you regain strength and achieve long-term health.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 max-w-lg mx-auto">
                            {[
                                { emoji: "❤️", text: "Stronger heart health" },
                                { emoji: "💨", text: "Better breathing capacity" },
                                { emoji: "💪", text: "Improved physical fitness" },
                                { emoji: "🌿", text: "Long-term wellness and healthy aging" },
                            ].map((goal) => (
                                <div key={goal.text} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/8">
                                    <div className="text-2xl mb-2">{goal.emoji}</div>
                                    <p className="text-white/60 text-[12px]" style={{ lineHeight: 1.5 }}>{goal.text}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-[#5CE0D8]/80 text-[16px] mb-8" style={{ fontWeight: 500 }}>
                            Your journey toward a healthier heart and stronger life begins at Pranavayu.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            <Link
                                to="/contact"
                                className="px-7 py-3.5 bg-[#0FACA3] text-white rounded-full text-[14px] hover:bg-[#0d9a92] transition-all hover:shadow-lg hover:shadow-[#0FACA3]/25"
                                style={{ fontWeight: 500 }}
                            >
                                Book Consultation
                            </Link>
                            <a
                                href="https://wa.me/917997592222"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-7 py-3.5 bg-[#25D366] text-white rounded-full text-[14px] hover:bg-[#20bd59] transition-all hover:shadow-lg hover:shadow-[#25D366]/25 inline-flex items-center gap-2"
                            >
                                <MessageCircle size={15} strokeWidth={1.5} /> WhatsApp Us
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
