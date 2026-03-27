import React from "react";
import styles from "./Input.module.css";

type InputState = "default" | "focused" | "error" | "disabled";

interface InputProps {
  label: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
  state?: InputState;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default function Input({
  label,
  placeholder = "",
  helperText,
  required = false,
  state = "default",
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div className={`${styles.wrapper} ${styles[state]}`}>
      <div className={styles.labelRow}>
        <label className={styles.label}>{label}</label>
        {required && <span className={styles.asterisk}>*</span>}
      </div>
      <input
        className={styles.field}
        placeholder={placeholder}
        disabled={state === "disabled"}
        value={value}
        onChange={onChange}
        type={type}
      />
      {state === "error" ? (
        <span className={styles.errorText}>This field is required</span>
      ) : (
        helperText && <span className={styles.helperText}>{helperText}</span>
      )}
    </div>
  );
}
