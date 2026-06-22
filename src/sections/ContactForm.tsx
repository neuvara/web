"use client";

import { useState } from "react";

const inquiryTypes = ["Research", "Clinical", "Hospital"];
const contactEmail = "contact@neuvara.org";
const fieldLimits = {
  name: 80,
  organisation: 120,
  email: 160,
  message: 1000
};

type FormErrors = Partial<Record<"name" | "organisation" | "email" | "message", string>>;

function getFieldValue(formData: FormData, field: string) {
  return String(formData.get(field) ?? "").trim();
}

export function ContactForm() {
  const [selectedType, setSelectedType] = useState(inquiryTypes[0]);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState("Select a validation focus to shape the enquiry.");

  return (
    <form
      className="premium-surface rounded-3xl p-6 sm:p-8"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const honeypot = getFieldValue(formData, "website");

        if (honeypot) {
          setErrors({});
          setStatus("Unable to prepare this enquiry. Please try again.");
          return;
        }

        const name = getFieldValue(formData, "name");
        const organisation = getFieldValue(formData, "organisation");
        const email = getFieldValue(formData, "email");
        const message = getFieldValue(formData, "message");
        const nextErrors: FormErrors = {};

        if (!name) {
          nextErrors.name = "Name is required.";
        }

        if (!organisation) {
          nextErrors.organisation = "Organisation is required.";
        }

        if (!email) {
          nextErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          nextErrors.email = "Enter a valid email address.";
        }

        if (!message) {
          nextErrors.message = "Message is required.";
        }

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
          setStatus("Please complete the required fields before preparing the enquiry.");
          return;
        }

        const subject = encodeURIComponent(`${selectedType} enquiry from ${name}`);
        const body = encodeURIComponent(
          [
            `Name: ${name}`,
            `Organisation: ${organisation}`,
            `Email: ${email}`,
            `Validation focus: ${selectedType}`,
            "",
            message
          ].join("\n")
        );

        setStatus(`Opening your email client to contact ${contactEmail}.`);
        window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      }}
    >
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-clinical-teal">
          Validation focus
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {inquiryTypes.map((type) => (
            <button
              aria-pressed={selectedType === type}
              className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition duration-300 ${
                selectedType === type
                  ? "border-clinical-teal bg-clinical-teal/15 text-clinical-cyan"
                  : "border-white/15 bg-white/5 text-slate-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10"
              }`}
              key={type}
              onClick={() => {
                setSelectedType(type);
                setErrors({});
                setStatus(`${type} partnership focus selected.`);
              }}
              type="button"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-white">
          Name
          <input
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-clinical-teal"
            maxLength={fieldLimits.name}
            name="name"
            placeholder="Your name"
            required
            type="text"
          />
          {errors.name ? (
            <span className="mt-2 block text-xs font-semibold text-clinical-cyan" id="contact-name-error">
              {errors.name}
            </span>
          ) : null}
        </label>
        <label className="text-sm font-medium text-white">
          Organisation
          <input
            aria-describedby={errors.organisation ? "contact-organisation-error" : undefined}
            aria-invalid={Boolean(errors.organisation)}
            className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-clinical-teal"
            maxLength={fieldLimits.organisation}
            name="organisation"
            placeholder="Hospital, university, or company"
            required
            type="text"
          />
          {errors.organisation ? (
            <span className="mt-2 block text-xs font-semibold text-clinical-cyan" id="contact-organisation-error">
              {errors.organisation}
            </span>
          ) : null}
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-white">
        Email
        <input
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          aria-invalid={Boolean(errors.email)}
          className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-clinical-teal"
          maxLength={fieldLimits.email}
          name="email"
          placeholder="name@organisation.org"
          required
          type="email"
        />
        {errors.email ? (
          <span className="mt-2 block text-xs font-semibold text-clinical-cyan" id="contact-email-error">
            {errors.email}
          </span>
        ) : null}
      </label>
      <label className="mt-4 block text-sm font-medium text-white">
        Message
        <textarea
          aria-describedby={errors.message ? "contact-message-error contact-message-help" : "contact-message-help"}
          aria-invalid={Boolean(errors.message)}
          className="mt-2 min-h-32 w-full resize-none rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-clinical-teal"
          maxLength={fieldLimits.message}
          name="message"
          placeholder="Tell us about the partnership or validation opportunity."
          required
        />
        {errors.message ? (
          <span className="mt-2 block text-xs font-semibold text-clinical-cyan" id="contact-message-error">
            {errors.message}
          </span>
        ) : null}
        <span className="mt-2 block text-xs leading-5 text-slate-400" id="contact-message-help">
          Do not include patient information or confidential medical records. Maximum {fieldLimits.message} characters.
        </span>
      </label>
      <label className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        Website
        <input
          autoComplete="off"
          maxLength={120}
          name="website"
          tabIndex={-1}
          type="text"
        />
      </label>
      <button
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-clinical-teal px-6 text-sm font-bold text-navy-950 transition duration-300 hover:-translate-y-1 hover:bg-[#65ead9] hover:shadow-lg hover:shadow-clinical-teal/25 sm:w-auto"
        type="submit"
      >
        Contact Neuvara
      </button>
      <p className="mt-3 text-sm text-slate-300">
        Or email{" "}
        <a className="font-semibold text-clinical-cyan transition hover:text-white" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
      </p>
      <p className="mt-4 border-l border-clinical-teal pl-4 text-sm text-slate-300" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
