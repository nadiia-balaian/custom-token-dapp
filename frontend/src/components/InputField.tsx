import React from "react";

interface InputFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  ariaLabel: string;
}

export const InputField: React.FC<InputFieldProps> = ({ value, onChange, placeholder, ariaLabel }) => (
  <div>
    <input
      id={ariaLabel}
      type="text"
      placeholder={placeholder}
      role="textbox"
      aria-label={ariaLabel}
      aria-describedby={ariaLabel}
      autoComplete="off"
      className="font-text border-white bg-background focus-visible:shadow-outline-white 
                 focus-visible:border-white invalid:border-danger input-text block h-20 
                 w-full rounded-md border border-b-[6px] px-6 focus-visible:outline-none 
                 disabled:hover:cursor-not-allowed text-xl transition text-left font-light 
                 font-mono_heading"
      value={value}
      onChange={onChange}
    />
  </div>
);
