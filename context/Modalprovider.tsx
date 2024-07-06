// ModalContext.tsx

import React, { createContext, useContext, useState } from 'react';

// Define the shape of your context data
interface ModalContextType {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValue = {
  isModal:false,
  setIsModal : ()=>{},
}

// Create a context object with initial values
const ModalContext = createContext<ModalContextType|null>(null);

// Export the context provider
export const ModalProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isModal, setIsModal] = useState(false);

  return (
    <ModalContext.Provider value={{ isModal, setIsModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Export the context itself for useContext hook usage
export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('error')
  return ctx
};

export default ModalContext;
