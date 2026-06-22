import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold tracking-[-0.01em] transition duration-300 focus:outline-none focus:ring-2 focus:ring-clinical-teal focus:ring-offset-2 focus:ring-offset-navy-950 sm:min-h-12 sm:px-6";
  const variants = {
    primary:
      "bg-clinical-teal text-navy-950 shadow-lg shadow-clinical-teal/20 hover:-translate-y-0.5 hover:bg-[#65ead9] hover:shadow-clinical-teal/30",
    secondary:
      "border border-white/[0.18] bg-white/[0.07] text-white backdrop-blur hover:-translate-y-0.5 hover:border-clinical-cyan/45 hover:bg-white/[0.12]"
  };

  const className = `${base} ${variants[variant]}`;

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
