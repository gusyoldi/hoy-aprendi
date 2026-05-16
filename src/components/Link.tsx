import type { ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  url: string;
}

const Link = ({ children, url }: LinkProps) => {
  return (
    <a className="source" href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default Link;
