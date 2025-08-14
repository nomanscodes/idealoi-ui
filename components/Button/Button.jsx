import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx"; 

export default function Button({
    children,
    variant = "primary",
    size = "medium",
    onClick,
    type = "button",
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx(
                styles.button,
                styles[`button--${variant}`],
                size !== "medium" && styles[`button--${size}`]
            )}
        >
            {children}
        </button>
    );
}
