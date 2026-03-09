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
