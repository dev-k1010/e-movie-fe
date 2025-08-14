import React, { useEffect } from "react";
import { useModalContext } from "../../context/Modalcontext";

export default function ModalContainer() {
  const { isOpen, content, handleClose } = useModalContext();


  if (!isOpen) return null;

  return (
    <div
      onClick={handleClose}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
      style={{ zIndex: 60 }}
    >
     
        {content}
     
    </div>
  );
}
