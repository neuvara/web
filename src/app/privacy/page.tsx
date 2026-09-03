import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Neuvara",
  description:
    "Privacy information for Neuvara's research-stage healthcare technology website."
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-navy-950 px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          className="text-sm font-semibold text-clinical-cyan transition hover:text-white"
          href="/"
        >
          Back to Neuvara
        </Link>

        <h1 className="mt-10 text-4xl font-semibold tracking-normal sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-300">
          Last updated: June 14, 2026
        </p>

        <section className="mt-10 space-y-4 text-sm leading-7 text-slate-300">
          <h2 className="text-2xl font-semibold text-white">
            No Patient Information
          </h2>
          <p>
            Do not submit patient information, protected health information,
            medical records, imaging files, clinical notes, or other confidential
            medical data through this website or contact form.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-7 text-slate-300">
          <h2 className="text-2xl font-semibold text-white">
            Research-Stage Disclaimer
          </h2>
          <p>
            Neuvara is a research-stage healthcare technology company. The
            website describes intended research and validation directions and
            does not provide medical advice, diagnosis, treatment, or a regulated
            clinical service.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-7 text-slate-300">
          <h2 className="text-2xl font-semibold text-white">
            Contact Form Data
          </h2>
          <p>
            The current contact form is a client-side enquiry preparation flow
            and does not submit data to Neuvara servers from this website. If a
            backend contact workflow is added later, submitted business contact
            details and enquiry text should be used only to respond to the
            enquiry, evaluate partnership fit, and maintain appropriate business
            records.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-7 text-slate-300">
          <h2 className="text-2xl font-semibold text-white">
            Cookies and Analytics
          </h2>
          <p>
            This website does not currently set analytics, advertising, or
            tracking cookies. If analytics or similar services are introduced,
            Neuvara should update this policy before deployment and configure
            them to avoid collecting patient information.
          </p>
        </section>

        <section className="mt-10 space-y-4 text-sm leading-7 text-slate-300">
          <h2 className="text-2xl font-semibold text-white">
            Privacy Contact
          </h2>
          <p>
            For privacy questions before production data collection is enabled,
            use Neuvara&apos;s official public contact channel or contact the
            repository owner through GitHub. Neuvara should publish a monitored
            privacy contact address before adding analytics, backend contact
            submission, or any personal data collection workflow.
          </p>
        </section>
      </div>
    </main>
  );
}
