export type AppointmentMailFields = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type BuildAppointmentMailtoOptions = {
  recipientEmail: string;
  subject: string;
  introduction: string;
  emptyValue: string;
  labels: AppointmentMailFields;
  values: AppointmentMailFields;
};

export function buildAppointmentMailto({
  recipientEmail,
  subject,
  introduction,
  emptyValue,
  labels,
  values,
}: BuildAppointmentMailtoOptions) {
  const valueOrFallback = (value: string) => value.trim() || emptyValue;
  const body = [
    introduction,
    "",
    `${labels.name} : ${valueOrFallback(values.name)}`,
    `${labels.email} : ${valueOrFallback(values.email)}`,
    `${labels.phone} : ${valueOrFallback(values.phone)}`,
    `${labels.interest} : ${valueOrFallback(values.interest)}`,
    `${labels.message} : ${valueOrFallback(values.message)}`,
  ].join("\n");

  return `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
