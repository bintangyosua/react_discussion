import { ReactNode } from "react";
import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";
import QuestionBar from "../Fragments/QuestionBar";
import LeftBar from "./LeftBar";

interface LayoutProps {
  children: ReactNode;
}

export default function GeneralLayout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="mt-4 flex justify-center px-96">
        <LeftBar />
        <div className="w-128">{children}</div>
        <QuestionBar />
      </div>
      <Footer />
    </div>
  );
}
