import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  padding?: "sm" | "md" | "lg";
  elevated?: boolean;
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  description,
  padding = "md",
  elevated = false,
  bordered = true,
}) => {
  const classNames = [
    styles.card,
    styles[`padding-${padding}`],
    elevated ? styles.elevated : "",
    bordered ? styles.bordered : "",
  ].filter(Boolean).join(" ");

  return (
    <div className={classNames}>
      {title && (
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          {description && <p className={styles.description}>{description}</p>}
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
