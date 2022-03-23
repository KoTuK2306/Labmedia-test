import { useState } from "react";
import { ModalContext } from "../contexts/ModalContext";

export const ModalProvider = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const openModal = () => {
    setIsOpened(true);
  };
  const closeModal = () => {
    setIsOpened(false);
  };

  return <ModalContext.Provider value={{ isOpened, openModal, closeModal }}>{children}</ModalContext.Provider>;
};
