import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid";
}

const Button: React.FC<ButtonProps> = ({ variant = "solid", children, className, ...props }) => {
  const baseStyles = "px-4 py-2 rounded focus:outline-none transition duration-200";
  const variantStyles =
    variant === "outline"
      ? "border border-green-700 text-green-400 hover:bg-green-900"
      : "bg-green-700 text-black hover:bg-green-600";

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
