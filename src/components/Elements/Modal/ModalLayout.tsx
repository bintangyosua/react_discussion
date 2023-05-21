import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

export default function ModalLayout({ children }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>

      <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg z-10">
        {children}
      </div>
    </div>
  );
}
