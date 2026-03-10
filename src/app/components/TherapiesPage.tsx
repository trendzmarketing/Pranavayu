import { TherapiesSection } from "./TherapiesSection";
import { CTASection } from "./CTASection";
import { useSEO } from "../hooks/useSEO";
import { organizationSchema, buildBreadcrumbSchema } from "../seo/schemas";
import { motion } from "motion/react";

export function TherapiesPage() {
    useSEO({
        title: "Advanced Therapies | HBOT, Shockwave, Pelvic Chair & More | Pranavayu",
        description:
            "Explore advanced therapies at Pranavayu Visakhapatnam — Hyperbaric Oxygen Therapy (HBOT), Shockwave Therapy, Pelvic Chair, Hydrogen Inhalation & Zero Gravity Gait Training.",
        keywords:
            "HBOT Therapy, Hyperbaric Therapy, Oxygen Therapy, Oxygen Healing, Oxygen Recovery, Breathing Therapy, Breathing Rehabilitation, Respiratory Rehabilitation, Lung Rehabilitation, Lung Recovery, Respiratory Care, Clinical Therapy, Medical Therapy, Healing Therapy, Recovery Therapy, Cardio Pulmonary Therapy, Pulmonary Rehab, Heart Therapy, Cardiac Health, Lung Health, Breathing Health, Physical Rehab, Body Recovery",
        canonicalPath: "/therapies",
        schema: [
            organizationSchema,
            buildBreadcrumbSchema([
                { name: "Home", url: "/" },
                { name: "Therapies", url: "/therapies" },
            ]),
        ],
    });

    return (
        <>
            <section className="pt-32 lg:pt-36 pb-14 bg-[#062A3E]">
                <div className="max-w-6xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-[#0FACA3] text-[11px] tracking-[0.2em] uppercase mb-4">Our Therapies</p>
                        <h1 className="text-white mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600 }}>
                            Advanced Therapeutic Technologies
                        </h1>
                        <p className="text-white/50 text-[14px]">
                            Cutting-edge therapies supervised by Dr. Harivadan Lukka for accelerated, evidence-based recovery.
                        </p>
                    </motion.div>
                </div>
            </section>
            <TherapiesSection />
            <CTASection />
        </>
    );
}
