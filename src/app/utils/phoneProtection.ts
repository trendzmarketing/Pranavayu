/**
 * Phone Number Protection Utility
 * 
 * All phone numbers are XOR-encoded to prevent scraping from HTML source
 * and JS bundles. Numbers are decoded at runtime only when needed.
 */

import type { MouseEvent } from "react";

// XOR key for encoding/decoding
const K = 0x2a;

// Encoded phone numbers (XOR'd char codes)
const _P: Record<string, number[]> = {
  a: [1, 19, 27, 29, 19, 19, 29, 31, 19, 24, 24, 24, 24],
  b: [1, 19, 27, 19, 27, 25, 25, 28, 18, 31, 24, 24, 24],
  c: [1, 19, 27, 29, 19, 19, 29, 31, 19, 19, 24, 24, 24],
};

function _d(enc: number[]): string {
  return enc.map((c) => String.fromCharCode(c ^ K)).join("");
}

/** Get raw phone number: 'primary' | 'secondary' | 'alternate' */
export function getPhone(
  variant: "primary" | "secondary" | "alternate" = "primary"
): string {
  const key = variant === "primary" ? "a" : variant === "secondary" ? "b" : "c";
  return _d(_P[key]);
}

/** Get formatted display string e.g. "+91 79975 92222" */
export function getPhoneDisplay(
  variant: "primary" | "secondary" | "alternate" = "primary"
): string {
  const raw = getPhone(variant);
  const digits = raw.replace("+", "");
  return `+${digits.slice(0, 2)} ${digits.slice(2, 7)} ${digits.slice(7)}`;
}

/** Click handler for tel: links — initiates a phone call */
export function handleCall(
  e: MouseEvent<HTMLElement>,
  variant: "primary" | "secondary" | "alternate" = "primary"
) {
  e.preventDefault();
  window.location.href = `tel:${getPhone(variant)}`;
}

/** Convenience handler for secondary number */
export function handleCallSecondary(e: MouseEvent<HTMLElement>) {
  handleCall(e, "secondary");
}

/** Click handler for WhatsApp links — opens wa.me in new tab */
export function handleWhatsApp(
  e: MouseEvent<HTMLElement>,
  variant: "primary" | "secondary" = "primary"
) {
  e.preventDefault();
  const num = getPhone(variant).replace("+", "");
  window.open(`https://wa.me/${num}`, "_blank", "noopener,noreferrer");
}

// ─── Email Protection ─────────────────────────────────────────────────────────

// Encoded email addresses (XOR'd char codes)
const _E: Record<string, number[]> = {
  a: [90,88,75,68,75,92,75,83,95,88,79,66,75,72,67,70,67,94,75,94,67,69,68,106,77,71,75,67,70,4,73,69,71],
  b: [67,68,76,69,106,90,88,75,68,75,92,75,83,95,4,73,69,71],
};

/** Get raw email: 'primary' | 'info' */
export function getEmail(
  variant: "primary" | "info" = "primary"
): string {
  const key = variant === "primary" ? "a" : "b";
  return _d(_E[key]);
}

/** Get email display string */
export function getEmailDisplay(
  variant: "primary" | "info" = "primary"
): string {
  return getEmail(variant);
}

/** Click handler for mailto: links — opens email client */
export function handleEmail(
  e: MouseEvent<HTMLElement>,
  variant: "primary" | "info" = "primary"
) {
  e.preventDefault();
  window.location.href = `mailto:${getEmail(variant)}`;
}
