import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { DoctorPage } from "./components/DoctorPage";
import { TherapyPage } from "./components/TherapyPage";
import { ContactPage } from "./components/ContactPage";
import { InternationalPage } from "./components/InternationalPage";
import { ProgramPage } from "./components/ProgramPage";
import { ProgramsOverview } from "./components/ProgramsOverview";
import { ConditionsPage } from "./components/ConditionsPage";
import { PatientJourneyPage } from "./components/PatientJourneyPage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { TermsPage } from "./components/TermsPage";
import { AboutPage } from "./components/AboutPage";
import { TherapiesPage } from "./components/TherapiesPage";
import { FacilityPage } from "./components/FacilityPage";
import { TestimonialsPage } from "./components/TestimonialsPage";
import { ServicesPage } from "./components/ServicesPage";
import { CardiacRehabPage } from "./components/CardiacRehabPage";
import { PulmonaryRehabPage } from "./components/PulmonaryRehabPage";
import { HBOTPage } from "./components/HBOTPage";
import { MedicalRehabPage } from "./components/MedicalRehabPage";
import { PreventiveCardiologyPage } from "./components/PreventiveCardiologyPage";
import { LifestyleMedicinePage } from "./components/LifestyleMedicinePage";
import { YogaNutritionPage } from "./components/YogaNutritionPage";
import { CorporateWellnessPage } from "./components/CorporateWellnessPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "services", Component: ServicesPage },
      { path: "cardiac-rehabilitation", Component: CardiacRehabPage },
      { path: "pulmonary-rehabilitation", Component: PulmonaryRehabPage },
      { path: "hyperbaric-oxygen-therapy", Component: HBOTPage },
      { path: "medical-rehabilitation", Component: MedicalRehabPage },
      { path: "preventive-cardiology", Component: PreventiveCardiologyPage },
      { path: "lifestyle-medicine", Component: LifestyleMedicinePage },
      { path: "yoga-nutrition-therapy", Component: YogaNutritionPage },
      { path: "corporate-wellness", Component: CorporateWellnessPage },
      { path: "about", Component: AboutPage },
      { path: "doctor", Component: DoctorPage },
      { path: "therapies", Component: TherapiesPage },
      { path: "therapies/:therapyId", Component: TherapyPage },
      { path: "programs", Component: ProgramsOverview },
      { path: "programs/:programId", Component: ProgramPage },
      { path: "conditions", Component: ConditionsPage },
      { path: "patient-journey", Component: PatientJourneyPage },
      { path: "facility", Component: FacilityPage },
      { path: "testimonials", Component: TestimonialsPage },
      { path: "contact", Component: ContactPage },
      { path: "international", Component: InternationalPage },
      { path: "privacy", Component: PrivacyPolicyPage },
      { path: "terms", Component: TermsPage },
      { path: "*", Component: HomePage },
    ],
  },
]);
