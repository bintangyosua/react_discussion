import { ReactNode } from "react";
import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function GeneralLayout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="mt-4 flex">{children}</div>
      <Footer />
    </div>
  );
}
