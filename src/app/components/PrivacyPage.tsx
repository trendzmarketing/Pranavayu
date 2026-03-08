import { motion } from "motion/react";

export function PrivacyPage() {
    return (
        <div className="pt-32 lg:pt-36">
            <section className="py-12 lg:py-16">
                <div className="max-w-3xl mx-auto px-5 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-[#1a3a4a] mb-8" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600 }}>Privacy Policy</h1>

                        <div className="prose max-w-none text-gray-500 text-[14.5px]" style={{ lineHeight: 1.85 }}>
                            <p className="mb-6">Effective Date: March 2025</p>
                            <p className="mb-6">Pranavayu Rehabilitation Center (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and safeguard your personal information.</p>

                            <h2 className="text-[#1a3a4a] mt-8 mb-3" style={{ fontSize: "1.1rem", fontWeight: 600 }}>Information We Collect</h2>
                            <p className="mb-4">We may collect personal information including but not limited to:</p>
                            <ul className="list-disc pl-6 mb-6 space-y-1">
                                <li>Name, email address, and phone number</li>
                                <li>Medical history and health information you share with us</li>
                                <li>Communication preferences</li>
                                <li>Website usage data through cookies and analytics</li>
                            </ul>

                            <h2 className="text-[#1a3a4a] mt-8 mb-3" style={{ fontSize: "1.1rem", fontWeight: 600 }}>How We Use Your Information</h2>
                            <ul className="list-disc pl-6 mb-6 space-y-1">
                                <li>To provide medical consultations and rehabilitation services</li>
                                <li>To communicate with you regarding appointments and treatment plans</li>
                                <li>To improve our services and website experience</li>
                                <li>To comply with legal and regulatory requirements</li>
                            </ul>

                            <h2 className="text-[#1a3a4a] mt-8 mb-3" style={{ fontSize: "1.1rem", fontWeight: 600 }}>Data Protection</h2>
                            <p className="mb-6">We implement appropriate security measures to protect your personal and medical information. Your health data is handled in compliance with applicable medical privacy regulations.</p>

                            <h2 className="text-[#1a3a4a] mt-8 mb-3" style={{ fontSize: "1.1rem", fontWeight: 600 }}>Third-Party Sharing</h2>
                            <p className="mb-6">We do not sell or share your personal information with third parties for marketing purposes. Information may be shared with healthcare providers involved in your treatment, or as required by law.</p>

                            <h2 className="text-[#1a3a4a] mt-8 mb-3" style={{ fontSize: "1.1rem", fontWeight: 600 }}>Contact Us</h2>
                            <p className="mb-6">If you have questions about this Privacy Policy, contact us at:</p>
                            <p className="mb-2">Phone: +91 79975 92222</p>
                            <p className="mb-2">Email: info@pranavayu.com</p>
                            <p>Maharanipeta, Visakhapatnam, Andhra Pradesh, India</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
