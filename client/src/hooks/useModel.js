import { useState } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(null);
  
    const openModal = (data = null) => {
      setData(data);
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setData(null);
      setIsOpen(false);
    };
  
    return { isOpen, data, openModal, closeModal };
  };
  
  export default useModal;