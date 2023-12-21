import React from "react";
import buttonClose from "../images/close-icon.png";

export default function PopupWithForm(props) {
  return (
    <div
      className={
        props.isOpen
          ? "popup popup_is-opened"
          : `popup popup_type_${props.name}`
      }
    >
      <div className="popup__overflow" id="overflow"></div>
      <img
        className="button button_close"
        src={buttonClose}
        alt="botão fechar"
        onClick={props.isClose}
      />
      <form className="popup__container" name={props.name}>
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
        <button className="button button_submit" type="submit">
          {props.textButton}
        </button>
      </form>
    </div>
  );
}
