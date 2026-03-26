import React from "react";
import styles from "./Input.module.css";

interface InputProps {
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password";
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder = "",
  type = "text",
  required = false,
  disabled = false,
  error,
  helperText,
  value,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}{required && <span className={styles.required}>*</span>}
      </label>
      <input
        className={`${styles.input} ${error ? styles.error : ""} ${disabled ? styles.disabled : ""}`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      {(error || helperText) && (
        <span className={error ? styles.errorText : styles.helperText}>
          {error || helperText}
        </span>
      )}
    </div>
  );
};
