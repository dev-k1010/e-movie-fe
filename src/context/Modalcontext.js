import { createContext, useCallback, useContext, useState } from "react";

const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const [content, setContent] = useState(null);

  const handleOpen = useCallback((newContent) => {
    setOpen(true);

    setContent(newContent);
  }, []);
  const handleClose = useCallback(() => {
    setOpen(false);

    setContent(null);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, content, handleOpen, handleClose }}>
      {children} 
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
