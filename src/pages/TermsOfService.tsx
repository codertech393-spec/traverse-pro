import React from "react";

const TosSection = ({
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

const TosSubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mt-6 text-sm font-semibold text-white">{children}</h3>
);

const TosList = ({ items }: { items: string[] }) => (
  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
    {items.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
);


const TermsOfService: React.FC = () => {
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
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
            📄
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-white">
              Terms of Service
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Last updated: January 29, 2026
            </p>
          </div>
        </div>

        {/* Content Card */}
        <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 sm:p-10 backdrop-blur">
          <TosSection title="Agreement to Terms">
            By accessing and using Traverse Pro’s package tracking service
            (“Service”), you agree to be bound by these Terms of Service
            (“Terms”). If you do not agree to these Terms, you may not access or
            use the Service.
          </TosSection>

          <TosSection title="Service Description">
            Traverse Pro provides a package tracking service that aggregates
            tracking information from multiple carriers worldwide. The Service
            includes:
            <TosList
              items={[
                "Multi-carrier package tracking across 2260+ carriers globally",
                "Automated carrier handoff detection",
                "Real-time package status updates",
                "AI-powered tracking intelligence",
                "Historical tracking data and analytics",
              ]}
            />
          </TosSection>

          <TosSection title="User Responsibilities">
            <TosSubTitle>Accurate Information</TosSubTitle>
            You are responsible for providing accurate tracking numbers and
            ensuring you have authorization to track packages using the Service.

            <TosSubTitle>Prohibited Uses</TosSubTitle>
            You agree not to:
            <TosList
              items={[
                "Track packages without proper authorization",
                "Engage in fraudulent, abusive, or illegal activity",
                "Interfere with or disrupt the Service or servers",
                "Attempt unauthorized access to the Service",
                "Use automated systems without permission",
                "Resell or commercialize the Service without authorization",
              ]}
            />

            <TosSubTitle>Account Security</TosSubTitle>
            If you create an account, you are responsible for maintaining the
            confidentiality of your credentials and all activity under your
            account.
          </TosSection>

          <TosSection title="Service Availability">
            We strive to provide uninterrupted service but do not guarantee that
            the Service will always be available, error-free, or free of delays.
            We may modify, suspend, or discontinue the Service at any time
            without notice.
          </TosSection>

          <TosSection title="Third-Party Data">
            The Service relies on data provided by third-party carriers and
            logistics providers. We do not guarantee the accuracy,
            completeness, or timeliness of carrier-provided data.
          </TosSection>

          <TosSection title="Intellectual Property Rights">
            <TosSubTitle>Our Content</TosSubTitle>
            All content on the Service, including software, design, logos, and
            text, is the property of Traverse Pro or its licensors and is
            protected by intellectual property laws.

            <TosSubTitle>Limited License</TosSubTitle>
            We grant you a limited, non-exclusive, non-transferable, revocable
            license to use the Service for personal, non-commercial purposes.
          </TosSection>

          <TosSection title="Disclaimers and Limitation of Liability">
            <TosSubTitle>Service Provided “As Is”</TosSubTitle>
            The Service is provided “as is” and “as available” without
            warranties of any kind.

            <TosSubTitle>Limitation of Liability</TosSubTitle>
            To the maximum extent permitted by law, Traverse Pro shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising from your use of the Service.
          </TosSection>

          <TosSection title="Indemnification">
            You agree to indemnify and hold harmless Traverse Pro and its
            affiliates from any claims, damages, losses, or expenses arising
            from your use of the Service or violation of these Terms.
          </TosSection>

          <TosSection title="Governing Law and Dispute Resolution">
            <TosSubTitle>Governing Law</TosSubTitle>
            These Terms are governed by the laws of the State of California,
            United States.

            <TosSubTitle>Arbitration</TosSubTitle>
            Any disputes arising from these Terms shall be resolved through
            binding arbitration in San Francisco, California.
          </TosSection>

          <TosSection title="Changes to Terms">
            We reserve the right to modify these Terms at any time. Continued use
            of the Service after changes constitutes acceptance of the updated
            Terms.
          </TosSection>

          <TosSection title="Termination">
            We may terminate or suspend access to the Service immediately for
            any violation of these Terms.
          </TosSection>

          <TosSection title="Severability">
            If any provision of these Terms is found unenforceable, the
            remaining provisions will remain in full force and effect.
          </TosSection>

          <TosSection title="Contact Information">
            <p>Email: Traversehaulage@gmail.com</p>
            <p className="mt-2">
              Traverse Pro Legal Department<br />
              San Francisco, CA 94102, United States
            </p>
          </TosSection>
        </section>
      </div>
    </main>
  );
};

export default TermsOfService;
