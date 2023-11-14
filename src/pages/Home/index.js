// App.js
import React, { useState } from "react";
import Header from "../../components/HeaderPrincipal/index.js";
import SideBar from "../../components/MenuLateral/index.js";
import Modal from "../../components/ModalTarefa";

import { AppBody } from "./styles";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppBody>
      <Header openModal={openModal} />
      <SideBar />
      {isModalOpen && <Modal isOpen={isModalOpen} closeModal={closeModal} />}
    </AppBody>
  );
};

export default App;
