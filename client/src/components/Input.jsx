import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder = "Enter text",
  value,
  onChange,
  disabled = false,
  additionalClasses = "",
  name=''
}) => {
  // Base styles for the input
  const baseInputStyles = `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`;

  // Disabled styles
  const disabledStyles = `opacity-50 cursor-not-allowed`;

  // Combine all styles
  const inputClasses = `${baseInputStyles} ${
    disabled ? disabledStyles : ""
  } ${additionalClasses}`;

  return (
    <div className="mb-4">
      {/* Label */}
      {label && (
        <label className="block text-md font-bold text-gray-800 mb-1">
          {label}
        </label>
      )}
      {/* Input */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        className={inputClasses}
      />
    </div>
  );
};

export default Input;
