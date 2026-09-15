import { LegalPage } from "@/components/LegalPage";

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" sections={[
    { heading: "Our Commitment", paragraphs: ["NEXIV is committed to protecting the privacy and confidentiality of our clients and website visitors. This policy explains how Nexiv Limited collects, uses and protects personal information."] },
    { heading: "Information Collection and Use", paragraphs: ["Personal Information: We collect information you voluntarily provide through contact forms, email or phone, including your name, email address, phone number and company details. We use it solely to respond to enquiries and provide our services.", "Website Usage Information: We may collect non-personal information such as IP address, browser type, operating system and usage data through cookies or similar technologies to improve your browsing experience and site functionality."] },
    { heading: "Information Sharing and Disclosure", paragraphs: ["NEXIV does not sell or trade personal information to third parties without your consent. We may share information with trusted service providers under confidentiality agreements when needed to provide services, or where required by law."] },
    { heading: "Data Security", paragraphs: ["We use reasonable security measures to protect personal information. However, no method of internet transmission or electronic storage is completely secure, and we cannot guarantee absolute security."] },
    { heading: "Links to External Websites", paragraphs: ["Our website may link to third-party websites. NEXIV is not responsible for their privacy practices and encourages you to review their policies independently."] },
    { heading: "Changes to This Policy", paragraphs: ["NEXIV may update this Privacy Policy at any time. Changes take effect when posted on this page, so we encourage you to review it periodically."] },
  ]} />;
}
