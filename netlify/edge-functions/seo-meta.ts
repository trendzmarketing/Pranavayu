// Netlify Edge Function — injects per-page OG/Twitter meta for social crawlers
// Runs on Deno at the CDN edge before HTML reaches the browser/crawlers

const META_MAP: Record<string, { title: string; description: string }> = {
    "/": {
        title: "Pranavayu | Advanced Rehabilitation Center in Visakhapatnam",
        description:
            "Pranavayu is Visakhapatnam's leading rehabilitation institute offering HBOT, Shockwave Therapy, Pelvic Chair Therapy & Cardiac Rehabilitation under Dr. Harivadan Lukka (MBBS, MS, M.Ch).",
    },
    "/about": {
        title: "About Pranavayu | Leading Rehabilitation Center in Visakhapatnam",
        description:
            "Learn about Pranavayu's mission, story, and commitment to advanced cardiac, pulmonary & neurovascular rehabilitation under Dr. Harivadan Lukka in Visakhapatnam.",
    },
    "/doctor": {
        title: "Dr. Harivadan Lukka | Cardiothoracic & Vascular Surgeon | Pranavayu",
        description:
            "Dr. Harivadan Lukka (MBBS, MS, M.Ch) — Internationally trained Cardiothoracic & Vascular Surgeon with 15+ years experience, leading advanced rehabilitation at Pranavayu, Visakhapatnam.",
    },
    "/therapies": {
        title: "Advanced Therapies | HBOT, Shockwave, Pelvic Chair & More | Pranavayu",
        description:
            "Explore advanced therapies at Pranavayu Visakhapatnam — Hyperbaric Oxygen Therapy (HBOT), Shockwave Therapy, Pelvic Chair, Hydrogen Inhalation & Zero Gravity Gait Training.",
    },
    "/therapies/hbot": {
        title: "Hyperbaric Oxygen Therapy (HBOT) in Visakhapatnam | Pranavayu",
        description:
            "HBOT at Pranavayu delivers 100% pure oxygen under pressure to accelerate healing and recovery. Supervised by Dr. Harivadan Lukka for cardiac, neurological & wound healing conditions.",
    },
    "/therapies/pelvic-chair": {
        title: "Pelvic Chair Therapy in Visakhapatnam | Pranavayu",
        description:
            "Non-invasive Pelvic Chair Therapy at Pranavayu — strengthening pelvic floor muscles for incontinence, post-pregnancy recovery & pelvic health under expert supervision.",
    },
    "/therapies/shockwave": {
        title: "Shockwave Therapy in Visakhapatnam | Pranavayu",
        description:
            "Extracorporeal Shockwave Therapy (ESWT) at Pranavayu for chronic pain, tendinopathy & musculoskeletal conditions. Evidence-based, non-surgical treatment in Visakhapatnam.",
    },
    "/therapies/hydrogen": {
        title: "Hydrogen Inhalation Therapy in Visakhapatnam | Pranavayu",
        description:
            "Molecular Hydrogen Inhalation Therapy at Pranavayu — powerful antioxidant therapy for cellular recovery, inflammation reduction & post-COVID rehabilitation in Visakhapatnam.",
    },
    "/therapies/gait": {
        title: "Zero Gravity Gait Training in Visakhapatnam | Pranavayu",
        description:
            "Zero Gravity Gait Training at Pranavayu uses anti-gravity treadmill technology for safe walking rehabilitation post-stroke, surgery & neurological conditions.",
    },
    "/therapies/postpregnancy": {
        title: "Post-Pregnancy Rehabilitation in Visakhapatnam | Pranavayu",
        description:
            "Structured post-pregnancy rehabilitation at Pranavayu — pelvic floor recovery, diastasis recti treatment & safe return to fitness under expert supervision in Visakhapatnam.",
    },
    "/programs": {
        title: "Rehabilitation Programs | Cardiac, Pulmonary & Neurovascular Recovery | Pranavayu",
        description:
            "Explore Pranavayu's evidence-based rehabilitation programs in Visakhapatnam — Cardiac, Pulmonary, Neurovascular, Post-Surgical, Long COVID & Preventive programs led by Dr. Harivadan Lukka.",
    },
    "/programs/cardiac-rehabilitation": {
        title: "Cardiac Rehabilitation Program in Visakhapatnam | Pranavayu",
        description:
            "Structured Cardiac Rehabilitation at Pranavayu for heart attack, bypass surgery & chronic heart disease. Supervised by Dr. Harivadan Lukka for safe cardiovascular recovery.",
    },
    "/programs/pulmonary-rehabilitation": {
        title: "Pulmonary Rehabilitation Program in Visakhapatnam | Pranavayu",
        description:
            "Evidence-based Pulmonary Rehabilitation at Pranavayu for COPD, asthma, post-COVID lung weakness & breathlessness. Improve oxygen efficiency and stamina in Visakhapatnam.",
    },
    "/programs/neurovascular-recovery": {
        title: "Neurovascular Recovery Program in Visakhapatnam | Pranavayu",
        description:
            "Neurovascular Recovery at Pranavayu for stroke, peripheral neuropathy & vascular insufficiency. Guided neural activation and gait retraining in Visakhapatnam.",
    },
    "/programs/post-surgical-recovery": {
        title: "Post-Surgical Recovery Program in Visakhapatnam | Pranavayu",
        description:
            "Accelerated Post-Surgical Recovery at Pranavayu — safe mobility restoration, lung re-expansion & strength rebuilding after cardiac, pulmonary or vascular surgery.",
    },
    "/programs/long-covid-recovery": {
        title: "Long COVID Recovery Program in Visakhapatnam | Pranavayu",
        description:
            "Structured Long COVID Recovery at Pranavayu for chronic fatigue, brain fog, breathlessness & palpitations. Restore energy, breathing & daily functioning in Visakhapatnam.",
    },
    "/programs/preventive-cardio": {
        title: "Preventive Cardio & Vitality Program in Visakhapatnam | Pranavayu",
        description:
            "Proactive Preventive Cardio program at Pranavayu for professionals & health-conscious individuals. Cardiovascular risk assessment & conditioning in Visakhapatnam.",
    },
    "/conditions": {
        title: "Conditions Treated | Cardiac, Pulmonary, Neurovascular & More | Pranavayu",
        description:
            "Pranavayu treats Cardiac, Pulmonary, Neurovascular, Vascular & Metabolic conditions in Visakhapatnam. Post-bypass, COPD, Stroke recovery, Long COVID & more under Dr. Harivadan Lukka.",
    },
    "/patient-journey": {
        title: "Patient Recovery Journey | 6-Step Rehabilitation Process | Pranavayu",
        description:
            "Understand the Pranavayu recovery journey — from initial consultation to supervised therapy, progress monitoring, and long-term lifestyle integration in Visakhapatnam.",
    },
    "/facility": {
        title: "Our Facility | State-of-the-Art Rehabilitation Center | Pranavayu",
        description:
            "Tour Pranavayu's advanced rehabilitation facility in Maharanipeta, Visakhapatnam — equipped with HBOT chambers, Pelvic Chair, Shockwave therapy & dedicated monitoring systems.",
    },
    "/testimonials": {
        title: "Patient Reviews & Testimonials | Pranavayu Visakhapatnam",
        description:
            "Read real patient stories and reviews from Pranavayu Rehabilitation Center, Visakhapatnam. Discover how Dr. Harivadan Lukka's team helped patients recover from cardiac, pulmonary & neurovascular conditions.",
    },
    "/international": {
        title: "International Patients | Advanced Cardiac & Pulmonary Rehabilitation in India | Pranavayu",
        description:
            "Pranavayu welcomes international patients seeking advanced rehabilitation in India. Cardiac, Pulmonary & Neurovascular recovery under Dr. Harivadan Lukka with full travel support & visa assistance.",
    },
    "/contact": {
        title: "Book a Rehabilitation Consultation in Visakhapatnam | Pranavayu",
        description:
            "Contact Pranavayu Rehabilitation Center in Visakhapatnam to book your consultation with Dr. Harivadan Lukka. Call +91 79975 92222 or use our online form.",
    },
    "/services": {
        title: "Our Services | Cardiac, Pulmonary & Rehabilitation | Pranavayu",
        description:
            "Explore all rehabilitation services at Pranavayu Visakhapatnam — Cardiac Rehab, Pulmonary Rehab, HBOT, Medical Rehab, Preventive Cardiology, Lifestyle Medicine & more.",
    },
    "/cardiac-rehabilitation": {
        title: "Cardiac Rehabilitation in Visakhapatnam | Pranavayu",
        description:
            "Doctor-supervised cardiac rehabilitation at Pranavayu for heart attack recovery, bypass surgery, angioplasty & heart failure. Personalised programs in Vizag.",
    },
    "/pulmonary-rehabilitation": {
        title: "Pulmonary Rehabilitation in Visakhapatnam | Pranavayu",
        description:
            "Breathe better with Pranavayu's pulmonary rehabilitation — specialist-led programs for COPD, asthma, post-COVID lung recovery & respiratory conditions in Vizag.",
    },
    "/hyperbaric-oxygen-therapy": {
        title: "Hyperbaric Oxygen Therapy (HBOT) Vizag | Pranavayu",
        description:
            "Pranavayu's HBOT delivers 100% oxygen in a pressurised chamber for wound healing, post-surgical recovery, radiation injury & stroke support in Visakhapatnam.",
    },
    "/medical-rehabilitation": {
        title: "Medical Rehabilitation in Visakhapatnam | Pranavayu",
        description:
            "Pranavayu's multidisciplinary medical rehab covers post-surgery recovery, stroke, neurological conditions, ICU deconditioning & chronic disease management in Vizag.",
    },
    "/preventive-cardiology": {
        title: "Preventive Cardiology in Visakhapatnam | Pranavayu",
        description:
            "Prevent heart disease before it starts. Pranavayu offers cardiac risk assessment, lifestyle risk management & cardiac screening programs in Visakhapatnam.",
    },
    "/lifestyle-medicine": {
        title: "Lifestyle Medicine Program in Visakhapatnam | Pranavayu",
        description:
            "Address root causes of chronic disease with Pranavayu's lifestyle medicine — nutrition, exercise, sleep, stress management & tobacco cessation in Vizag.",
    },
    "/yoga-nutrition-therapy": {
        title: "Yoga & Nutrition Therapy for Cardiac Recovery | Pranavayu",
        description:
            "Therapeutic yoga, clinical nutrition planning & supervised exercise therapy to support cardiac and medical rehabilitation at Pranavayu, Visakhapatnam.",
    },
    "/corporate-wellness": {
        title: "Corporate Wellness Programs Visakhapatnam | Pranavayu",
        description:
            "Pranavayu partners with organisations to deliver cardiac screening camps, stress management, nutrition workshops & employee health programs in Visakhapatnam.",
    },
    "/privacy": {
        title: "Privacy Policy | Pranavayu Rehabilitation Center",
        description:
            "Read Pranavayu's privacy policy to understand how we collect, use, and protect your personal and medical information on our rehabilitation services website.",
    },
    "/terms": {
        title: "Terms & Conditions | Pranavayu Rehabilitation Center",
        description:
            "Review the terms and conditions governing use of the Pranavayu website and rehabilitation services. Learn about your rights and obligations as a user.",
    },
};

