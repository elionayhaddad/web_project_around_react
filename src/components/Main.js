import { useState, useEffect } from "react";
import Card from "./Card/Card.js";
import api from "../utils/api";
import buttonEdit from "../images/button__edit.svg";
import buttonNewPlace from "../images/more.svg";

export default function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .get("users/me")
      .then((user) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
      })
      .catch((erro) => {
        console.log("Quebrou no [GET] /users/me");
        console.log(erro);
      });
    api
      .get("cards")
      .then((data) => {
        setCards(data);
      })
      .catch((erro) => {
        console.log("Quebrou no [GET] /cards");
        console.log(erro);
        setCards([]);
      });
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile">
          <img
            id="artist"
            src={userAvatar}
            className="profile__image photo-hover"
            alt="foto de perfil do usuário"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <div
            className="profile__overlay"
            onClick={props.onEditAvatarClick}
          ></div>
          <div className="profile__info">
            <div className="profile__info-edit">
              <h2 className="profile__artist">{userName}</h2>
              <button
                className="button button_profile"
                type="submit"
                onClick={props.onEditProfileClick}
              >
                <img
                  id="edition"
                  className="button__profile-image"
                  src={buttonEdit}
                  alt="lápis"
                />
              </button>
            </div>
            <p className="profile__text">{userDescription}</p>
          </div>
          <button
            className="button button_add"
            type="submit"
            onClick={props.onAddPlaceClick}
          >
            <img
              id="create-card"
              className="button__add-image"
              src={buttonNewPlace}
              alt="sinal de adição"
            />
          </button>
        </section>
        <section className="cards">
          {cards.map((card, index) => (
            <Card key={index} card={card} click={props.onCardClick} />
          ))}
        </section>
      </main>
    </>
  );
}
