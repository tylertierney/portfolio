import "./LinkButton.css";
import { PropsWithChildren } from "react";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color: "green" | "blue";
}

export default function LinkButton({
  color,
  children,
  ...props
}: PropsWithChildren<LinkButtonProps>) {
  return (
    <a {...props} className={`button ${color}`}>
      {children}
    </a>
  );
}
