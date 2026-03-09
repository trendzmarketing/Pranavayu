/**
 * SEO Schema Definitions for Pranavayu Website
 * Provides reusable JSON-LD objects for all major schema types:
 * - LocalBusiness / MedicalBusiness
 * - Physician (Dr. Harivadan Lukka)
 * - FAQPage
 * - MedicalWebPage
 * - BreadcrumbList
 */

const SITE_URL = "https://pranavayu.com";

// ─── Base Organization ────────────────────────────────────────────────────────

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: "Pranavayu Rehabilitation Center",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.webp`,
    description:
        "Pranavayu is a specialized rehabilitation institute in Visakhapatnam combining surgical expertise with advanced recovery science under Dr. Harivadan Lukka.",
    telephone: "+91-7997592222",
    email: "info@pranavayu.com",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Visakhapatnam",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        postalCode: "530001",
        addressCountry: "IN",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: "17.6868",
        longitude: "83.2185",
    },
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "20:00",
        },
    ],
    medicalSpecialty: [
        "Cardiac Rehabilitation",
        "Pulmonary Rehabilitation",
        "Neurovascular Rehabilitation",
        "Hyperbaric Oxygen Therapy",
        "Post-Surgical Recovery",
    ],
    priceRange: "₹₹₹",
    sameAs: [
        "https://www.google.com/maps",
    ],
};

// ─── Physician Schema ─────────────────────────────────────────────────────────

export const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/doctor#physician`,
    name: "Dr. Harivadan Lukka",
    url: `${SITE_URL}/doctor`,
    image: `${SITE_URL}/images/doctor/dr-harivadan-hero.webp`,
    jobTitle: "Cardiothoracic & Vascular Surgeon",
    description:
        "Internationally trained Cardiothoracic & Vascular Surgeon with 15+ years of expertise in cardiac, vascular and minimally invasive procedures — now leading advanced rehabilitation protocols in Visakhapatnam.",
    knowsAbout: [
        "Minimally Invasive Cardiac Surgery",
        "Beating Heart Revascularization",
        "Advanced Vascular Procedures",
        "Hyperbaric Oxygen Therapy",
        "Cardiac Rehabilitation",
    ],
    hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "MBBS" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "MS" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "M.Ch (Cardiothoracic & Vascular Surgery)" },
    ],
    worksFor: {
        "@id": `${SITE_URL}/#organization`,
    },
    medicalSpecialty: "Cardiovascular Surgery",
};

// ─── Website Schema ───────────────────────────────────────────────────────────

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Pranavayu Rehabilitation Center",
    description: "Advanced Cardiac, Pulmonary & Neurovascular Rehabilitation in Visakhapatnam",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
        "query-input": "required name=search_term_string",
    },
};

// ─── FAQ Schema Builder ───────────────────────────────────────────────────────

export function buildFaqSchema(faqs: { q: string; a: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
            },
        })),
    };
}

// ─── Medical Therapy/Service Page Schema Builder ──────────────────────────────

export function buildMedicalWebPageSchema(opts: {
    name: string;
    description: string;
    url: string;
    specialty: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "@id": `${SITE_URL}${opts.url}`,
        name: opts.name,
        description: opts.description,
        url: `${SITE_URL}${opts.url}`,
        medicalAudience: { "@type": "Patient" },
        reviewedBy: { "@id": `${SITE_URL}/doctor#physician` },
        about: {
            "@type": "MedicalTherapy",
            name: opts.name,
            description: opts.description,
            relevantSpecialty: { "@type": "MedicalSpecialty", name: opts.specialty },
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
    };
}

// ─── Breadcrumb Schema Builder ────────────────────────────────────────────────

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.url}`,
        })),
    };
}
