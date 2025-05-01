import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function downloadResume() {
  const link = document.createElement('a');
  link.href = '/api/resume';
  link.download = 'Kristi_Baishya_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
