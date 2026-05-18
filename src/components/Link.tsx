import type { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  url: string;
}

const Link = ({ children, url }: LinkProps) => {
  return (
    <a
      className="source visited:decoration-0 text-link ml-3 transition-all duration-300"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default Link;
