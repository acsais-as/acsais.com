import cn from "classnames";
import { JSX } from "react";
import styles from "./Tag.module.scss";
import { TagProps } from "./Tag.props";

export const Tag = ({
  size = "s",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.l]: size == "l",
        [styles.tags]: size == "tags",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.grey]: color == "grey",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
        [styles.secondary]: color == "secondary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
