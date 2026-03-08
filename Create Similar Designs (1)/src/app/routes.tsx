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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "doctor", Component: DoctorPage },
      { path: "therapies/:therapyId", Component: TherapyPage },
      { path: "programs", Component: ProgramsOverview },
      { path: "programs/:programId", Component: ProgramPage },
      { path: "conditions", Component: ConditionsPage },
      { path: "patient-journey", Component: PatientJourneyPage },
      { path: "contact", Component: ContactPage },
      { path: "international", Component: InternationalPage },
      { path: "privacy", Component: PrivacyPolicyPage },
      { path: "terms", Component: TermsPage },
      { path: "*", Component: HomePage },
    ],
  },
]);