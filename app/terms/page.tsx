import { LegalPage } from "@/components/LegalPage";

export default function TermsPage() {
  return <LegalPage title="Terms of Service" sections={[
    { heading: "Service Agreement", paragraphs: ["Services provided by NEXIV are subject to a separate agreement or contract that outlines the scope of work, timelines, deliverables and any service-specific terms."] },
    { heading: "Intellectual Property", paragraphs: ["All intellectual property rights, including copyrights and trademarks related to designs, websites and creative works produced by NEXIV, belong to Nexiv Limited unless otherwise stated in a separate agreement."] },
    { heading: "Client Responsibilities", paragraphs: ["Clients must provide accurate and complete information needed to deliver services. Clients are also responsible for reviewing and approving deliverables within agreed timeframes."] },
    { heading: "Limitation of Liability", paragraphs: ["NEXIV is not liable for direct, indirect, incidental, consequential or special damages arising from the use or inability to use our services, including loss of data, profits or business interruption."] },
    { heading: "Governing Law and Jurisdiction", paragraphs: ["These terms are governed by and interpreted in accordance with the laws of Malawi. Any disputes are subject to the exclusive jurisdiction of the courts of Malawi."] },
  ]} />;
}
