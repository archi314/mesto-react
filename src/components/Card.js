import React from "react";

const Card = (props) => {
  const handleCardClick = () => {
    props.onCardClick(props.card);
  };

  return (
    <div className="template-elements">
      <article className="element">
        <button type="button" className="element__busket-icon"></button>
        <img
          className="element__image"
          src={props.link}
          alt={props.name}
          onClick={handleCardClick}
        />
        <div className="element__column">
          <h2 className="element__title">{props.name}</h2>
          <div className="element__heart-container">
            <button
              className="element__heart-icon"
              type="button"
              title="Мне нравится"
              aria-label="Кнопка Мне нравится."
            ></button>
            <span className="element__heart-counter">{props.likes}</span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;