import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantClasses = {
  primary:
    "bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors",
  secondary:
    "bg-white hover:bg-surface-50 text-navy-900 border border-surface-border font-semibold transition-colors",
  ghost:
    "border border-white/40 hover:border-white text-white font-semibold transition-colors",
};

const sizeClasses = {
  sm: "px-5 py-2 text-sm rounded",
  md: "px-8 py-3.5 text-base rounded-md",
  lg: "px-9 py-4 text-base rounded-md",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
