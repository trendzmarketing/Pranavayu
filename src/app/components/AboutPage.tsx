import { AboutSection } from "./AboutSection";
import { DoctorSection } from "./DoctorSection";
import { AnniversarySection } from "./AnniversarySection";
import { CTASection } from "./CTASection";
import { useSEO } from "../hooks/useSEO";
import { organizationSchema, buildBreadcrumbSchema } from "../seo/schemas";

export function AboutPage() {
    useSEO({
        title: "About Pranavayu | Leading Rehabilitation Center in Visakhapatnam",
        description:
            "Learn about Pranavayu's mission, story, and commitment to advanced cardiac, pulmonary & neurovascular rehabilitation under Dr. Harivadan Lukka in Visakhapatnam.",
        keywords:
            "Cardiac Rehab Center, Heart Rehab Clinic, Medical Rehabilitation, Advanced Cardiac Rehab, Heart Care, Cardiac Rehabilitation, Rehabilitation Care, Health Recovery, Medical Wellness, Holistic Wellness, Vizag Rehab, Cardiac Rehab Vizag, India Rehabilitation, Doctor Supervised Rehab, Clinical Cardiac Rehab, Lifestyle Medicine, Heart Recovery, Cardiac Health, Healthy Aging, Longevity Care",
        canonicalPath: "/about",
        schema: [
            organizationSchema,
            buildBreadcrumbSchema([
                { name: "Home", url: "/" },
                { name: "About Us", url: "/about" },
            ]),
        ],
    });

    return (
        <>
            <AboutSection />
            <DoctorSection />
            <AnniversarySection />
            <CTASection />
        </>
    );
}
