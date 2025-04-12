import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m" | "l" | "tags";
  children: ReactNode;
  color?: "ghost" | "red" | "grey" | "green" | "primary" | "secondary";
  href?: string;
}
