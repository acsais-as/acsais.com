"use client";

import cn from "classnames";
import { JSX } from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";
import ArrowIcon from "./arrow.svg";
import Link from "next/link";

const Button = ({
  appearance,
  href,
  arrow = "none",
  children,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
        [styles.ghost]: appearance == "ghost",
        [styles.secondary]: appearance == "secondary",
        [styles.link]: appearance == "link",
      })}
      {...props}
    >
      {href ? <Link href={href}>{children}</Link> : <>{children}</>}
      {arrow != "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow == "down",
            [styles.right]: arrow == "right",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
