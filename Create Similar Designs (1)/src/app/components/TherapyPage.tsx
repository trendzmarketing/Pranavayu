import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Check, Shield, Users, HelpCircle, ChevronDown, Clock, AlertTriangle, FileText, ArrowRight } from "lucide-react";
import { useState } from "react";

interface TherapyData {
  title: string;
  tagline: string;
  description: string;
  mechanism: string;
  steps: { title: string; desc: string }[];
  conditions: string[];
  benefits: string[];
  safety: string[];
  contraindications: string[];
  procedure: { label: string; value: string }[];
  research: { title: string; source: string }[];
  faqs: { q: string; a: string }[];
  ctaLine: string;
}

const therapyData: Record<string, TherapyData> = {
  hbot: {
    title: "Hyperbaric Oxygen Therapy (HBOT)",
    tagline: "Advanced oxygen-based recovery for cardiac, pulmonary & neurological healing.",
    description: "Hyperbaric Oxygen Therapy involves breathing pure oxygen in a pressurized chamber at 1.5–3 times normal atmospheric pressure. This dramatically increases oxygen concentration in the blood plasma, promoting rapid tissue repair, reducing inflammation, stimulating angiogenesis (new blood vessel formation), and activating cellular repair mechanisms at a molecular level.",
    mechanism: "Under elevated pressure, blood plasma dissolves up to 20 times more oxygen than at normal atmospheric conditions. This oxygen-rich plasma reaches tissues that red blood cells cannot easily access, including areas with compromised circulation. The increased oxygen triggers a cascade of healing responses including stem cell mobilization, collagen synthesis, and immune cell activation.",
    steps: [
      { title: "Increased Oxygen Pressure", desc: "The chamber is pressurized to 1.5–3 ATA, increasing the partial pressure of oxygen significantly." },
      { title: "Plasma Oxygen Dissolution", desc: "Pure oxygen dissolves into blood plasma at concentrations far exceeding normal physiological levels." },
      { title: "Cellular Repair Activation", desc: "Oxygen-rich plasma reaches damaged tissues, triggering cellular repair mechanisms and stem cell mobilization." },
      { title: "Reduced Inflammation", desc: "High-dose oxygen modulates inflammatory pathways, reducing swelling and promoting faster healing." },
      { title: "Tissue Regeneration", desc: "Sustained oxygen delivery promotes angiogenesis, collagen formation, and long-term tissue remodeling." },
    ],
    conditions: ["Post-Bypass Recovery", "Chronic Non-Healing Wounds", "Diabetic Ulcers", "Stroke Recovery", "Long COVID Fatigue", "Pulmonary Dysfunction"],
    benefits: [
      "Accelerates wound healing by 40–60%",
      "Reduces post-surgical inflammation significantly",
      "Enhances immune system function and infection resistance",
      "Promotes new blood vessel formation (angiogenesis)",
      "Supports neuroplasticity in brain injury recovery",
      "Improves fatigue and energy levels in chronic conditions",
    ],
    safety: [
      "FDA-approved and clinically validated worldwide",
      "Administered under continuous medical supervision",
      "Comprehensive pre-treatment screening protocol",
      "Real-time patient monitoring during every session",
    ],
    contraindications: [
      "Untreated pneumothorax (collapsed lung)",
      "Certain chemotherapy medications (concurrent use)",
      "Severe claustrophobia (alternative protocols available)",
      "Active upper respiratory infections",
    ],
    procedure: [
      { label: "Session Duration", value: "60–90 minutes per session" },
      { label: "Treatment Course", value: "20–40 sessions depending on condition" },
      { label: "Comfort Level", value: "Completely painless — mild ear pressure possible" },
      { label: "Monitoring", value: "Continuous vitals monitoring throughout" },
    ],
    research: [
      { title: "Hyperbaric oxygen therapy for wound healing", source: "National Institutes of Health (NIH)" },
      { title: "HBOT in cardiac rehabilitation outcomes", source: "Undersea and Hyperbaric Medical Society (UHMS)" },
      { title: "Neuroplasticity enhancement through HBOT", source: "Journal of Neurotrauma, 2023" },
    ],
    faqs: [
      { q: "Is HBOT safe after bypass surgery?", a: "Yes, HBOT is safe and beneficial after bypass surgery. Dr. Lukka evaluates each patient individually to determine the optimal timing and protocol for post-surgical HBOT." },
      { q: "How many sessions are required?", a: "Most conditions require 20–40 sessions. Your personalized treatment plan will be determined after a comprehensive assessment with Dr. Lukka." },
      { q: "Is it painful?", a: "HBOT is completely painless. Some patients experience mild ear pressure similar to air travel, which can be easily equalized with swallowing or jaw movement." },
      { q: "When will I see results?", a: "Many patients report improvements within the first 5–10 sessions. Full benefits typically manifest over the complete treatment course." },
      { q: "Can elderly patients undergo HBOT?", a: "Yes, HBOT is safe for elderly patients. Pre-treatment screening ensures suitability, and our team provides full assistance throughout every session." },
    ],
    ctaLine: "Restore Oxygen. Restore Function. Restore Life.",
  },
  cryotherapy: {
    title: "Whole Body Cryotherapy",
    tagline: "Controlled cold exposure for inflammation reduction, pain relief & accelerated recovery.",
    description: "Whole Body Cryotherapy exposes the body to extremely cold temperatures (–110°C to –140°C) for 2–3 minutes in a controlled cryo-chamber. This triggers a powerful systemic anti-inflammatory response, releases endorphins, boosts circulation, and accelerates the body's natural recovery processes. Originally developed for treating rheumatoid arthritis, it is now widely used in rehabilitation medicine.",
    mechanism: "When exposed to extreme cold, peripheral blood vessels constrict (vasoconstriction), redirecting blood to core organs where it becomes enriched with oxygen and nutrients. Upon exiting the chamber, blood vessels dilate (vasodilation), flooding tissues with this enriched blood. This cycle reduces inflammation, clears metabolic waste, and stimulates the release of anti-inflammatory cytokines and endorphins.",
    steps: [
      { title: "Rapid Cooling Exposure", desc: "The body is exposed to temperatures between –110°C to –140°C in a controlled cryo-chamber for 2–3 minutes." },
      { title: "Vasoconstriction Response", desc: "Peripheral blood vessels constrict, redirecting blood to the body's core organs for oxygen and nutrient enrichment." },
      { title: "Endorphin & Cytokine Release", desc: "The nervous system triggers the release of endorphins, norepinephrine, and anti-inflammatory cytokines." },
      { title: "Post-Session Vasodilation", desc: "Upon exiting, blood vessels dilate and nutrient-rich blood floods back to peripheral tissues." },
      { title: "Systemic Recovery Activation", desc: "The body's natural repair mechanisms are amplified — reducing pain, swelling, and accelerating tissue healing." },
    ],
    conditions: ["Post-Surgical Inflammation", "Chronic Pain Syndromes", "Rheumatoid Arthritis", "Fibromyalgia", "Sports Injuries", "Muscle Spasticity"],
    benefits: [
      "Reduces systemic inflammation by up to 50%",
      "Provides rapid pain relief through endorphin release",
      "Accelerates muscle and joint recovery post-surgery",
      "Improves sleep quality and reduces stress hormones",
      "Boosts metabolism and cellular energy production",
      "Enhances mood through natural endorphin pathways",
    ],
    safety: [
      "Medical-grade cryotherapy chamber with precise temperature control",
      "Sessions supervised by trained medical staff",
      "Pre-session health screening and vitals check",
      "Continuous monitoring with emergency stop capability",
    ],
    contraindications: [
      "Uncontrolled hypertension",
      "Raynaud's disease (severe cold sensitivity)",
      "Acute cardiac events within the last 6 months",
      "Pregnancy",
    ],
    procedure: [
      { label: "Session Duration", value: "2–3 minutes per session" },
      { label: "Treatment Course", value: "10–20 sessions depending on condition" },
      { label: "Comfort Level", value: "Intense cold sensation that subsides quickly" },
      { label: "Recovery Time", value: "No downtime — resume normal activities immediately" },
    ],
    research: [
      { title: "Whole body cryotherapy in rehabilitation", source: "European Journal of Applied Physiology" },
      { title: "Cryotherapy for chronic inflammation", source: "Journal of Clinical Medicine, 2022" },
      { title: "Cold exposure and pain management", source: "Pain Medicine Journal, 2021" },
    ],
    faqs: [
      { q: "Is cryotherapy safe for heart patients?", a: "Cryotherapy can be safe for stable cardiac patients, but requires careful screening. Dr. Lukka evaluates each patient's cardiac status before recommending this therapy." },
      { q: "How cold does it actually get?", a: "The chamber reaches –110°C to –140°C. While this sounds extreme, sessions last only 2–3 minutes and are closely monitored for safety." },
      { q: "How soon will I feel results?", a: "Most patients report pain relief and improved energy after the very first session. Cumulative benefits build over 10–20 sessions." },
      { q: "Can elderly patients use cryotherapy?", a: "Yes, with proper medical screening. Session duration and temperature may be adjusted based on individual tolerance and medical history." },
    ],
    ctaLine: "Reduce Pain. Reduce Inflammation. Restore Vitality.",
  },
  shockwave: {
    title: "Extracorporeal Shockwave Therapy",
    tagline: "Acoustic wave technology for chronic pain resolution and tissue regeneration.",
    description: "Extracorporeal Shockwave Therapy (ESWT) delivers focused acoustic pressure waves to targeted areas of the body. These shockwaves stimulate neovascularization (new blood vessel growth), break down calcified deposits, release growth factors, and trigger the body's natural repair processes. It is particularly effective for chronic musculoskeletal conditions that have not responded to conventional treatment.",
    mechanism: "Acoustic shockwaves create controlled micro-trauma at the cellular level, which stimulates the body's healing response. The mechanical energy increases cell membrane permeability, promotes the release of growth factors (VEGF, eNOS), and activates stem cell recruitment to the treated area. This results in accelerated tissue remodeling, pain reduction through nerve desensitization, and improved blood flow.",
    steps: [
      { title: "Acoustic Wave Generation", desc: "A device generates focused or radial acoustic pressure waves directed at the treatment area." },
      { title: "Controlled Micro-Trauma", desc: "Shockwaves create micro-damage at the cellular level, stimulating the body's natural repair cascade." },
      { title: "Growth Factor Release", desc: "Cells release VEGF, eNOS, and other growth factors that promote tissue healing and regeneration." },
      { title: "Neovascularization", desc: "New blood vessels form in the treatment area, improving oxygen and nutrient delivery to damaged tissues." },
      { title: "Pain Modulation", desc: "Nerve fibers are desensitized, providing both immediate and long-term pain relief." },
    ],
    conditions: ["Plantar Fasciitis", "Tennis/Golfer's Elbow", "Calcific Tendinitis", "Chronic Back Pain", "Erectile Dysfunction", "Non-Healing Fractures"],
    benefits: [
      "80%+ success rate for chronic tendon conditions",
      "Non-invasive alternative to surgery for many conditions",
      "Stimulates natural tissue healing and regeneration",
      "Breaks down calcified deposits in joints and tendons",
      "Provides long-lasting pain relief (not temporary masking)",
      "No anesthesia or recovery downtime required",
    ],
    safety: [
      "FDA-cleared for musculoskeletal conditions",
      "Non-invasive with no incisions or injections",
      "Performed by trained rehabilitation specialists",
      "Evidence-based treatment protocols",
    ],
    contraindications: [
      "Blood clotting disorders or anticoagulant therapy",
      "Active infection at the treatment site",
      "Malignant tumors in the treatment area",
      "Pregnancy (treatment near the uterus)",
    ],
    procedure: [
      { label: "Session Duration", value: "15–20 minutes per session" },
      { label: "Treatment Course", value: "3–6 sessions, 1 week apart" },
      { label: "Comfort Level", value: "Mild discomfort during treatment, manageable" },
      { label: "Recovery Time", value: "Minimal — mild soreness for 24–48 hours" },
    ],
    research: [
      { title: "ESWT for chronic tendinopathy", source: "British Journal of Sports Medicine, 2022" },
      { title: "Shockwave therapy in cardiac rehabilitation", source: "International Journal of Cardiology" },
      { title: "Efficacy of ESWT for plantar fasciitis", source: "The Lancet, 2020" },
    ],
    faqs: [
      { q: "Is shockwave therapy painful?", a: "Most patients describe mild discomfort during treatment that is easily tolerable. Intensity is adjusted based on your comfort level." },
      { q: "How many sessions do I need?", a: "Typically 3–6 sessions spaced about a week apart. Improvement often begins after the first or second session." },
      { q: "Can it replace surgery?", a: "In many cases, yes. Shockwave therapy has shown success rates comparable to surgical intervention for conditions like plantar fasciitis and calcific tendinitis." },
      { q: "Are there any side effects?", a: "Side effects are minimal — typically mild soreness or redness at the treatment site for 24–48 hours." },
    ],
    ctaLine: "Break Through Pain. Rebuild Tissue. Restore Movement.",
  },
  hydrogen: {
    title: "Hydrogen Inhalation Therapy",
    tagline: "Molecular hydrogen for powerful antioxidant protection and cellular recovery.",
    description: "Hydrogen Inhalation Therapy delivers molecular hydrogen (H2) gas through a nasal cannula for direct absorption into the bloodstream. As the smallest molecule in existence, hydrogen readily penetrates cell membranes and the blood-brain barrier, selectively neutralizing the most toxic free radicals (hydroxyl radicals) while preserving beneficial reactive oxygen species that are essential for normal cellular signaling.",
    mechanism: "Molecular hydrogen works through multiple pathways: it selectively scavenges hydroxyl radicals (the most cytotoxic ROS), upregulates endogenous antioxidant enzymes (SOD, catalase, GPx), modulates inflammatory signaling pathways (NF-kB), and activates the Nrf2 pathway — the body's master antioxidant regulator. Unlike conventional antioxidants, H2 does not disrupt normal redox signaling, making it uniquely safe and effective.",
    steps: [
      { title: "Hydrogen Gas Delivery", desc: "Medical-grade molecular hydrogen is delivered via nasal cannula at controlled concentrations (2–4%)." },
      { title: "Rapid Systemic Absorption", desc: "H2 molecules diffuse rapidly through lung tissue into the bloodstream, reaching all organs within minutes." },
      { title: "Selective Radical Scavenging", desc: "Hydrogen selectively neutralizes hydroxyl radicals while preserving beneficial reactive oxygen species." },
      { title: "Antioxidant Pathway Activation", desc: "The Nrf2 pathway is activated, upregulating the body's endogenous antioxidant defense systems." },
      { title: "Cellular Protection & Repair", desc: "Reduced oxidative stress and inflammation enable enhanced cellular repair and mitochondrial function." },
    ],
    conditions: ["Post-COVID Fatigue & Brain Fog", "Chronic Inflammatory Conditions", "Neurodegenerative Disorders", "Metabolic Syndrome", "Radiation Therapy Side Effects", "Chronic Fatigue Syndrome"],
    benefits: [
      "Selectively targets the most harmful free radicals",
      "Crosses the blood-brain barrier for neuroprotection",
      "No known toxicity at therapeutic concentrations",
      "Reduces systemic inflammation markers (CRP, IL-6)",
      "Improves mitochondrial function and energy production",
      "Enhances recovery from chronic fatigue and brain fog",
    ],
    safety: [
      "Non-toxic at therapeutic concentrations — no adverse effects reported",
      "Administered under medical supervision with calibrated equipment",
      "Pre-therapy assessment and monitoring protocol",
      "Extensively studied with over 1,500 peer-reviewed publications",
    ],
    contraindications: [
      "No absolute contraindications established in medical literature",
      "Caution advised with active pulmonary infections",
      "Smoking should be avoided during treatment period",
      "Discuss all medications with your doctor before starting",
    ],
    procedure: [
      { label: "Session Duration", value: "30–60 minutes per session" },
      { label: "Treatment Course", value: "10–30 sessions depending on condition" },
      { label: "Comfort Level", value: "Completely comfortable — breathing naturally through a cannula" },
      { label: "Recovery Time", value: "No downtime — can be combined with other therapies" },
    ],
    research: [
      { title: "Molecular hydrogen in clinical medicine", source: "Nature Medicine Reviews, 2023" },
      { title: "H2 therapy for post-COVID syndrome", source: "Journal of Medical Virology, 2022" },
      { title: "Antioxidant effects of molecular hydrogen", source: "Free Radical Research, 2021" },
    ],
    faqs: [
      { q: "Is hydrogen gas safe to breathe?", a: "Yes, at therapeutic concentrations (2–4%), hydrogen gas is completely safe. It has been used in deep-sea diving for decades and has no known toxic effects." },
      { q: "How does it differ from regular oxygen therapy?", a: "While oxygen therapy increases O2 delivery, hydrogen therapy specifically targets oxidative stress and inflammation through antioxidant pathways — they serve complementary purposes." },
      { q: "Can it help with Long COVID?", a: "Emerging research shows promising results for Long COVID symptoms including fatigue, brain fog, and breathlessness. Our patients have reported significant improvements." },
      { q: "How soon will I notice benefits?", a: "Some patients notice improved energy and mental clarity within the first few sessions. Measurable biomarker improvements typically appear after 10+ sessions." },
    ],
    ctaLine: "Neutralize Damage. Protect Cells. Restore Balance.",
  },
  gait: {
    title: "Zero Gravity Gait Training",
    tagline: "Body weight support technology for safe, pain-free mobility rehabilitation.",
    description: "Zero Gravity Gait Training uses an advanced anti-gravity treadmill system that can reduce the patient's effective body weight by up to 80%. This allows patients who cannot bear full weight — due to surgery, stroke, or neurological conditions — to practice walking and movement patterns safely and comfortably, promoting neuroplasticity and muscle re-education without risk of falls or re-injury.",
    mechanism: "The system uses differential air pressure technology to create a precisely calibrated upward lifting force around the lower body. By reducing effective body weight in 1% increments, patients can practice walking at any comfortable weight-bearing level. This enables earlier mobilization, reduces joint stress, promotes proper gait mechanics, and allows higher-intensity training than would otherwise be possible — all while the brain receives natural walking feedback that drives neuroplastic recovery.",
    steps: [
      { title: "Body Weight Calibration", desc: "The system precisely measures and calibrates body weight, allowing reduction in 1% increments (up to 80% unweighting)." },
      { title: "Supported Walking Initiation", desc: "The patient begins walking on the treadmill at a comfortable, reduced body weight level determined by the therapist." },
      { title: "Gait Pattern Re-education", desc: "Therapists guide proper walking mechanics while the anti-gravity system provides consistent support and safety." },
      { title: "Progressive Loading", desc: "As strength and confidence improve, body weight is gradually increased to progress toward full weight-bearing." },
      { title: "Neuroplastic Adaptation", desc: "Repetitive, correctly patterned walking drives neuroplastic changes in the brain, rebuilding motor pathways." },
    ],
    conditions: ["Stroke Recovery", "Post-Joint Replacement", "Spinal Cord Injury", "Parkinson's Disease", "Post-Cardiac Surgery Deconditioning", "Elderly Fall Prevention"],
    benefits: [
      "Enables walking 3–6 weeks earlier than conventional rehab",
      "Reduces joint stress by up to 80% during training",
      "Promotes neuroplasticity through repetitive gait practice",
      "Improves balance, coordination, and walking confidence",
      "Allows higher-intensity cardiovascular training safely",
      "Prevents muscle atrophy during recovery periods",
    ],
    safety: [
      "Fall-prevention harness system with continuous support",
      "Real-time gait analysis and monitoring",
      "Supervised by trained physical therapy specialists",
      "Gradual progression protocol to prevent overexertion",
    ],
    contraindications: [
      "Unstable fractures in the lower extremities",
      "Uncontrolled cardiac arrhythmias",
      "Active deep vein thrombosis",
      "Severe cognitive impairment preventing instruction following",
    ],
    procedure: [
      { label: "Session Duration", value: "20–45 minutes per session" },
      { label: "Treatment Course", value: "12–30 sessions depending on condition" },
      { label: "Comfort Level", value: "Comfortable — body weight is precisely adjusted to comfort" },
      { label: "Monitoring", value: "Heart rate, gait metrics, and balance continuously monitored" },
    ],
    research: [
      { title: "Anti-gravity treadmill training in stroke rehabilitation", source: "Stroke Journal (AHA), 2022" },
      { title: "Body weight supported treadmill training outcomes", source: "Archives of Physical Medicine, 2021" },
      { title: "Neuroplasticity and gait rehabilitation", source: "Neurorehabilitation & Neural Repair, 2023" },
    ],
    faqs: [
      { q: "Is it safe after hip or knee replacement?", a: "Yes, zero gravity gait training is ideal after joint replacement. It allows walking practice with minimal joint stress, often enabling earlier rehabilitation than traditional methods." },
      { q: "Can stroke patients use this?", a: "Absolutely. This is one of the most effective technologies for post-stroke gait rehabilitation. The system supports the affected side while promoting proper walking patterns." },
      { q: "How much weight can be reduced?", a: "Up to 80% of body weight can be reduced, in precise 1% increments. This allows even patients who cannot stand independently to practice walking safely." },
      { q: "How soon can I walk normally?", a: "Progress varies by condition. Many patients show significant improvement within 2–3 weeks of regular sessions. Full recovery timelines are discussed in your personalized plan." },
    ],
    ctaLine: "Stand Again. Walk Again. Live Again.",
  },
  postpregnancy: {
    title: "Post-Pregnancy Rehabilitation",
    tagline: "Specialized recovery for cardiovascular, musculoskeletal & pelvic floor restoration.",
    description: "Post-Pregnancy Rehabilitation is a comprehensive recovery program addressing the unique physiological changes that occur during pregnancy and childbirth. This medically supervised program focuses on cardiovascular reconditioning, core and pelvic floor rehabilitation, diastasis recti correction, musculoskeletal recovery, and overall wellness restoration. Under Dr. Lukka's guidance, the program integrates cardiopulmonary expertise with targeted rehabilitation protocols.",
    mechanism: "Pregnancy causes significant cardiovascular, musculoskeletal, and hormonal changes that require structured rehabilitation for optimal recovery. Our protocol addresses each system: cardiovascular reconditioning through graded aerobic exercise, core restoration through targeted deep muscle reactivation, pelvic floor rehabilitation through progressive strengthening, and hormonal balance support through lifestyle and exercise programming. The cardiopulmonary monitoring expertise of Dr. Lukka ensures safe progression throughout.",
    steps: [
      { title: "Post-Natal Assessment", desc: "Comprehensive evaluation of cardiovascular fitness, core function, pelvic floor integrity, and musculoskeletal status." },
      { title: "Core & Pelvic Floor Activation", desc: "Gentle reactivation of deep core muscles and pelvic floor with progressive strengthening protocols." },
      { title: "Cardiovascular Reconditioning", desc: "Graded aerobic exercise program monitored for cardiac safety, rebuilding cardiovascular endurance." },
      { title: "Musculoskeletal Restoration", desc: "Targeted exercises addressing common postpartum issues: diastasis recti, back pain, joint laxity." },
      { title: "Wellness & Lifestyle Integration", desc: "Nutrition guidance, stress management, and sustainable exercise habits for long-term health." },
    ],
    conditions: ["Diastasis Recti", "Pelvic Floor Dysfunction", "Postpartum Back Pain", "Cardiovascular Deconditioning", "Postpartum Depression (exercise component)", "C-Section Recovery"],
    benefits: [
      "Restores core stability and reduces diastasis recti",
      "Strengthens pelvic floor for urinary continence",
      "Rebuilds cardiovascular fitness safely and progressively",
      "Reduces postpartum back and joint pain",
      "Improves energy levels and reduces fatigue",
      "Supports mental health through structured exercise",
    ],
    safety: [
      "Medically supervised with cardiovascular monitoring",
      "Protocols designed for post-cesarean and vaginal delivery",
      "Gradual progression based on individual recovery",
      "Coordination with obstetric team for complex cases",
    ],
    contraindications: [
      "Active postpartum hemorrhage or complications",
      "Unhealed surgical wounds (clearance required)",
      "Severe postpartum cardiomyopathy (requires cardiac evaluation)",
      "Active pelvic infections",
    ],
    procedure: [
      { label: "Program Start", value: "6 weeks postpartum (earlier for gentle exercises with clearance)" },
      { label: "Session Duration", value: "45–60 minutes per session" },
      { label: "Treatment Course", value: "12–24 sessions over 3–6 months" },
      { label: "Monitoring", value: "Heart rate, blood pressure, and exercise tolerance tracked" },
    ],
    research: [
      { title: "Exercise after pregnancy: guidelines and benefits", source: "ACOG Committee Opinion, 2023" },
      { title: "Pelvic floor rehabilitation outcomes", source: "International Urogynecology Journal, 2022" },
      { title: "Cardiovascular recovery postpartum", source: "Journal of Women's Health, 2021" },
    ],
    faqs: [
      { q: "When can I start post-pregnancy rehab?", a: "Generally at 6 weeks postpartum with medical clearance. Gentle breathing and pelvic floor exercises can begin earlier with your doctor's approval." },
      { q: "Is it safe after a C-section?", a: "Yes, our program has specific protocols for post-cesarean recovery. We ensure complete wound healing before progressing to core exercises." },
      { q: "Will it help with urinary incontinence?", a: "Yes. Pelvic floor rehabilitation is a core component of the program and has excellent success rates for postpartum urinary incontinence." },
      { q: "Can I bring my baby to sessions?", a: "We understand the practical challenges of new parenthood. Please discuss your needs with our team, and we'll do our best to accommodate you." },
    ],
    ctaLine: "Recover Fully. Rebuild Strength. Embrace Motherhood.",
  },
};

