import { ReactNode } from "react";
import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

interface LayoutProps {
  children: ReactNode;
}

export default function GeneralLayout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="mt-4 flex justify-center px-64">
        <LeftBar />
        <div className="w-144 min-h-screen">{children}</div>
        <RightBar />
      </div>
      <Footer />
    </div>
  );
}
