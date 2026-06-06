interface TextProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "white";
  size?: "sm" | "base" | "md" | "lg";
}

const Text = ({
  children,
  className = "",
  variant = "dark",
  size = "base",
}: TextProps) => {
  const variantClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    dark: "text-dark",
    white: "text-white",
  };

  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    md: "text-md",
    lg: "text-lg",
  };

  return (
    <p
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
