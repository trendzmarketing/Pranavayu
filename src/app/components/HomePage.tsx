import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { WhyRehabSection } from "./WhyRehabSection";
import { DoctorSupervisedSection } from "./DoctorSupervisedSection";
import { CoreProgramsGrid } from "./CoreProgramsGrid";
import { ProgramsSection } from "./ProgramsSection";
import { TherapiesSection } from "./TherapiesSection";
import { DoctorSection } from "./DoctorSection";
import { ConditionsSection } from "./ConditionsSection";
import { PatientJourney } from "./PatientJourney";
import { InternationalBlock } from "./InternationalBlock";
import { TestimonialsSection } from "./TestimonialsSection";
import { FacilitySection } from "./FacilitySection";
import { AnniversarySection } from "./AnniversarySection";
import { TrustSection } from "./TrustSection";
import { CTASection } from "./CTASection";
import { useSEO } from "../hooks/useSEO";
import { organizationSchema, websiteSchema, physicianSchema } from "../seo/schemas";

export function HomePage() {
  useSEO({
    title: "Pranavayu | Advanced Cardiac Rehabilitation Center in Visakhapatnam",
    description:
      "Pranavayu is Visakhapatnam's premier cardiac rehabilitation center — offering Cardiac Rehab, Pulmonary Rehab, HBOT, Preventive Cardiology, Lifestyle Medicine, and Corporate Wellness under Dr. Harivadan Lukka (M.Ch Cardiothoracic Surgery).",
    keywords:
      "Cardiac Rehab, Cardiac Rehabilitation, Heart Care, Heart Rehab Program, Heart Recovery Care, Cardiac Rehab Vizag, Cardiac Rehab India, HBOT Therapy, Hyperbaric Therapy, Pulmonary Rehab, Breathing Rehabilitation, Lung Rehabilitation, Respiratory Rehabilitation, Medical Rehab, Health Recovery, Rehabilitation Care, Yoga Therapy, Heart Surgery Recovery, Post Surgery Rehab, Post Stent Rehab, Post Angioplasty Rehab, Post Heart Attack Care, Heart Disease Prevention, Cardio Pulmonary Rehab, Doctor Supervised Rehab, Clinical Cardiac Rehab, Medical Rehabilitation, Advanced Cardiac Rehab, Structured Cardiac Rehab, Cardiac Rehab Center, Heart Rehab Clinic, Cardiac Recovery Program, Heart Recovery, Heart Wellness, Heart Fitness, Heart Strength, Cardiac Health, Lung Health, Preventive Cardiology, Preventive Health, Lifestyle Medicine, Holistic Wellness, Medical Wellness, Vizag Rehab, India Rehabilitation, Vizag Wellness, Heart Rehabilitation, Heart Health Program, Cardiac Wellness, Lifestyle Cardiology, Healthy Heart Program, Heart Recovery Center",
    canonicalPath: "/",
    schema: [organizationSchema, websiteSchema, physicianSchema],
  });

  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyRehabSection />
      <DoctorSupervisedSection />
      <CoreProgramsGrid />
      <ProgramsSection />
      <TherapiesSection />
      <DoctorSection />
      <PatientJourney />
      <ConditionsSection />
      <InternationalBlock />
      <TestimonialsSection />
      <FacilitySection />
      <AnniversarySection />
      <TrustSection />
      <CTASection />
    </>
  );
}
