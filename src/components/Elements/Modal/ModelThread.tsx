import React, { useEffect, useState } from "react";
import ModalLayout from "./ModalLayout";
import { Modal } from "@mui/material";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalThread: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSend,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <ModalLayout>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
      <div className="flex justify-between">
        <button
          className="mt-12 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={onClose}>
          Close
        </button>
        <button
          className="mt-12 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={onSend}>
          Send
        </button>
      </div>
    </ModalLayout>
  );
};

// !Penggunaan
// const App: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="container mx-auto">
//       <div className="text-2xl font-bold mb-4">
//         <Button onClick={openModal}>Open Modal</Button>
//         <Modal isOpen={isOpen} onClose={closeModal} title="Modal Title">
//           <p>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
//             molestias expedita non modi vero, minus consequuntur corrupti fugit,
//             sit porro veniam eos, aperiam sed soluta delectus nesciunt possimus
//             doloribus. Odit!
//           </p>
//         </Modal>
//       </div>
//     </div>
//   );
// };

export default ModalThread;
