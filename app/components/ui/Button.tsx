import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  href?: string;
  variant?: "primary" | "light" | "icon";
  icon?: ReactNode;
  ariaLabel?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  icon,
  ariaLabel
}: ButtonProps) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={className} aria-label={ariaLabel}>
      {children}
      {icon}
    </button>
  );
}
