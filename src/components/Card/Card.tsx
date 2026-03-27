// Card.tsx
import React from "react";
import styles from "./Card.module.css";

type CardPadding = "sm" | "md" | "lg";

interface CardProps {
  title: string;
  description?: string;
  padding?: CardPadding;
  elevated?: boolean;
  bordered?: boolean;
  fields?: React.ReactNode;
  actions?: React.ReactNode;
}

export default function Card({
  title,
  description,
  padding = "md",
  elevated = false,
  bordered = false,
  fields,
  actions,
}: CardProps) {
  const classNames = [
    styles.card,
    styles[`padding-${padding}`],
    elevated ? styles.elevated : "",
    bordered ? styles.bordered : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      {fields && <div className={styles.fields}>{fields}</div>}
      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  );
}