export function TherapyPage() {
  const { therapyId } = useParams();
  const therapy = therapyData[therapyId || ""];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!therapy) {
    return (
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-[#1a3a4a] mb-4" style={{ fontSize: "24px", fontWeight: 600 }}>Therapy Not Found</h1>
        <p className="text-gray-400 mb-6 text-[14px]">The requested therapy page does not exist.</p>
        <Link to="/" className="text-[#0B4D6E] text-[14px] hover:underline">Return to Home</Link>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 lg:pt-36 pb-14 bg-[#062A3E]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 mb-6 text-[13px] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-white mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 600 }}>
              {therapy.title}
            </h1>
            <p className="text-[#5CE0D8]/70 text-[14px] max-w-2xl">{therapy.tagline}</p>
            <p className="text-white/30 text-[12px] mt-3">
              Supervised under surgical guidance by Dr. Harivadan Lukka
            </p>
            <div className="flex gap-3 mt-6">
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-[#0FACA3] text-white rounded-full text-[13px] hover:bg-[#0d9990] transition-all hover:shadow-lg hover:shadow-[#0FACA3]/25"
              >
                Book Consultation
              </Link>
              <a
                href="https://wa.me/917997592222"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-white/20 text-white/60 rounded-full text-[13px] hover:bg-white/5 transition-all"
              >
                Speak to Specialist
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[#1a3a4a] mb-4 text-[18px]" style={{ fontWeight: 600 }}>
              What Is This Therapy?
            </h2>
            <p className="text-gray-500 text-[14px]" style={{ lineHeight: 1.8 }}>{therapy.description}</p>
          </motion.div>
        </div>
      </section>

      {/* How it works — Step by step */}
      <section className="py-14 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[#1a3a4a] mb-3 text-[18px]" style={{ fontWeight: 600 }}>
              How It Works
            </h2>
            <p className="text-gray-400 text-[14px] mb-8" style={{ lineHeight: 1.8 }}>{therapy.mechanism}</p>
          </motion.div>
          <div className="space-y-3">
            {therapy.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex gap-4 p-4 bg-white rounded-2xl border border-gray-100"
              >
                <span className="text-[#0FACA3] text-[12px] mt-0.5 shrink-0" style={{ fontWeight: 600 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="text-[#1a3a4a] text-[14px] mb-1" style={{ fontWeight: 600 }}>{step.title}</h4>
                  <p className="text-gray-400 text-[13px]" style={{ lineHeight: 1.7 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions + Benefits side by side */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2 mb-5">
                <Users size={16} className="text-[#0FACA3]" />
                <h2 className="text-[#1a3a4a] text-[16px]" style={{ fontWeight: 600 }}>Conditions Treated</h2>
              </div>
              <div className="space-y-2">
                {therapy.conditions.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-2xl bg-[#f8fafb]">
                    <Check size={14} className="text-[#0FACA3] shrink-0" />
                    <span className="text-gray-600 text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="flex items-center gap-2 mb-5">
                <Check size={16} className="text-[#0FACA3]" />
                <h2 className="text-[#1a3a4a] text-[16px]" style={{ fontWeight: 600 }}>Clinical Benefits</h2>
              </div>
              <div className="space-y-2">
                {therapy.benefits.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-2xl bg-[#0FACA3]/5">
                    <div className="w-1.5 h-1.5 bg-[#0FACA3] rounded-full shrink-0" />
                    <span className="text-gray-600 text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Procedure experience */}
      <section className="py-14 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Clock size={16} className="text-[#0FACA3]" />
            <h2 className="text-[#1a3a4a] text-[16px]" style={{ fontWeight: 600 }}>What to Expect</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {therapy.procedure.map((item) => (
              <div key={item.label} className="p-4 rounded-2xl bg-white border border-gray-100">
                <div className="text-gray-400 text-[11px] uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-[#1a3a4a] text-[14px]" style={{ fontWeight: 500 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <FileText size={16} className="text-[#0FACA3]" />
            <h2 className="text-[#1a3a4a] text-[16px]" style={{ fontWeight: 600 }}>Research & Validation</h2>
          </div>
          <div className="space-y-2">
            {therapy.research.map((item) => (
              <div key={item.title} className="p-4 rounded-2xl bg-[#f8fafb]">
                <div className="text-[#1a3a4a] text-[13px]" style={{ fontWeight: 500 }}>{item.title}</div>
                <div className="text-gray-400 text-[12px] mt-0.5">{item.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety + Contraindications */}
      <section className="py-14 bg-[#f8fafb]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Shield size={16} className="text-[#0FACA3]" />
                <h2 className="text-[#1a3a4a] text-[16px]" style={{ fontWeight: 600 }}>Safety Protocols</h2>
              </div>
              <div className="space-y-2">
                {therapy.safety.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-gray-100">
                    <Shield size={14} className="text-[#0FACA3] shrink-0" />
                    <span className="text-gray-600 text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <AlertTriangle size={16} className="text-amber-500" />
                <h2 className="text-[#1a3a4a] text-[16px]" style={{ fontWeight: 600 }}>Contraindications</h2>
              </div>
              <div className="space-y-2">
                {therapy.contraindications.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-gray-100">
                    <AlertTriangle size={14} className="text-amber-500 shrink-0" />
                    <span className="text-gray-500 text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-5 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <HelpCircle size={16} className="text-[#0FACA3]" />
            <h2 className="text-[#1a3a4a] text-[16px]" style={{ fontWeight: 600 }}>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-2">
            {therapy.faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-[#1a3a4a] text-[14px]" style={{ fontWeight: 500 }}>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-400 transition-transform duration-200 shrink-0 ml-4 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-400 text-[13px]" style={{ lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="py-14 bg-[#f8fafb]">
        <div className="max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-[#1a3a4a] mb-3 text-[18px]" style={{ fontWeight: 600 }}>
            Cost & Session Planning
          </h2>
          <p className="text-gray-400 text-[14px] mb-6 max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
            Treatment plans vary based on medical condition and individual needs. A personalized consultation
            is required to provide an accurate cost estimate and session plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B4D6E] text-white rounded-full text-[13px] hover:bg-[#093d58] transition-all hover:shadow-lg hover:shadow-[#0B4D6E]/20"
          >
            Get Cost Estimate
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 bg-[#062A3E]">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-white mb-4 text-[20px]" style={{ fontWeight: 600 }}>
            {therapy.ctaLine}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 bg-[#0FACA3] text-white rounded-full text-[14px] hover:bg-[#0d9990] transition-all hover:shadow-lg hover:shadow-[#0FACA3]/25"
            >
              Book Consultation
            </Link>
            <a
              href="https://wa.me/917997592222"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white rounded-full text-[14px] hover:bg-[#20bd59] transition-all hover:shadow-lg hover:shadow-[#25D366]/25"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}