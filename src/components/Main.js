import { useEffect, useState } from "react";

import api from "../utils/Api";
import Card from "./Card";

import EditIcon from "../images/edit_icon.svg";
import AddIcon from "../images/add_icon.svg";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__overlay profile__edit-avatar-button">
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="Профиль пользователя."
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__info">
          <div className="profile__column">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              title="Редактировать"
              aria-label="Кнопка, позволяющая редактировать профиль пользователя"
              onClick={onEditProfile}
            >
              <img
                className="profile__edit-icon"
                src={EditIcon}
                alt="Кнопка, редактирующая профиль пользователя."
              />
            </button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          title="Добавить"
          aria-label="Кнопка, которая добаляет элементы на страницу."
          onClick={onAddPlace}
        >
          <img
            className="profile__add-icon"
            src={AddIcon}
            alt="Кнопка, добавляющая элементы на страницу."
          />
        </button>
      </section>

      <section className="elements">
        {cards.map((card, _id) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            link={card.link}
            name={card.name}
            likes={card.likes.length}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;