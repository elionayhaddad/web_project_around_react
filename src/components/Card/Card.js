import buttonLike from "../../images/like.svg";
import iconRemoveCard from "../../images/excluir-icon.png";

export default function Card({ key, card, click }) {
  function handleClick() {
    click(card.name, card.link);
  }
  return (
    <div className="card" id={card.id} key={key}>
      <div className="card__remove">
        <img
          className="card__remove-icon"
          src={iconRemoveCard}
          alt="botão em forma de lixeira"
        />
      </div>
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <img
            src={buttonLike}
            className="card__like"
            alt="um botão de reação em formato de coração."
          />
          <span className="card__counter">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
