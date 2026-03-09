import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ProgramsSection } from "./ProgramsSection";
import { TherapiesSection } from "./TherapiesSection";
import { DoctorSection } from "./DoctorSection";
import { ConditionsSection } from "./ConditionsSection";
import { PatientJourney } from "./PatientJourney";
import { InternationalBlock } from "./InternationalBlock";
import { TestimonialsSection } from "./TestimonialsSection";
import { FacilitySection } from "./FacilitySection";
import { AnniversarySection } from "./AnniversarySection";
import { CTASection } from "./CTASection";
import { useSEO } from "../hooks/useSEO";
import { organizationSchema, websiteSchema, physicianSchema } from "../seo/schemas";

export function HomePage() {
  useSEO({
    title: "Pranavayu | Advanced Rehabilitation Center in Visakhapatnam",
    description:
      "Pranavayu is Visakhapatnam's leading rehabilitation institute offering HBOT, Shockwave Therapy, Pelvic Chair Therapy & Cardiac Rehabilitation under Dr. Harivadan Lukka (MBBS, MS, M.Ch).",
    canonicalPath: "/",
    schema: [organizationSchema, websiteSchema, physicianSchema],
  });

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TherapiesSection />
      <DoctorSection />
      <PatientJourney />
      <ConditionsSection />
      <InternationalBlock />
      <TestimonialsSection />
      <FacilitySection />
      <AnniversarySection />
      <CTASection />
    </>
  );
}
