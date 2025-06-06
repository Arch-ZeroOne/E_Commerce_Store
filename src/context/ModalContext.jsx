import React, { useContext, useState } from "react";
export const Modal = React.createContext();

export function useModal() {
  return useContext(Modal);
}
function ModalContex({ children }) {
  const [modal, showModal] = useState(false);
  return (
    <div>
      <Modal.Provider value={{ modal, showModal }}>{children}</Modal.Provider>
    </div>
  );
}

export default ModalContex;
