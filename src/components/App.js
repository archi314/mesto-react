import "../index.css";
import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="title"
          className="popup__input popup__input-name"
          id="title"
          placeholder="Имя"
          type="text"
          minLength="2"
          maxLength="40"
          required
        />

        <span className="popup__error title-error" id="title-error" />

        <input
          name="status"
          className="popup__input popup__input_status popup__input-description"
          id="status"
          placeholder="Профессия"
          type="text"
          minLength="2"
          maxLength="200"
          required
        />

        <span className="popup__error status-error" id="status-error" />
      </PopupWithForm>

      <PopupWithForm
        name="add"
        title="Новое место"
        buttonText="Сохранить"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="name"
          className="popup__input popup__input-name"
          id="name"
          placeholder="Название"
          type="text"
          minLength="2"
          maxLength="30"
          required
        />

        <span className="popup__error name-error" id="name-error" />

        <input
          name="link"
          className="popup__input popup__input_status popup__input-description"
          id="link"
          placeholder="Ссылка на картинку"
          type="url"
          required
        />

        <span className="popup__error link-error" id="link-error" />
      </PopupWithForm>

      <PopupWithForm
        name="delete-confirmation"
        title="Вы уверены?"
        buttonText="Да"
      ></PopupWithForm>

      <PopupWithForm
        name="type_avatar"
        buttonText="Сохранить"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          name="edit-avatar"
          className="popup__input popup__input-avatar"
          id="edit-avatar"
          placeholder="Ссылка на картинку"
          type="url"
          required
        />
        <span
          className="popup__error edit-avatar-error"
          id="edit-avatar-error"
        />
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
