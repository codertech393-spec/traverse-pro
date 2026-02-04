import React from "react";

const PolicySection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-10">
    <h2 className="mb-3 text-xl font-semibold text-white">{title}</h2>
    <div className="space-y-4 text-sm leading-relaxed text-slate-300">
      {children}
    </div>
  </div>
);

const PolicySubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-6 text-sm font-semibold text-white">{children}</h3>
);

const PolicyList = ({ items }: { items: string[] }) => (
  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);


const PrivacyPolicy: React.FC = () => {
  return (
    <main className="bg-[#020617] px-4 py-16 text-slate-200">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          ← Back to Home
        </a>

        {/* Header */}
        <div className="mb-10 flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
            🛡️
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-white">
              Privacy Policy
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Last updated: January 29, 2026
            </p>
          </div>
        </div>

        {/* Content Card */}
        <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-10 backdrop-blur">
          <PolicySection title="Introduction">
            At Traverse Pro, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our package tracking service.
          </PolicySection>

          <PolicySection title="Information We Collect">
            <PolicySubTitle>Tracking Information</PolicySubTitle>
            When you use our service, we collect tracking numbers you enter,
            along with associated package information from carriers. This data
            is necessary to provide accurate tracking updates across multiple
            carriers.

            <PolicySubTitle>Usage Data</PolicySubTitle>
            We automatically collect certain information about your device,
            including IP address, browser type, operating system, access times,
            and pages viewed. This helps us improve our service.

            <PolicySubTitle>Cookies and Similar Technologies</PolicySubTitle>
            We use cookies and similar technologies to enhance your experience,
            remember preferences, and analyze usage patterns.
          </PolicySection>

          <PolicySection title="How We Use Your Information">
            <PolicyList
              items={[
                "Provide and maintain our tracking service",
                "Track packages across multiple carriers automatically",
                "Notify you about changes to tracked packages",
                "Improve and optimize our service",
                "Analyze usage trends",
                "Detect and prevent fraud or abuse",
                "Comply with legal obligations",
              ]}
            />
          </PolicySection>

          <PolicySection title="Data Sharing and Disclosure">
            <PolicySubTitle>Third-Party Service Providers</PolicySubTitle>
            We share tracking information with carrier partners and logistics
            providers solely to obtain package status updates. These parties are
            bound by confidentiality obligations.

            <PolicySubTitle>Legal Requirements</PolicySubTitle>
            We may disclose information if required by law or to protect our
            rights, safety, or the safety of others.
          </PolicySection>

          <PolicySection title="Data Security">
            We implement industry-standard security measures including
            encryption, access controls, and regular assessments. However, no
            electronic transmission is 100% secure.
          </PolicySection>

          <PolicySection title="Data Retention">
            Tracking data is retained only as long as necessary, typically up to
            90 days after the last tracking update, after which it is deleted.
          </PolicySection>

          <PolicySection title="Your Rights and Choices">
            <PolicyList
              items={[
                "Access your personal information",
                "Request correction of inaccurate data",
                "Request deletion of your data",
                "Object to data processing",
                "Opt-out of marketing communications",
                "Withdraw consent where applicable",
              ]}
            />
          </PolicySection>

          <PolicySection title="Children’s Privacy">
            Our service is not intended for children under 13. We do not
            knowingly collect personal data from children.
          </PolicySection>

          <PolicySection title="International Data Transfers">
            Your information may be processed outside your country of residence.
            We ensure appropriate safeguards are in place.
          </PolicySection>

          <PolicySection title="Changes to This Privacy Policy">
            We may update this policy periodically. Changes will be reflected on
            this page with an updated date.
          </PolicySection>

          <PolicySection title="Contact Us">
            <p>Email: Traversehaulage@gmail.com</p>
            <p className="mt-2">
              Traverse Pro Privacy Team<br />
              San Francisco, CA 94102, United States
            </p>
          </PolicySection>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
