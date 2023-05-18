import { ReactNode } from "react";
import Navbar from "../Fragments/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function GeneralLayout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
