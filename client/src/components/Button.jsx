import React from "react";

const Button = ({
  label,
  onClick,
  variant: buttonVariant = "primary",
  size: buttonSize = "md",
  disabled: isDisabled = false,
  additionalClasses = "",
  type = "button",
  custome=''
}) => {
  const baseButtonStyles = `rounded px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2`;

  const buttonVariantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    custome:`${custome}`
  };

  const buttonSizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  const disabledButtonStyles = `opacity-50 cursor-not-allowed`;

  const buttonClasses = `${baseButtonStyles} ${custome==""?buttonVariantStyles[buttonVariant]:custome} ${buttonSizeStyles[buttonSize]} ${
    isDisabled ? disabledButtonStyles : ""
  } ${additionalClasses}`;

  return (
    <button onClick={onClick} type={type} className={buttonClasses} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
