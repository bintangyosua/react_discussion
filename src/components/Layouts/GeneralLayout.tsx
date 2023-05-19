import { ReactNode } from "react";
import Navbar from "../Fragments/Navbar";
import Footer from "../Fragments/Footer";
import Sidebar from "../Fragments/SideBar";

interface LayoutProps {
  children: ReactNode;
}

export default function GeneralLayout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
