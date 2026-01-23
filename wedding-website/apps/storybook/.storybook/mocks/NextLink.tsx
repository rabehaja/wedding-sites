import * as React from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const Link = ({ href, children, ...props }: LinkProps): React.ReactElement => {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
};

export default Link;
