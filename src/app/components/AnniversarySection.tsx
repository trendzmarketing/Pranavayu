import { motion } from "motion/react";
import { useState } from "react";
import { Check, ChevronDown, Heart, Award } from "lucide-react";

const highlights = [
    "Hyperbaric Oxygen Therapy (HBOT)",
    "Pelvic Chair Therapy",
    "Zero Gravity Gait Training",
    "Post-Pregnancy Rehabilitation",
    "Cardio-Pulmonary & Neurovascular Care",
];

export function AnniversarySection() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-white relative overflow-hidden">
            {/* Subtle decorative accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0FACA3]/30 to-transparent" />

            <div className="max-w-6xl mx-auto px-5 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0FACA3]/10 text-[#0FACA3] text-[12px] tracking-wider uppercase mb-5">
                        <Award size={14} />
                        Milestone
                    </div>
                    <h2
                        className="text-[#1a3a4a] mb-4"
                        style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.25rem)", fontWeight: 600, lineHeight: 1.25 }}
                    >
                        Celebrating 1 Year of Transforming Lives
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                        We are proud to celebrate one year of delivering advanced rehabilitation therapies
                        and compassionate care to every patient who walks through our doors.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
                    {/* Video */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-black border border-gray-100">
                            <div className="pt-[56.25%] relative w-full">
                                <iframe
                                    className="absolute inset-0 w-full h-full"
                                    src="https://www.youtube.com/embed/-UExmxsZ-CA?rel=0"
                                    title="Pranavayu Rehabilitation Center – 1st Anniversary Celebration"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <Heart size={18} className="text-[#0FACA3]" />
                            <h3 className="text-[#1a3a4a] text-[20px] md:text-[22px]" style={{ fontWeight: 600 }}>
                                A Year of Hope, Healing & Health
                            </h3>
                        </div>

                        <p className="text-gray-500 text-[15px] mb-8" style={{ lineHeight: 1.7 }}>
                            Over the past year, our dedicated team has worked tirelessly to provide world-class
                            treatments and structured rehabilitation programs that have helped patients regain
                            strength, mobility, and quality of life.
                        </p>

                        <div className="space-y-3 mb-6">
                            {highlights.slice(0, 3).map((item, idx) => (
                                <div key={idx} className="flex gap-3 items-center">
                                    <div className="w-6 h-6 rounded-full bg-[#0FACA3]/10 flex items-center justify-center shrink-0">
                                        <Check size={12} className="text-[#0FACA3]" strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-600 text-[14px]">{item}</span>
                                </div>
                            ))}

                            <motion.div
                                initial={false}
                                animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
                                className="overflow-hidden space-y-3"
                            >
                                {highlights.slice(3).map((item, idx) => (
                                    <div key={idx} className="flex gap-3 items-center">
                                        <div className="w-6 h-6 rounded-full bg-[#0FACA3]/10 flex items-center justify-center shrink-0">
                                            <Check size={12} className="text-[#0FACA3]" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-600 text-[14px]">{item}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="flex items-center gap-2 text-[#0FACA3] text-[14px] hover:text-[#0b827b] transition-colors w-fit group"
                            style={{ fontWeight: 500 }}
                        >
                            {expanded ? "Show less" : "View all therapies"}
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${expanded ? "rotate-180" : "group-hover:translate-y-0.5"}`}
                            />
                        </button>
                    </motion.div>
                </div>

                {/* Full-width motto strip */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 bg-gradient-to-r from-[#0FACA3]/5 via-[#0FACA3]/10 to-[#0FACA3]/5 rounded-2xl p-8 md:p-10 border border-[#0FACA3]/10 flex flex-col md:flex-row items-center gap-6 md:gap-10"
                >
                    <div className="shrink-0">
                        <div className="w-14 h-14 rounded-full bg-[#0FACA3]/15 flex items-center justify-center">
                            <Heart size={24} className="text-[#0FACA3]" />
                        </div>
                    </div>
                    <div>
                        <p className="text-[#1a3a4a] text-[17px] md:text-[19px] italic mb-2" style={{ fontWeight: 600 }}>
                            "Breathe Life into Wellness"
                        </p>
                        <p className="text-gray-500 text-[14px]" style={{ lineHeight: 1.7 }}>
                            Thank you for trusting us on your journey to wellness. This milestone is a reminder
                            of our mission — to bring hope, healing, and health to every patient.
                            Here's to many more years of healing together. 🙏
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
