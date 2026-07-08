import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Projextly",
  description:
    "Read Projextly's Privacy Policy. Learn how we collect, use, and protect your personal data when you use our web development services and visit our website.",
  openGraph: {
    title: "Privacy Policy | Projextly",
    description:
      "Learn how Projextly collects, uses, and protects your personal data.",
  },
  alternates: {
    canonical: "https://projextly.com/privacy",
  },
};

interface ContentBlock {
  subtitle?: string;
  text: string;
}

interface Section {
  id: string;
  title: string;
  content: ContentBlock[];
}

const sections: Section[] = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you contact us, request a quote, or engage our services, we may collect personal information such as your name, email address, phone number, company name, and project details. This information is provided voluntarily by you through our contact forms, email communications, or direct interactions.",
      },
      {
        subtitle: "Usage Data",
        text: "We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages visited, and the dates and times of your visits. This data helps us understand how visitors interact with our site and improve our services.",
      },
      {
        subtitle: "Cookies & Tracking Technologies",
        text: "We use cookies and similar tracking technologies to enhance your browsing experience, analyse site traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings at any time.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    content: [
      {
        text: "We use the information we collect for the following purposes:",
      },
      {
        text: "• To respond to your enquiries and provide customer support\n• To deliver and manage the web development services you've engaged us for\n• To send project updates, invoices, and service-related communications\n• To improve our website, services, and overall user experience\n• To analyse usage trends and optimise site performance\n• To comply with legal obligations and enforce our terms",
      },
    ],
  },
  {
    id: "data-sharing",
    title: "3. Data Sharing & Disclosure",
    content: [
      {
        text: "We do not sell, rent, or trade your personal information to third parties. We may share your data with trusted service providers who assist us in operating our business — such as hosting providers, analytics platforms, and email delivery services — strictly under confidentiality agreements. We may also disclose your information if required by law, regulation, or legal process.",
      },
    ],
  },
  {
    id: "data-security",
    title: "4. Data Security",
    content: [
      {
        text: "We implement industry-standard security measures to protect your personal information from unauthorised access, alteration, disclosure, or destruction. This includes encrypted data transmission (SSL/TLS), secure server infrastructure, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
      },
    ],
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: [
      {
        text: "We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Project-related data is typically retained for the duration of our business relationship and a reasonable period thereafter for legal and accounting purposes.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "6. Your Rights",
    content: [
      {
        text: "Depending on your jurisdiction, you may have the following rights regarding your personal data:",
      },
      {
        text: "• Right to access the personal data we hold about you\n• Right to request correction of inaccurate or incomplete data\n• Right to request deletion of your personal data\n• Right to restrict or object to the processing of your data\n• Right to data portability\n• Right to withdraw consent at any time",
      },
      {
        text: "To exercise any of these rights, please contact us at privacy@projextly.com. We will respond to your request within 30 days.",
      },
    ],
  },
  {
    id: "third-party-links",
    title: "7. Third-Party Links",
    content: [
      {
        text: "Our website may contain links to third-party websites or services that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. We encourage you to review the privacy policy of every site you visit.",
      },
    ],
  },
  {
    id: "childrens-privacy",
    title: "8. Children's Privacy",
    content: [
      {
        text: "Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to remove that information promptly.",
      },
    ],
  },
  {
    id: "changes-to-policy",
    title: "9. Changes to This Policy",
    content: [
      {
        text: "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make significant changes, we will update the \"Last Updated\" date at the top of this page. We encourage you to review this policy periodically.",
      },
    ],
  },
  {
    id: "contact-us",
    title: "10. Contact Us",
    content: [
      {
        text: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:",
      },
      {
        text: "Email: privacy@projextly.com\nAddress: Bengaluru, Karnataka, India",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Here's how we handle your data with care and transparency."
        badge="Legal"
      />

      <section className="relative bg-[#030712] py-24">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#10B981]/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          {/* Last Updated Badge */}
          <div className="mb-16 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-slate-400 text-sm font-medium">
              Last Updated: July 8, 2026
            </span>
          </div>

          {/* Table of Contents */}
          <div className="glass-panel p-8 mb-16">
            <h2 className="text-white font-display font-semibold text-xl mb-6">
              Table of Contents
            </h2>
            <nav aria-label="Privacy policy sections">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-slate-400 hover:text-[#10B981] transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-[#10B981] transition-all duration-300 group-hover:w-3" />
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Sections */}
          <div className="space-y-16">
            {sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-8 relative">
                  <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#10B981] to-transparent rounded-full hidden lg:block" />
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.content.map((block, i) => (
                    <div key={i}>
                      {block.subtitle && (
                        <h3 className="text-lg font-display font-semibold text-slate-200 mb-3">
                          {block.subtitle}
                        </h3>
                      )}
                      <p className="text-slate-400 leading-relaxed text-base whitespace-pre-line">
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 h-px bg-gradient-to-r from-white/5 via-white/10 to-white/5" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
