import { ReactNode } from "react";

interface NestedLayoutProps {
  children: ReactNode;
}

const NestedLayout = ({ children }: NestedLayoutProps) => {
  return <div>Im Nested{children}</div>;
};

export default NestedLayout;
