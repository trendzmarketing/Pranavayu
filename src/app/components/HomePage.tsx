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

export function HomePage() {
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
