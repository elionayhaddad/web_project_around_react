import { useState } from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import PopupWithForm from "../PopupWithForm";
import ImagePopup from "../ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleCardClick(name, url) {
    setSelectedCard({ name, url });
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <ImagePopup
        name="image"
        card={selectedCard}
        onClose={closeAllPopups}
      ></ImagePopup>

      <PopupWithForm
        name="edit-profile"
        title="Editar Perfil"
        textButton="Salvar"
        isOpen={isEditProfilePopupOpen}
        isClose={closeAllPopups}
      >
        <fieldset className="popup__field">
          <input
            className="popup__input name-input"
            required
            type="text"
            name="name"
            placeholder="Nome"
          />
          <span className="popup__input-error name-input-error"></span>
        </fieldset>
        <fieldset className="popup__field">
          <input
            className="popup__input role-input"
            type="text"
            required
            name="role"
            placeholder="Função"
          />
          <span className="popup__input-error role-input-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="edit-avatar"
        title="Atualizar foto do perfil"
        textButton="Salvar"
        isOpen={isEditAvatarPopupOpen}
        isClose={closeAllPopups}
      >
        <fieldset className="popup__field">
          <input
            className="popup__input input-photo-user"
            required
            type="url"
            name="link"
            placeholder="URL da imagem"
            minlength="1"
          />
          <span className="popup__input-error link-input-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="create-card"
        title="Novo Local"
        textButton="Criar"
        isOpen={isAddPlacePopupOpen}
        isClose={closeAllPopups}
      >
        <fieldset className="popup__field">
          <input
            className="popup__input title-input"
            required
            type="text"
            name="title"
            placeholder="Título"
          />
          <span className="popup__input-error title-input-error"></span>
        </fieldset>
        <fieldset className="popup__field">
          <input
            className="popup__input link-input"
            required
            type="url"
            id="link-input"
            name="link"
            placeholder="URL da imagem"
            minlength="1"
          />
          <span className="popup__input-error link-input-error"></span>{" "}
        </fieldset>
      </PopupWithForm>

      <PopupWithForm name="delete-Card" title="Tem certeza?" textButton="Sim" />

      <Footer />
    </div>
  );
}

export default App;
