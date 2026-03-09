import { TestimonialsSection } from "./TestimonialsSection";
import { CTASection } from "./CTASection";
import { useSEO } from "../hooks/useSEO";
import { organizationSchema, buildBreadcrumbSchema } from "../seo/schemas";
import { motion } from "motion/react";

export function TestimonialsPage() {
    useSEO({
        title: "Patient Reviews & Testimonials | Pranavayu Visakhapatnam",
        description:
            "Read real patient stories and reviews from Pranavayu Rehabilitation Center, Visakhapatnam. Discover how Dr. Harivadan Lukka's team helped patients recover from cardiac, pulmonary & neurovascular conditions.",
        canonicalPath: "/testimonials",
        schema: [
            organizationSchema,
            buildBreadcrumbSchema([
                { name: "Home", url: "/" },
                { name: "Patient Reviews", url: "/testimonials" },
            ]),
        ],
    });

    return (
        <>
            <section className="pt-32 lg:pt-36 pb-14 bg-[#062A3E]">
                <div className="max-w-6xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-[#0FACA3] text-[11px] tracking-[0.2em] uppercase mb-4">Patient Stories</p>
                        <h1 className="text-white mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600 }}>
                            Real Recoveries. Real Results.
                        </h1>
                        <p className="text-white/50 text-[14px]">
                            Hear from patients who experienced measurable recovery at Pranavayu Rehabilitation Center.
                        </p>
                    </motion.div>
                </div>
            </section>
            <TestimonialsSection />
            <CTASection />
        </>
    );
}
