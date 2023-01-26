import React from "react";
import ReactDOM, { render } from "react-dom";
import '../style/modal.css'

const Modal1 = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modal">
              <button
                    type="button"
                    className="modal-close-button"
                    onClick={hide}
                  >
                    <span>&times;</span>
                  </button>
                <div className="modal-header">
                  <h1>Nous Contacter</h1>
                </div>
                <div className="form">
                    <div className="form-body">
                        <div className="username">
                            <label className="form__label" for="firstName">Prénom </label>
                            <input className="form__input" type="text"  />
                        </div>
                        <div className="lastname">
                            <label className="form__label" for="lastName">Nom </label>
                            <input  type="text"    className="form__input"/>
                        </div>
                        <div className="email">
                            <label className="form__label" for="email">Email </label>
                            <input  type="email"  className="form__input" />
                        </div>
                        <div className="commentary">
                            <label className="form__label" for="commentary">Commentaires</label>
                            <textarea  type="text"  className="form__input" />
                        </div>
                    </div>
                    </div>
                  <div class="modal-footer">
                      <button type="submit" class="btn" id="form-button">Envoyer</button>
                  </div>
              </div>
            </div>
          </div>
          
        </>,
        document.body
      )
    : null;

export default Modal1;