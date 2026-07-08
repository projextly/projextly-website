import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Terms of Service | Projextly",
  description:
    "Read Projextly's Terms of Service. Understand the terms and conditions that govern the use of our website and web development services.",
  openGraph: {
    title: "Terms of Service | Projextly",
    description:
      "Terms and conditions governing the use of Projextly's website and services.",
  },
  alternates: {
    canonical: "https://projextly.com/terms",
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
    id: "acceptance-of-terms",
    title: "1. Acceptance of Terms",
    content: [
      {
        text: 'By accessing or using the Projextly website ("Site") or engaging our web development services ("Services"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our Site or Services. These terms constitute a legally binding agreement between you and Projextly.',
      },
    ],
  },
  {
    id: "services-description",
    title: "2. Description of Services",
    content: [
      {
        text: "Projextly is a web development agency based in Bengaluru, India. We provide a range of digital services including but not limited to:",
      },
      {
        text: "• Custom website design and development\n• Web application development\n• UI/UX design and consultation\n• E-commerce solutions\n• SEO optimisation and performance audits\n• Website maintenance and support",
      },
      {
        text: "The scope, timeline, and deliverables for any specific project will be outlined in a separate project proposal or service agreement between you and Projextly.",
      },
    ],
  },
  {
    id: "client-obligations",
    title: "3. Client Obligations",
    content: [
      {
        text: "When engaging our services, you agree to:",
      },
      {
        text: "• Provide accurate and complete information required for the project\n• Supply all necessary content, assets, and approvals in a timely manner\n• Respond to communications and review requests within reasonable timeframes\n• Ensure that all materials provided to us do not infringe on any third-party intellectual property rights\n• Make payments according to the agreed-upon schedule",
      },
      {
        text: "Delays caused by failure to meet these obligations may result in extended project timelines and may incur additional costs.",
      },
    ],
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property",
    content: [
      {
        subtitle: "Our Intellectual Property",
        text: "All content on the Projextly website — including but not limited to text, graphics, logos, images, code, and design elements — is the property of Projextly and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without express written permission.",
      },
      {
        subtitle: "Client Project Deliverables",
        text: "Upon full payment for a completed project, ownership of the custom deliverables created specifically for you (such as custom designs, code, and content) will transfer to you, unless otherwise specified in the project agreement. Projextly retains the right to use project work in our portfolio and marketing materials unless explicitly agreed otherwise.",
      },
      {
        subtitle: "Third-Party Components",
        text: "Projects may incorporate third-party libraries, frameworks, fonts, or assets that are subject to their own licences. These components remain the property of their respective owners and are governed by their original licence terms.",
      },
    ],
  },
  {
    id: "payments-and-refunds",
    title: "5. Payments & Refunds",
    content: [
      {
        text: "Payment terms, including pricing, milestones, and schedules, will be defined in your project proposal or service agreement. General terms include:",
      },
      {
        text: "• A non-refundable deposit is required to commence work on any project\n• Progress payments may be required at defined project milestones\n• Final payment is due upon project completion and before final deliverable handover\n• Late payments may incur interest charges and may result in work being paused\n• Refund eligibility is assessed on a case-by-case basis depending on project stage and work completed",
      },
    ],
  },
  {
    id: "project-timeline",
    title: "6. Project Timelines",
    content: [
      {
        text: "We strive to deliver projects within the estimated timelines provided in our proposals. However, timelines are estimates and not guarantees. Factors that may affect delivery include scope changes, delayed client feedback, third-party dependencies, and unforeseen technical challenges. We will communicate proactively about any significant timeline adjustments.",
      },
    ],
  },
  {
    id: "limitation-of-liability",
    title: "7. Limitation of Liability",
    content: [
      {
        text: 'Our services are provided "as is" and "as available." To the fullest extent permitted by law, Projextly shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, business opportunities, or goodwill, arising from your use of our Site or Services.',
      },
      {
        text: "Our total liability for any claim arising from our services shall not exceed the total amount paid by you to Projextly for the specific service giving rise to the claim.",
      },
    ],
  },
  {
    id: "confidentiality",
    title: "8. Confidentiality",
    content: [
      {
        text: "Both parties agree to keep confidential any proprietary or sensitive information shared during the course of a project. This includes business strategies, technical specifications, designs, and any other information designated as confidential. This obligation survives the termination of any service agreement.",
      },
    ],
  },
  {
    id: "termination",
    title: "9. Termination",
    content: [
      {
        text: "Either party may terminate a service engagement by providing written notice. In the event of termination:",
      },
      {
        text: "• You will be invoiced for all work completed up to the date of termination\n• Any deposits paid are non-refundable\n• Deliverables completed and paid for will be transferred to you\n• Work-in-progress materials may be retained by Projextly until outstanding payments are settled",
      },
      {
        text: "Projextly reserves the right to terminate services immediately if you breach these terms, engage in unlawful activity, or fail to make payments as agreed.",
      },
    ],
  },
  {
    id: "website-use",
    title: "10. Use of This Website",
    content: [
      {
        text: "When using our website, you agree not to:",
      },
      {
        text: "• Use the site for any unlawful purpose\n• Attempt to gain unauthorised access to our systems or data\n• Transmit malware, viruses, or harmful code\n• Scrape, crawl, or extract data from our site without permission\n• Impersonate any person or entity\n• Interfere with the site's functionality or security",
      },
    ],
  },
  {
    id: "indemnification",
    title: "11. Indemnification",
    content: [
      {
        text: "You agree to indemnify and hold harmless Projextly, its team members, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from your breach of these terms, your use of our services, or any content or materials you provide to us that infringe on third-party rights.",
      },
    ],
  },
  {
    id: "governing-law",
    title: "12. Governing Law",
    content: [
      {
        text: "These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.",
      },
    ],
  },
  {
    id: "changes-to-terms",
    title: "13. Changes to These Terms",
    content: [
      {
        text: 'We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. The "Last Updated" date at the top of this page indicates when these terms were last revised. Your continued use of our Site or Services after changes are posted constitutes acceptance of the updated terms.',
      },
    ],
  },
  {
    id: "contact",
    title: "14. Contact Us",
    content: [
      {
        text: "If you have any questions about these Terms of Service, please contact us at:",
      },
      {
        text: "Email: legal@projextly.com\nAddress: Bengaluru, Karnataka, India",
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <main>
      <PageHeader
        title="Terms of Service"
        subtitle="The terms and conditions that govern the use of our website and services."
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
            <nav aria-label="Terms of service sections">
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
