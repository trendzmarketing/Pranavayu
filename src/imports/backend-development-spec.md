# Pranavayu Cardiopulmonary Rehabilitation Center - Backend Development Specification

**Document Version:** 1.0
**Date:** 2026-03-08
**Purpose:** Complete backend requirements for the Pranavayu website, covering database schema, API endpoints, authentication, form handling, email notifications, and third-party integrations.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Technology Stack Recommendation](#2-technology-stack-recommendation)
3. [Site Architecture & Route Map](#3-site-architecture--route-map)
4. [Database Schema](#4-database-schema)
5. [API Endpoints](#5-api-endpoints)
6. [Form Handling & Validation](#6-form-handling--validation)
7. [Email & Notification System](#7-email--notification-system)
8. [Authentication & Admin Panel](#8-authentication--admin-panel)
9. [Content Management](#9-content-management)
10. [Third-Party Integrations](#10-third-party-integrations)
11. [Security & Compliance](#11-security--compliance)
12. [SEO & Performance](#12-seo--performance)
13. [Deployment & Infrastructure](#13-deployment--infrastructure)
14. [Current Issues & Outstanding Items](#14-current-issues--outstanding-items)

---

## 1. Project Overview

**Business:** Pranavayu Cardiopulmonary Rehabilitation Center
**Location:** 1st Floor, Nowroji Road, Maharanipeta, Visakhapatnam - 530002, Andhra Pradesh, India
**Lead Doctor:** Dr. Harivadan Lukka (MBBS, MS, M.Ch - Cardiothoracic & Vascular Surgeon)
**Website Type:** Medical rehabilitation center website with consultation booking, international patient intake, and informational content.

### Contact Information (Canonical - use these everywhere)
- **Primary Phone:** +91 79975 92222
- **Secondary Phone:** +91 91336 85222
- **WhatsApp:** +91 79975 92222
- **Email:** pranavayurehabilitation@gmail.com
- **Operating Hours:** Monday-Saturday, 9:00 AM - 7:00 PM IST

### Core Services
- 6 Rehabilitation Programs (Cardiac, Pulmonary, Neurovascular, Post-Surgical, Long COVID, Preventive)
- 5 Advanced Therapies (HBOT, Cryotherapy, Shockwave, Hydrogen Inhalation, Zero Gravity Gait Training)
- International Patient Care Program
- 4 Condition Categories (Cardiac, Pulmonary, Neurovascular, Vascular)

---

## 2. Technology Stack Recommendation

### Option A: Node.js Stack
- **Runtime:** Node.js 20+ with TypeScript
- **Framework:** Express.js or Fastify or NestJS
- **Database:** PostgreSQL (via Supabase or self-hosted)
- **ORM:** Prisma or Drizzle
- **Email:** Nodemailer + SMTP (Gmail/SendGrid/AWS SES)
- **File Storage:** AWS S3 or Supabase Storage (for medical report uploads)
- **Hosting:** Vercel (frontend) + Railway/Render/AWS (backend)

### Option B: Supabase (BaaS)
- **Database:** Supabase PostgreSQL
- **Auth:** Supabase Auth (for admin panel)
- **Storage:** Supabase Storage (for medical report uploads)
- **Edge Functions:** Supabase Edge Functions (for email sending, webhook processing)
- **Realtime:** Supabase Realtime (for admin dashboard live updates)

### Option C: Python Stack
- **Framework:** Django or FastAPI
- **Database:** PostgreSQL
- **Email:** Django built-in email or SendGrid SDK

---

## 3. Site Architecture & Route Map

### Frontend Routes (React Router)

| Route                         | Component            | Backend Needs                              |
|-------------------------------|----------------------|-------------------------------------------|
| `/`                           | HomePage             | Static (CMS optional)                     |
| `/doctor`                     | DoctorPage           | Static (CMS optional)                     |
| `/programs`                   | ProgramsOverview     | Static (CMS optional)                     |
| `/programs/:programId`        | ProgramPage          | Static (CMS optional)                     |
| `/therapies/:therapyId`       | TherapyPage          | Static (CMS optional)                     |
| `/conditions`                 | ConditionsPage       | Static (CMS optional)                     |
| `/patient-journey`            | PatientJourneyPage   | Static (CMS optional)                     |
| `/contact`                    | ContactPage          | **FORM SUBMISSION + EMAIL**               |
| `/international`              | InternationalPage    | **FORM SUBMISSION + EMAIL + FILE UPLOAD** |
| `/privacy`                    | PrivacyPolicyPage    | Static                                    |
| `/terms`                      | TermsPage            | Static                                    |

### Homepage Sections (hash anchors)
- `/#about` - About Section
- `/#programs` - Programs Section
- `/#therapies` - Therapies Section
- `/#facility` - Facility Gallery
- `/#testimonials` - Patient Testimonials
- `/#conditions` - Conditions Section

### Program Slugs (6 programs)
- `cardiac-rehabilitation`
- `pulmonary-rehabilitation`
- `neurovascular-recovery`
- `post-surgical-recovery`
- `long-covid-recovery`
- `preventive-cardio`

### Therapy Slugs (5 therapies)
- `hbot` (Hyperbaric Oxygen Therapy)
- `cryotherapy` (Whole Body Cryotherapy)
- `shockwave` (Shockwave Therapy)
- `hydrogen` (Hydrogen Inhalation)
- `gait` (Zero Gravity Gait Training)

---

## 4. Database Schema

### 4.1 `consultation_requests` (Contact Page Form)

```sql
CREATE TABLE consultation_requests (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name     VARCHAR(255) NOT NULL,
  phone         VARCHAR(20) NOT NULL,
  email         VARCHAR(255),
  condition     VARCHAR(100) NOT NULL,
  message       TEXT,
  agreed_to_privacy BOOLEAN DEFAULT FALSE,
  source_page   VARCHAR(50) DEFAULT 'contact',  -- 'contact' | 'international' | 'cta'
  status        VARCHAR(20) DEFAULT 'new',       -- 'new' | 'contacted' | 'scheduled' | 'completed' | 'cancelled'
  assigned_to   VARCHAR(255),
  admin_notes   TEXT,
  ip_address    INET,
  user_agent    TEXT,
  utm_source    VARCHAR(100),
  utm_medium    VARCHAR(100),
  utm_campaign  VARCHAR(100),
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_consultation_status ON consultation_requests(status);
CREATE INDEX idx_consultation_created ON consultation_requests(created_at DESC);
```

**Condition Enum Values:**
- `cardiac` - Cardiac Rehabilitation
- `pulmonary` - Pulmonary Rehabilitation
- `neurovascular` - Neurovascular Recovery
- `postsurgical` - Post-Surgical Recovery
- `oxygen` - Advanced Oxygen Therapies
- `preventive` - Preventive Rehabilitation
- `other` - Other

### 4.2 `international_inquiries` (International Patient Form)

```sql
CREATE TABLE international_inquiries (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name       VARCHAR(255) NOT NULL,
  country         VARCHAR(100) NOT NULL,
  contact_info    VARCHAR(255) NOT NULL,   -- WhatsApp number or email
  condition       VARCHAR(255),
  preferred_dates VARCHAR(255),
  medical_summary TEXT,
  agreed_to_privacy BOOLEAN DEFAULT FALSE,
  status          VARCHAR(20) DEFAULT 'new',  -- 'new' | 'responded' | 'consultation_scheduled' | 'visa_processing' | 'arrived' | 'in_treatment' | 'completed'
  coordinator     VARCHAR(255),
  admin_notes     TEXT,
  ip_address      INET,
  user_agent      TEXT,
  utm_source      VARCHAR(100),
  utm_medium      VARCHAR(100),
  utm_campaign    VARCHAR(100),
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_intl_status ON international_inquiries(status);
CREATE INDEX idx_intl_country ON international_inquiries(country);
CREATE INDEX idx_intl_created ON international_inquiries(created_at DESC);
```

### 4.3 `medical_documents` (File Uploads - International Patients)

```sql
CREATE TABLE medical_documents (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  inquiry_id      UUID REFERENCES international_inquiries(id) ON DELETE CASCADE,
  file_name       VARCHAR(500) NOT NULL,
  file_type       VARCHAR(50) NOT NULL,    -- 'pdf' | 'jpg' | 'png' | 'dicom'
  file_size       BIGINT NOT NULL,          -- bytes
  storage_path    VARCHAR(1000) NOT NULL,   -- S3/Supabase Storage path
  uploaded_at     TIMESTAMPTZ DEFAULT NOW()
);
```

### 4.4 `testimonials`

```sql
CREATE TABLE testimonials (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        VARCHAR(255) NOT NULL,
  condition   VARCHAR(255) NOT NULL,
  country     VARCHAR(100) DEFAULT 'India',
  text        TEXT NOT NULL,
  rating      SMALLINT CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
  is_featured BOOLEAN DEFAULT FALSE,
  is_active   BOOLEAN DEFAULT TRUE,
  display_order SMALLINT DEFAULT 0,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
```

**Current Mock Testimonials (to be replaced):**

| Name             | Condition                  | Country        |
|------------------|----------------------------|----------------|
| Rajesh Kumar     | Post-CABG Recovery         | India          |
| Sunita Devi      | COPD Management            | India          |
| James Williams   | Post-Bypass Rehabilitation | United Kingdom |
| Priya Sharma     | Post-Valve Repair          | India          |

### 4.5 `admin_users` (Admin Panel)

```sql
CREATE TABLE admin_users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  full_name     VARCHAR(255) NOT NULL,
  role          VARCHAR(20) DEFAULT 'staff',  -- 'super_admin' | 'admin' | 'staff' | 'coordinator'
  is_active     BOOLEAN DEFAULT TRUE,
  last_login    TIMESTAMPTZ,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);
```

### 4.6 `activity_log` (Audit Trail)

```sql
CREATE TABLE activity_log (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id    UUID REFERENCES admin_users(id),
  action      VARCHAR(100) NOT NULL,
  entity_type VARCHAR(50),    -- 'consultation' | 'international' | 'testimonial'
  entity_id   UUID,
  details     JSONB,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);
```

### 4.7 `cookie_consents` (GDPR Compliance)

```sql
CREATE TABLE cookie_consents (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id      VARCHAR(255) NOT NULL,
  consent_given   BOOLEAN DEFAULT FALSE,
  consent_type    VARCHAR(50),  -- 'essential' | 'analytics' | 'marketing' | 'all'
  ip_address      INET,
  user_agent      TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);
```

### 4.8 `newsletter_subscribers` (Optional - Future)

```sql
CREATE TABLE newsletter_subscribers (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         VARCHAR(255) UNIQUE NOT NULL,
  is_active     BOOLEAN DEFAULT TRUE,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ
);
```

---

## 5. API Endpoints

### 5.1 Public Endpoints (No Auth Required)

#### POST `/api/v1/consultation`
**Purpose:** Handle Contact Page form submission
**Request Body:**
```json
{
  "full_name": "string (required, max 255)",
  "phone": "string (required, max 20, pattern: +91 followed by 10 digits)",
  "email": "string (optional, valid email)",
  "condition": "string (required, enum: cardiac|pulmonary|neurovascular|postsurgical|oxygen|preventive|other)",
  "message": "string (optional, max 2000)",
  "agreed_to_privacy": "boolean (required, must be true)"
}
```
**Response (201):**
```json
{
  "success": true,
  "message": "Consultation request submitted successfully. Our team will contact you within 24 hours.",
  "reference_id": "uuid"
}
```
**Side Effects:**
1. Insert into `consultation_requests` table
2. Send email notification to `pranavayurehabilitation@gmail.com`
3. Send WhatsApp notification (optional, via WhatsApp Business API)
4. Send confirmation SMS to patient phone (optional)
5. Log in `activity_log`

**Rate Limiting:** 3 requests per IP per hour

---

#### POST `/api/v1/international-inquiry`
**Purpose:** Handle International Patient inquiry form submission
**Request Body:**
```json
{
  "full_name": "string (required, max 255)",
  "country": "string (required, max 100)",
  "contact_info": "string (required, max 255, WhatsApp number or email)",
  "condition": "string (optional, max 255)",
  "preferred_dates": "string (optional, max 255)",
  "medical_summary": "string (optional, max 5000)",
  "agreed_to_privacy": "boolean (required, must be true)"
}
```
**Response (201):**
```json
{
  "success": true,
  "message": "Your inquiry has been received. Our international patient coordinator will contact you within 2-4 working hours.",
  "reference_id": "uuid"
}
```
**Side Effects:**
1. Insert into `international_inquiries` table
2. Send email notification to admin team
3. Send confirmation email/WhatsApp to patient
4. Log in `activity_log`

**Rate Limiting:** 3 requests per IP per hour

---

#### POST `/api/v1/international-inquiry/:id/upload`
**Purpose:** Upload medical documents for international patient inquiry
**Request:** Multipart form data
- `file` - File (max 10MB, allowed: PDF, JPG, PNG, DICOM)
**Response (201):**
```json
{
  "success": true,
  "document_id": "uuid",
  "file_name": "report.pdf"
}
```

---

#### GET `/api/v1/testimonials`
**Purpose:** Fetch active testimonials for the website
**Query Params:**
- `featured=true` (optional, only return featured)
- `limit=10` (optional, default 10)
**Response (200):**
```json
{
  "testimonials": [
    {
      "id": "uuid",
      "name": "Rajesh Kumar",
      "condition": "Post-CABG Recovery",
      "country": "India",
      "text": "...",
      "rating": 5
    }
  ]
}
```

---

#### POST `/api/v1/cookie-consent`
**Purpose:** Record cookie consent
**Request Body:**
```json
{
  "session_id": "string",
  "consent_given": true,
  "consent_type": "all"
}
```

---

### 5.2 Admin Endpoints (Auth Required)

#### Auth
- `POST /api/v1/admin/login` - Admin login (returns JWT)
- `POST /api/v1/admin/logout` - Invalidate session
- `POST /api/v1/admin/refresh` - Refresh JWT token
- `GET /api/v1/admin/me` - Get current admin user

#### Consultation Management
- `GET /api/v1/admin/consultations` - List all consultations (paginated, filterable by status/date/condition)
- `GET /api/v1/admin/consultations/:id` - Get single consultation details
- `PATCH /api/v1/admin/consultations/:id` - Update status, add notes, assign coordinator
- `DELETE /api/v1/admin/consultations/:id` - Soft delete consultation
- `GET /api/v1/admin/consultations/export` - Export to CSV/Excel

#### International Inquiry Management
- `GET /api/v1/admin/international` - List all international inquiries (paginated)
- `GET /api/v1/admin/international/:id` - Get single inquiry with documents
- `PATCH /api/v1/admin/international/:id` - Update status, assign coordinator, add notes
- `DELETE /api/v1/admin/international/:id` - Soft delete
- `GET /api/v1/admin/international/:id/documents` - List documents
- `GET /api/v1/admin/international/export` - Export to CSV

#### Testimonial Management
- `GET /api/v1/admin/testimonials` - List all (including inactive)
- `POST /api/v1/admin/testimonials` - Add new testimonial
- `PUT /api/v1/admin/testimonials/:id` - Update testimonial
- `DELETE /api/v1/admin/testimonials/:id` - Delete testimonial
- `PATCH /api/v1/admin/testimonials/:id/toggle` - Toggle active/featured

#### Dashboard & Analytics
- `GET /api/v1/admin/dashboard` - Dashboard stats:
  ```json
  {
    "total_consultations": 156,
    "new_consultations_today": 3,
    "pending_consultations": 12,
    "total_international": 24,
    "new_international_today": 1,
    "by_condition": { "cardiac": 45, "pulmonary": 32, ... },
    "by_country": { "India": 120, "UK": 8, "USA": 12, "UAE": 6, ... },
    "monthly_trend": [ { "month": "2026-01", "count": 45 }, ... ]
  }
  ```

#### User Management (Super Admin only)
- `GET /api/v1/admin/users` - List admin users
- `POST /api/v1/admin/users` - Create new admin user
- `PUT /api/v1/admin/users/:id` - Update admin user
- `DELETE /api/v1/admin/users/:id` - Deactivate admin user

---

## 6. Form Handling & Validation

### 6.1 Contact Page Form (`ContactPage.tsx`)

**Current Frontend Fields:**
| Field            | Type       | Required | Validation                                 |
|------------------|------------|----------|--------------------------------------------|
| Full Name        | text       | Yes      | Min 2 chars, max 255, no special chars     |
| Phone Number     | tel        | Yes      | Indian format: +91 XXXXX XXXXX (10 digits) |
| Email Address    | email      | No       | Valid email format                          |
| Condition/Reason | select     | Yes      | Must be one of the enum values             |
| Additional Details | textarea | No       | Max 2000 characters                        |

**Missing (needs to be added to frontend):**
- [x] Privacy Policy checkbox: "I agree to the Privacy Policy & Terms of Service" (links to `/privacy` and `/terms`)
- [x] Honeypot field for spam prevention (hidden `website` field)
- [x] reCAPTCHA v3 or hCaptcha integration
- [x] Phone number format validation (Indian format)

**Select Options (condition dropdown):**
```
cardiac         -> "Cardiac Rehabilitation"
pulmonary       -> "Pulmonary Rehabilitation"
neurovascular   -> "Neurovascular Recovery"
postsurgical    -> "Post-Surgical Recovery"
oxygen          -> "Advanced Oxygen Therapies"
preventive      -> "Preventive Rehabilitation"
other           -> "Other"
```

### 6.2 International Patient Form (`InternationalPage.tsx`)

**Current Frontend Fields:**
| Field                   | Type       | Required | Validation                          |
|-------------------------|------------|----------|-------------------------------------|
| Full Name               | text       | Yes      | Min 2 chars, max 255                |
| Country                 | text       | Yes      | Max 100 chars                       |
| WhatsApp / Email        | text       | Yes      | Valid email OR international phone   |
| Condition/Therapy Interest | text    | No       | Max 255 chars                       |
| Preferred Travel Dates  | text       | No       | Max 255 chars                       |
| Medical Summary         | textarea   | No       | Max 5000 chars                      |

**Missing (needs to be added to frontend):**
- [x] Privacy Policy checkbox
- [x] File upload for medical reports (PDF, JPG, PNG, max 10MB each, max 5 files)
- [x] Country dropdown instead of free text (ISO 3166 country list)
- [x] Honeypot / CAPTCHA

### 6.3 Server-Side Validation Rules

```javascript
// Shared validation
const sanitizeInput = (input) => {
  // Strip HTML tags
  // Trim whitespace
  // Escape special characters
  // Normalize Unicode
};

// Phone validation (Indian)
const isValidIndianPhone = (phone) => /^(\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/.test(phone);

// International phone validation
const isValidIntlPhone = (phone) => /^\+?[1-9]\d{6,14}$/.test(phone);

// Rate limiting per IP
const rateLimiter = {
  windowMs: 60 * 60 * 1000,  // 1 hour
  max: 3,                     // 3 submissions per hour per IP
};
```

---

## 7. Email & Notification System

### 7.1 Email Templates Needed

#### A. Admin Notification - New Consultation Request
**To:** pranavayurehabilitation@gmail.com
**Subject:** `New Consultation Request - {Patient Name} - {Condition}`
**Body:**
```
New consultation request received:

Patient Name: {full_name}
Phone: {phone}
Email: {email}
Condition: {condition}
Message: {message}

Submitted: {created_at} IST
Source: {source_page}
Reference ID: {id}

---
Login to admin panel to manage this request.
```

#### B. Admin Notification - New International Inquiry
**To:** pranavayurehabilitation@gmail.com
**Subject:** `International Patient Inquiry - {Patient Name} from {Country}`
**Body:**
```
New international patient inquiry received:

Patient Name: {full_name}
Country: {country}
Contact: {contact_info}
Condition: {condition}
Travel Dates: {preferred_dates}
Medical Summary: {medical_summary}
Attachments: {document_count} files

Submitted: {created_at} IST
Reference ID: {id}

IMPORTANT: Respond within 2-4 working hours as committed.

---
Login to admin panel to manage this inquiry.
```

#### C. Patient Confirmation - Consultation Request
**To:** {patient_email}
**Subject:** `Pranavayu - Consultation Request Received (Ref: {reference_id})`
**Body:**
```
Dear {full_name},

Thank you for reaching out to Pranavayu Cardiopulmonary Rehabilitation Center.

We have received your consultation request for {condition}. Our team will contact you within 24 hours at {phone}.

Your Reference ID: {reference_id}

If urgent, please contact us directly:
Phone: +91 79975 92222
WhatsApp: wa.me/917997592222

Warm regards,
Pranavayu Rehabilitation Center
Maharanipeta, Visakhapatnam

---
This is an automated message. Please do not reply to this email.
```

#### D. Patient Confirmation - International Inquiry
**To:** {patient_email or WhatsApp}
**Subject:** `Pranavayu - International Patient Inquiry Received (Ref: {reference_id})`
**Body:** Similar to above but mentions 2-4 working hour response time and includes coordinator info.

### 7.2 WhatsApp Business API Integration (Optional)

**Provider:** WhatsApp Business API (via Twilio, WATI, or AiSensy)
**Use Cases:**
1. Send confirmation to patient after form submission
2. Admin notification for new inquiries
3. Status updates to international patients
4. Appointment reminders

### 7.3 SMS Integration (Optional)

**Provider:** Twilio, MSG91, or TextLocal (India)
**Use Cases:**
1. OTP for medical document access
2. Appointment confirmation
3. Status updates

---

## 8. Authentication & Admin Panel

### 8.1 Admin Panel Features

The admin panel should be a separate React app (or route-protected section) with:

#### Dashboard
- Total consultation requests (today/week/month/all-time)
- Total international inquiries
- Status breakdown (new/contacted/scheduled/completed)
- Condition-wise distribution chart
- Country-wise distribution for international
- Recent submissions list

#### Consultation Management
- Sortable/filterable table of all consultations
- Quick status update (dropdown)
- Assign to coordinator
- Add internal notes
- Click-to-call / click-to-WhatsApp patient
- Export to CSV/Excel
- Email patient directly

#### International Inquiry Management
- Same as above plus:
- View/download medical documents
- Track visa processing status
- Travel date tracking

#### Testimonial Management
- CRUD for testimonials
- Toggle active/inactive
- Toggle featured/normal
- Reorder display sequence
- Preview card

#### Settings
- User management (add/remove admin users)
- Email template preview
- Notification preferences

### 8.2 Auth Implementation

```
Authentication: JWT (access + refresh tokens)
Access Token: 15 minute expiry
Refresh Token: 7 day expiry, stored in httpOnly cookie
Password: bcrypt with salt rounds 12
Session: Redis-backed (optional, for token blacklisting)
```

---

## 9. Content Management

### 9.1 Static Content (Currently Hardcoded in Frontend)

The following content is currently hardcoded in React components. For a Phase 1 launch, this can remain static. For Phase 2, consider a headless CMS (Strapi, Sanity, or Contentful).

#### Programs Data (`ProgramPage.tsx` and `ProgramsSection.tsx`)
- 6 programs with: title, tagline, description, who needs it, how it works, benefits, FAQs, hero image
- Slugs: `cardiac-rehabilitation`, `pulmonary-rehabilitation`, `neurovascular-recovery`, `post-surgical-recovery`, `long-covid-recovery`, `preventive-cardio`

#### Therapy Data (`TherapyPage.tsx` and `TherapiesSection.tsx`)
- 5 therapies with: title, tagline, description, mechanism, steps, conditions, benefits, safety, contraindications, procedure info, research references, FAQs
- Slugs: `hbot`, `cryotherapy`, `shockwave`, `hydrogen`, `gait`

#### Conditions Data (`ConditionsPage.tsx` and `ConditionsSection.tsx`)
- 4 categories: Cardiac (9 conditions), Pulmonary (8 conditions), Neurovascular (8 conditions), Vascular (6 conditions)

#### Doctor Data (`DoctorPage.tsx`)
- Full bio, expertise tabs (Cardiac Surgery, Endovascular & Vascular, Thoracic Procedures, Rehabilitation)
- Career milestones, awards, philosophy quote
- External link: https://sites.google.com/view/drharivadan/home

#### Patient Journey (`PatientJourneyPage.tsx`)
- 5 steps with detailed items and sub-sections
- FAQ section

#### Homepage Sections
- Hero: stats (15+ years, 5000+ therapies, 20+ international patients, 100% personalized)
- About, Programs, Therapies, Doctor, Patient Journey, Conditions, International Block, Testimonials, Facility, CTA

### 9.2 Dynamic Content (Needs Backend)

| Content Type    | Storage        | Admin Managed |
|-----------------|----------------|---------------|
| Testimonials    | Database       | Yes           |
| Form submissions| Database       | Yes           |
| Facility images | Storage bucket | Optional      |
| Blog posts      | Database/CMS   | Future Phase  |
| FAQs            | Database/CMS   | Future Phase  |

---

## 10. Third-Party Integrations

### 10.1 Required Integrations

| Service               | Purpose                              | Priority |
|-----------------------|--------------------------------------|----------|
| Email SMTP            | Send notifications/confirmations     | P0       |
| Google reCAPTCHA v3   | Spam prevention on forms             | P0       |
| Google Analytics 4    | Website analytics                    | P1       |
| Google Search Console | SEO monitoring                       | P1       |
| Google Maps Embed     | Location map on Contact page         | P1       |

### 10.2 Recommended Integrations

| Service               | Purpose                              | Priority |
|-----------------------|--------------------------------------|----------|
| WhatsApp Business API | Patient communication                | P1       |
| Twilio / MSG91        | SMS notifications                    | P2       |
| Google Tag Manager    | Marketing tag management             | P2       |
| Facebook Pixel        | Social media remarketing             | P2       |
| Calendly / Cal.com    | Online appointment scheduling        | P2       |
| Razorpay / Stripe     | Online payment (consultation fees)   | P3       |
| Sentry                | Error monitoring                     | P1       |

### 10.3 API Keys & Environment Variables Needed

```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/pranavayu

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=pranavayurehabilitation@gmail.com
SMTP_PASS=app-specific-password
SMTP_FROM_NAME=Pranavayu Rehabilitation
SMTP_FROM_EMAIL=pranavayurehabilitation@gmail.com

# Auth
JWT_SECRET=your-secret-key-min-256-bits
JWT_REFRESH_SECRET=your-refresh-secret

# Google
RECAPTCHA_SITE_KEY=6Le...
RECAPTCHA_SECRET_KEY=6Le...
GA_MEASUREMENT_ID=G-XXXXXXXXXX

# WhatsApp Business API (optional)
WHATSAPP_API_TOKEN=your-token
WHATSAPP_PHONE_ID=your-phone-id

# File Storage
S3_BUCKET=pranavayu-uploads
S3_REGION=ap-south-1
S3_ACCESS_KEY=your-key
S3_SECRET_KEY=your-secret

# Application
APP_URL=https://pranavayu.com
ADMIN_URL=https://admin.pranavayu.com
NODE_ENV=production
PORT=3001
CORS_ORIGINS=https://pranavayu.com,https://admin.pranavayu.com
```

---

## 11. Security & Compliance

### 11.1 Data Protection Requirements

This website handles **sensitive medical information** and must comply with:

1. **Information Technology Act, 2000 (India)** - Data protection provisions
2. **SPDI Rules, 2011** - Sensitive Personal Data & Information rules
3. **Digital Personal Data Protection Act, 2023 (India)** - New data protection law
4. **GDPR** - For international patients from EU/UK

### 11.2 Security Measures

```
- HTTPS everywhere (SSL/TLS certificate)
- CORS restricted to allowed origins
- Rate limiting on all API endpoints
- Input sanitization (XSS prevention)
- SQL injection prevention (parameterized queries / ORM)
- CSRF protection tokens
- Helmet.js security headers
- File upload validation (type, size, magic bytes)
- Medical documents encrypted at rest (AES-256)
- Database backups (daily, encrypted)
- Audit logging for all admin actions
- Password policy: min 12 chars, uppercase, lowercase, number, special char
- Account lockout after 5 failed login attempts
- Session timeout: 30 minutes of inactivity
```

### 11.3 Cookie Consent Banner

**Required Implementation:**
- Cookie consent banner on first visit
- Options: Essential Only / Accept All / Customize
- Categories: Essential (always on), Analytics, Marketing
- Store consent in database + localStorage
- Block Google Analytics / Facebook Pixel until consent given
- Must appear before any non-essential cookies are set
- "Manage Preferences" link in footer

### 11.4 Privacy & Forms Checkbox

Both the Contact form and International Inquiry form need:
```html
<label>
  <input type="checkbox" required />
  I agree to the <a href="/privacy">Privacy Policy</a> & <a href="/terms">Terms of Service</a>
</label>
```
This checkbox must be checked before form submission. The `agreed_to_privacy` field must be `true` in the API request.

---

## 12. SEO & Performance

### 12.1 Server-Side Rendering (SSR) / Static Site Generation (SSG)

Current frontend is a client-side React SPA. For SEO, consider:

**Option A: Next.js Migration**
- Convert to Next.js App Router
- SSG for static pages (programs, therapies, conditions, doctor, privacy, terms)
- SSR for dynamic content (testimonials)
- Automatic sitemap generation
- Built-in image optimization

**Option B: Prerendering Service**
- Use prerender.io or rendertron
- Serves prerendered HTML to search engine crawlers
- No code changes needed to existing React app

### 12.2 Meta Tags Required

Each page needs:
```html
<title>{Page Title} | Pranavayu Rehabilitation Center</title>
<meta name="description" content="{Page-specific description}" />
<meta property="og:title" content="{Title}" />
<meta property="og:description" content="{Description}" />
<meta property="og:image" content="{Image URL}" />
<meta property="og:url" content="{Page URL}" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="canonical" href="{Canonical URL}" />
```

### 12.3 Structured Data (JSON-LD)

```json
// Organization
{
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Pranavayu Cardiopulmonary Rehabilitation Center",
  "url": "https://pranavayu.com",
  "logo": "https://pranavayu.com/logo.png",
  "image": "https://pranavayu.com/facility.jpg",
  "description": "Advanced Cardiopulmonary Recovery Center with HBOT, Cryotherapy, and Regenerative Therapies.",
  "telephone": ["+917997592222", "+919133685222"],
  "email": "pranavayurehabilitation@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1st Floor, Nowroji Road, Maharanipeta",
    "addressLocality": "Visakhapatnam",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "530002",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "17.7048",
    "longitude": "83.2984"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "19:00"
  },
  "medicalSpecialty": [
    "Cardiology",
    "Pulmonology",
    "PhysicalTherapy",
    "Neurology"
  ],
  "founder": {
    "@type": "Person",
    "name": "Dr. Harivadan Lukka",
    "jobTitle": "Cardiothoracic & Vascular Surgeon",
    "medicalSpecialty": "CardiothoracicSurgery"
  }
}

// Doctor
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Harivadan Lukka",
  "medicalSpecialty": "CardiothoracicSurgery",
  "qualification": ["MBBS", "MS", "M.Ch"],
  "worksFor": {
    "@type": "MedicalBusiness",
    "name": "Pranavayu Cardiopulmonary Rehabilitation Center"
  }
}
```

### 12.4 Sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://pranavayu.com/</loc><priority>1.0</priority></url>
  <url><loc>https://pranavayu.com/doctor</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/programs</loc><priority>0.9</priority></url>
  <url><loc>https://pranavayu.com/programs/cardiac-rehabilitation</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/programs/pulmonary-rehabilitation</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/programs/neurovascular-recovery</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/programs/post-surgical-recovery</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/programs/long-covid-recovery</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/programs/preventive-cardio</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/therapies/hbot</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/therapies/cryotherapy</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/therapies/shockwave</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/therapies/hydrogen</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/therapies/gait</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/conditions</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/patient-journey</loc><priority>0.7</priority></url>
  <url><loc>https://pranavayu.com/international</loc><priority>0.8</priority></url>
  <url><loc>https://pranavayu.com/contact</loc><priority>0.9</priority></url>
  <url><loc>https://pranavayu.com/privacy</loc><priority>0.3</priority></url>
  <url><loc>https://pranavayu.com/terms</loc><priority>0.3</priority></url>
</urlset>
```

### 12.5 robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://pranavayu.com/sitemap.xml
```

---

## 13. Deployment & Infrastructure

### 13.1 Recommended Architecture

```
                    [Cloudflare CDN / DNS]
                           |
                    [Load Balancer]
                    /             \
           [Frontend]          [Backend API]
           Vercel/Netlify      Railway/Render/AWS
           (React SPA)        (Node.js/Express)
                                    |
                              [PostgreSQL]
                              Supabase / RDS
                                    |
                              [S3 Storage]
                              Medical docs
```

### 13.2 Environment Setup

| Environment | URL                          | Database        |
|-------------|------------------------------|-----------------|
| Development | http://localhost:3000         | Local PostgreSQL|
| Staging     | https://staging.pranavayu.com| Staging DB      |
| Production  | https://pranavayu.com        | Production DB   |

### 13.3 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
1. Push to main branch
2. Run tests (unit + integration)
3. Build frontend
4. Run database migrations
5. Deploy backend to Railway/Render
6. Deploy frontend to Vercel
7. Run smoke tests
8. Notify on Slack/Email
```

### 13.4 Monitoring & Alerting

- **Uptime:** UptimeRobot or BetterStack (check every 5 min)
- **Errors:** Sentry (frontend + backend)
- **Logs:** Datadog or Logtail
- **Performance:** Vercel Analytics / Lighthouse CI
- **Database:** Supabase dashboard or pgAdmin

---

## 14. Current Issues & Outstanding Items

### 14.1 Known Issues to Fix

| Issue                                         | Priority | Status     |
|-----------------------------------------------|----------|------------|
| Contact form is frontend-only (no backend)    | P0       | Needs fix  |
| International inquiry form is frontend-only   | P0       | Needs fix  |
| Testimonials are hardcoded mock data          | P1       | Needs CMS  |
| All images are Unsplash stock photos          | P1       | Needs real photos |
| No cookie consent banner                      | P1       | Needs implementation |
| No Privacy Policy checkbox on forms           | P0       | Needs implementation |
| No reCAPTCHA/spam prevention on forms         | P0       | Needs implementation |
| No email notifications on form submission     | P0       | Needs backend |
| No admin panel for managing submissions       | P1       | Needs development |
| No SEO meta tags / structured data            | P1       | Needs implementation |
| No sitemap.xml / robots.txt                   | P1       | Needs creation |
| No server-side rendering (SPA only)           | P2       | Consider Next.js |
| No file upload for medical reports            | P2       | Needs backend |
| Social media links are placeholder (#)        | P1       | Needs real URLs |

### 14.2 Phone Number Usage (Standardized)

| Location          | Primary: +91 79975 92222 | Secondary: +91 91336 85222 |
|-------------------|--------------------------|----------------------------|
| TopInfoBar        | Yes                      | No                         |
| Contact Page      | Yes                      | No                         |
| Footer            | Yes                      | Yes                        |
| International Page| Yes                      | Yes                        |
| FloatingButtons   | Yes (call + WhatsApp)    | No                         |
| CTA Section       | WhatsApp link            | No                         |
| Privacy/Terms     | Referenced               | Referenced                 |

### 14.3 Development Phases

#### Phase 1: Essential Backend (Week 1-2)
- [ ] Set up PostgreSQL database with schema
- [ ] Build API for consultation form submission
- [ ] Build API for international inquiry form submission
- [ ] Email notification system (admin + patient confirmation)
- [ ] Add Privacy Policy checkbox to both forms
- [ ] Add reCAPTCHA to both forms
- [ ] Rate limiting & input validation
- [ ] Cookie consent banner
- [ ] Deploy backend

#### Phase 2: Admin Panel (Week 3-4)
- [ ] Admin authentication system
- [ ] Dashboard with stats
- [ ] Consultation management CRUD
- [ ] International inquiry management CRUD
- [ ] Testimonial management CRUD
- [ ] Export to CSV functionality

#### Phase 3: SEO & Marketing (Week 5)
- [ ] Add meta tags to all pages (consider react-helmet-async)
- [ ] Add JSON-LD structured data
- [ ] Generate sitemap.xml and robots.txt
- [ ] Set up Google Analytics 4
- [ ] Set up Google Search Console
- [ ] Consider SSR/prerendering for SEO

#### Phase 4: Advanced Features (Week 6+)
- [ ] Medical document upload system (international patients)
- [ ] WhatsApp Business API integration
- [ ] SMS notification system
- [ ] Online appointment scheduling (Calendly integration)
- [ ] Blog/Health Tips section
- [ ] Google Maps integration on Contact page
- [ ] Newsletter subscription system
- [ ] Online payment gateway for consultation fees

---

## Appendix A: Component-to-API Mapping

| Component              | File                       | API Endpoint                     | Data Flow |
|------------------------|----------------------------|----------------------------------|-----------|
| ContactPage            | ContactPage.tsx            | POST /api/v1/consultation        | Write     |
| InternationalPage      | InternationalPage.tsx      | POST /api/v1/international-inquiry | Write   |
| TestimonialsSection    | TestimonialsSection.tsx    | GET /api/v1/testimonials         | Read      |
| InternationalPage      | InternationalPage.tsx (testimonials) | GET /api/v1/testimonials?featured=true | Read |
| Cookie Banner (new)    | CookieBanner.tsx (to create) | POST /api/v1/cookie-consent    | Write     |

## Appendix B: WhatsApp Links Used

| Component          | WhatsApp URL                    | Purpose                |
|--------------------|---------------------------------|------------------------|
| FloatingButtons    | wa.me/917997592222              | Quick chat             |
| ContactPage        | wa.me/917997592222              | Chat on WhatsApp       |
| CTASection         | wa.me/917997592222              | WhatsApp Now           |

## Appendix C: External Links

| Link                                              | Used In           | Behavior     |
|---------------------------------------------------|-------------------|--------------|
| https://sites.google.com/view/drharivadan/home    | DoctorPage        | New tab      |
| https://trendzmarketers.com/                      | MarketingStrip    | New tab      |
| https://wa.me/917997592222                        | Multiple          | New tab      |
| tel:+917997592222                                 | Multiple          | Native call  |
| tel:+919133685222                                 | Footer            | Native call  |
| mailto:pranavayurehabilitation@gmail.com          | Contact, Footer   | Native email |

---

*End of Backend Development Specification*
