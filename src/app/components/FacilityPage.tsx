import { FacilitySection } from "./FacilitySection";
import { CTASection } from "./CTASection";
import { useSEO } from "../hooks/useSEO";
import { organizationSchema, buildBreadcrumbSchema } from "../seo/schemas";
import { motion } from "motion/react";

export function FacilityPage() {
    useSEO({
        title: "Our Facility | State-of-the-Art Rehabilitation Center | Pranavayu",
        description:
            "Tour Pranavayu's advanced rehabilitation facility in Maharanipeta, Visakhapatnam — equipped with HBOT chambers, Pelvic Chair, Shockwave therapy & dedicated monitoring systems.",
        canonicalPath: "/facility",
        schema: [
            organizationSchema,
            buildBreadcrumbSchema([
                { name: "Home", url: "/" },
                { name: "Our Facility", url: "/facility" },
            ]),
        ],
    });

    return (
        <>
            <section className="pt-32 lg:pt-36 pb-14 bg-[#062A3E]">
                <div className="max-w-6xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                        <p className="text-[#0FACA3] text-[11px] tracking-[0.2em] uppercase mb-4">Our Infrastructure</p>
                        <h1 className="text-white mb-2" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600 }}>
                            A Facility Built for Precision Recovery
                        </h1>
                        <p className="text-white/50 text-[14px]">
                            State-of-the-art equipment and a calming environment designed for optimal rehabilitation outcomes.
                        </p>
                    </motion.div>
                </div>
            </section>
            <FacilitySection />
            <CTASection />
        </>
    );
}