const BASE_URL = "https://www.pranavayu.life";
const DEFAULT_IMAGE = `${BASE_URL}/images/og-default.webp`;

export default async (request: Request, context: { next: () => Promise<Response> }) => {
    const url = new URL(request.url);
    const path = url.pathname;

    // Find exact match or fall back to homepage meta
    const meta = META_MAP[path] ?? META_MAP["/"];
    const canonicalUrl = `${BASE_URL}${path}`;

    const response = await context.next();
    const contentType = response.headers.get("content-type") ?? "";

    // Only process HTML responses
    if (!contentType.includes("text/html")) {
        return response;
    }

    let html = await response.text();

    const injectMeta = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${DEFAULT_IMAGE}" />
    <meta property="og:site_name" content="Pranavayu Rehabilitation Center" />
    <meta property="og:locale" content="en_IN" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${DEFAULT_IMAGE}" />`;

    // Replace existing title and meta tags with page-specific ones
    html = html
        .replace(/<title>[\s\S]*?<\/title>/, "")
        .replace(/<meta name="description"[^>]*>/g, "")
        .replace(/<link rel="canonical"[^>]*>/g, "")
        .replace(/<meta property="og:[^>]*>/g, "")
        .replace(/<meta name="twitter:[^>]*>/g, "")
        .replace("</head>", `${injectMeta}\n  </head>`);

    return new Response(html, {
        status: response.status,
        headers: response.headers,
    });
};
