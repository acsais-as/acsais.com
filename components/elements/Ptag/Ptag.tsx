import cn from "classnames";
import { JSX } from "react";
import styles from "./Ptag.module.scss";
import { PtagProps } from "./Ptag.props";

const Ptag = ({
  size = "p",
  children,
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.lead]: size == "p",
        [styles.lead]: size == "lead",
        [styles.credits]: size == "credits",
        [styles.caption]: size == "caption",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Ptag;
