import React from "react";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/api";

export default function DeleteCardPopup({ isOpen, onClose, card }) {
  function handleCardDelete(e) {
    e.preventDefault();
    api.deleteCards(card._id).then(() => card.filter());
  }

  return (
    <PopupWithForm
      name="delete-card"
      title="Tem certeza?"
      textButton="Sim"
      isOpen={isOpen}
      isClose={onClose}
      onSubmit={handleCardDelete}
    />
  );
}
