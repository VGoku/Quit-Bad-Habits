import * as React from "react";

export function Button({
  children,
  onClick,
  className,
  type = "button",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition ${className || ""}`}
    >
      {children}
    </button>
  );
}
