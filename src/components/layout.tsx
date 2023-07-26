import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div>Layout test</div>
      <main>{children}</main>
    </>
  );
}
