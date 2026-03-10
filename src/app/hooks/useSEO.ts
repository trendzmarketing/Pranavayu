/**
 * useSEO — Dynamic SEO meta tag management
 * Updates document title, meta description, canonical URL, and OG/Twitter tags
 * from any route component. Falls back to site defaults gracefully.
 */

import { useEffect } from "react";

const SITE_NAME = "Pranavayu Rehabilitation Center";
const SITE_URL = "https://pranavayu.com";
const DEFAULT_TITLE = "Pranavayu Rehabilitation Center | Precision-Led Cardiopulmonary Recovery";
const DEFAULT_DESCRIPTION =
    "Advanced Cardiac, Pulmonary & Neurovascular Rehabilitation under the expert leadership of Dr. Harivadan Lukka (MBBS, MS, M.Ch) in Visakhapatnam, India.";
const DEFAULT_IMAGE = `${SITE_URL}/images/og-default.webp`;

export interface SEOProps {
    title?: string;
    description?: string;
    /** Comma-separated list of SEO keywords for this page */
    keywords?: string;
    canonicalPath?: string; // e.g. "/therapies/hbot"
    ogImage?: string;
    noIndex?: boolean;
    /** JSON-LD structured data objects to inject as <script> tags */
    schema?: object[];
}

function setMeta(name: string, content: string, prop?: boolean) {
    const attr = prop ? "property" : "name";
    let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
    }
    el.content = content;
}

function setLink(rel: string, href: string) {
    let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
    if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
    }
    el.href = href;
}

let injectedSchemas: HTMLScriptElement[] = [];

function clearSchemas() {
    injectedSchemas.forEach((s) => s.parentNode?.removeChild(s));
    injectedSchemas = [];
}

function injectSchema(schema: object) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    injectedSchemas.push(script);
}

export function useSEO({
    title,
    description,
    keywords,
    canonicalPath,
    ogImage,
    noIndex = false,
    schema = [],
}: SEOProps = {}) {
    useEffect(() => {
        const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
        const fullDesc = description ?? DEFAULT_DESCRIPTION;
        const canonicalUrl = `${SITE_URL}${canonicalPath ?? ""}`;
        const imageUrl = ogImage ?? DEFAULT_IMAGE;

        // Basic
        document.title = fullTitle;
        setMeta("description", fullDesc);
        if (keywords) setMeta("keywords", keywords);
        setMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");

        // Canonical
        setLink("canonical", canonicalUrl);

        // Open Graph
        setMeta("og:title", fullTitle, true);
        setMeta("og:description", fullDesc, true);
        setMeta("og:url", canonicalUrl, true);
        setMeta("og:image", imageUrl, true);
        setMeta("og:type", "website", true);
        setMeta("og:site_name", SITE_NAME, true);

        // Twitter Card
        setMeta("twitter:card", "summary_large_image");
        setMeta("twitter:title", fullTitle);
        setMeta("twitter:description", fullDesc);
        setMeta("twitter:image", imageUrl);

        // JSON-LD Schema
        clearSchemas();
        schema.forEach(injectSchema);

        return () => {
            clearSchemas();
        };
    }, [title, description, keywords, canonicalPath, ogImage, noIndex, JSON.stringify(schema)]);
}
