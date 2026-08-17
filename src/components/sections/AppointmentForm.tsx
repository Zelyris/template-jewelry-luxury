"use client";

import type { FormEvent } from "react";
import type { homeContent } from "@/content/content";
import {
  buildAppointmentMailto,
  type AppointmentMailFields,
} from "@/lib/appointment-mailto";

type AppointmentFormProps = {
  content: typeof homeContent.appointment.form;
  recipientEmail: string;
};

export function AppointmentForm({ content, recipientEmail }: AppointmentFormProps) {
  function getFieldValue(formData: FormData, field: keyof AppointmentMailFields) {
    const value = formData.get(field);

    return typeof value === "string" ? value : "";
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const mailtoUrl = buildAppointmentMailto({
      recipientEmail,
      subject: content.emailSubject,
      introduction: content.emailIntroduction,
      emptyValue: content.emptyValue,
      labels: {
        name: content.name,
        email: content.email,
        phone: content.phone,
        interest: content.interest,
        message: content.message,
      },
      values: {
        name: getFieldValue(formData, "name"),
        email: getFieldValue(formData, "email"),
        phone: getFieldValue(formData, "phone"),
        interest: getFieldValue(formData, "interest"),
        message: getFieldValue(formData, "message"),
      },
    });

    window.location.href = mailtoUrl;
  }

  const fieldClass = "w-full border-b border-white/25 bg-transparent px-0 py-4 text-sm text-on-deep outline-none transition placeholder:text-on-deep/25 focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="grid gap-x-8 sm:grid-cols-2">
      <label className="block">
        <span className="eyebrow text-on-deep/45">{content.name}</span>
        <input className={fieldClass} name="name" autoComplete="name" required />
      </label>
      <label className="mt-8 block sm:mt-0">
        <span className="eyebrow text-on-deep/45">{content.email}</span>
        <input className={fieldClass} type="email" name="email" autoComplete="email" required />
      </label>
      <label className="mt-8 block">
        <span className="eyebrow text-on-deep/45">{content.phone}</span>
        <input className={fieldClass} type="tel" name="phone" autoComplete="tel" />
      </label>
      <label className="mt-8 block">
        <span className="eyebrow text-on-deep/45">{content.interest}</span>
        <select className={`${fieldClass} appearance-none`} name="interest" defaultValue={content.options[0]}>
          {content.options.map((option) => <option key={option} className="bg-deep" value={option}>{option}</option>)}
        </select>
      </label>
      <label className="mt-8 block sm:col-span-2">
        <span className="eyebrow text-on-deep/45">{content.message}</span>
        <textarea className={`${fieldClass} min-h-28 resize-y`} name="message" rows={3} />
      </label>
      <div className="mt-10 sm:col-span-2">
        <button
          type="submit"
          aria-describedby="appointment-privacy-note"
          className="group inline-flex items-center gap-4 bg-surface px-7 py-4 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-foreground transition duration-500 hover:bg-accent"
        >
          {content.submit}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </button>
        <p id="appointment-privacy-note" className="mt-5 max-w-xl text-xs leading-6 text-on-deep/45">
          {content.privacyNote}
        </p>
      </div>
    </form>
  );
}
