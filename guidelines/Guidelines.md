Project: Pranavayu Cardiopulmonary Rehabilitation Center

1. Core Objective

Build and maintain a premium, institute-level cardiopulmonary rehabilitation website that reflects:

Clinical authority

Surgical precision

Structured recovery pathways

International patient readiness

Calm, oxygen-inspired design

The website must feel like a specialized medical institute — not a generic physiotherapy center or wellness spa.

2. Technical Architecture Rules

Use React functional components only.

Follow component-based modular structure.

Keep reusable UI elements inside /components.

Keep page-level logic inside /pages.

Maintain clear separation between UI, data, and utilities.

Avoid deeply nested JSX structures.

Refactor repetitive blocks into reusable components.

Keep file sizes manageable (prefer under 350 lines per file).

Use TailwindCSS utility-first approach.

Avoid inline styles unless necessary.

Use Flexbox and Grid for layout.

Avoid absolute positioning unless required for overlays.

3. Image & Asset Rules

Use ONLY local images.

All images must be stored in:

public/images/
Folder Structure:
public/images/
  homepage/
  doctor/
  programs/
  therapies/
  facility/
  international/
  testimonials/
  icons/
Image Rules:

Format: .webp

Filenames: lowercase, hyphen-separated

No spaces

No special characters

Add descriptive alt text for every image

Use loading="lazy" for all non-hero images

Use loading="eager" only for hero images

Do not use Unsplash or external URLs

4. Design System Rules

The design must reflect:

Calm

Precision

Clean structure

Medical credibility

High-trust environment

Avoid:

Overuse of bright colors

Aggressive red tones

Excessive gradients

Playful animations

Cluttered layouts

5. Color System

Primary Dark Navy: #041E2D
Secondary Navy: #062A3E
Mid Blue: #0B4D6E
Primary Teal: #0FACA3
Light Teal Accent: #5CE0D8
Light Background: #f6f9fc
Soft Section Background: #f8fafb

Rules:

Navy = authority sections

Teal = interactive emphasis only

Use max 2 accent colors per section

Avoid mixing multiple strong colors in same section

6. Typography System

Font Family: Inter (only)

Hierarchy:

H1: 48–56px, 700 weight

H2: 36–40px, 600 weight

H3: 24px, 600 weight

Body Large: 18px

Body: 16px

Small: 14px

Rules:

Maintain 1.5–1.6 line height

Avoid overuse of bold

Avoid full uppercase except for labels

Use proper heading structure (H1 only once per page)

7. Spacing & Layout

Desktop section spacing: 120px vertical

Tablet: 80px

Mobile: 60px

Cards: rounded-2xl (16px radius)

Card padding: 24–32px

Maintain generous white space

Avoid tight stacking of sections

8. Button System

Buttons must be pill-shaped (rounded-full).

Primary Button

Filled teal background

White text

Used once per section

Secondary Button

Outline style

Teal border

Transparent background

Tertiary Button

Text-only

Teal text

Rules:

No more than 2 buttons side-by-side

Avoid excessive CTA repetition

9. Animation Rules

Animations must be subtle and professional.

Allowed:

Fade-up on scroll

Gentle slide-in

ECG line animation

Timeline draw effect

Smooth stat counters

Duration:

150–300ms maximum

Avoid:

Bounce animations

Flashing effects

Aggressive parallax

Over-animation

10. Form & Compliance Rules

All forms must:

Include required checkbox:
“I agree to the Privacy Policy and Terms of Service”

Prevent submission if unchecked

Include clear validation states

Use accessible contrast

Avoid placeholder-only labels

Never:

Collect unnecessary sensitive medical data

Auto-submit without confirmation

Use intrusive popups

11. Accessibility Rules

Maintain proper contrast ratios

Include alt text on all images

Buttons must have focus states

Navigation must be keyboard accessible

Avoid color-only meaning indicators

12. Navigation Rules

Header:

Sticky

Clean dropdown structure

Max 5 primary navigation items

Mobile uses accordion pattern

Dropdowns:

Use structured layout

Maintain clear grouping

Avoid overcrowding

13. Footer Rules

Dark navy background (#041E2D)

5-column layout

Include:

Brand summary

Quick links

Programs

Contact details

Privacy & Terms links

Social icons must be outline style

Contact details must remain consistent across all pages.

14. SEO & Performance Rules

Each page must include:

Unique meta title

Meta description (max 160 characters)

Avoid duplicate headings

Use descriptive URLs

No broken image paths

Optimize images under 300KB

Target Lighthouse score: 90+

15. Brand Positioning Rules

The website must communicate:

Structured recovery

Advanced cardiopulmonary care

Doctor-led precision

International credibility

Data-driven rehabilitation

It must NOT communicate:

Generic physiotherapy clinic

Spa or wellness retreat

Marketing-heavy brand

Hospital emergency portal

16. Deployment Rules (Netlify)

No external image links

No broken routes

Ensure build compatibility

Confirm environment stability before deployment

Test mobile responsiveness before release