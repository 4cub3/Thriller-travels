import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: Props) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export default Card;
