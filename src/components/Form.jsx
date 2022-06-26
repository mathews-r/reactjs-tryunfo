import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      onInputChange,
      onSaveButtonClick,
      isSaveButtonDisabled,
      hasTrunfo,
    } = this.props;

    return (
      <form className="form">
        <label className="labels" htmlFor="name">
          INSIRA O NOME DA CARTA:
          <input
            className="input-text"
            type="text"
            data-testid="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label className="labels" htmlFor="description">
          DESCRIÇÃO:
          <textarea
            id="text-area"
            className="input-text"
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label className="labels" htmlFor="attr1">
          FORÇA:
          <input
            className="input-text"
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            min="0"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label className="labels" htmlFor="attr2">
          INTELIGÊNCIA:
          <input
            className="input-text"
            type="number"
            data-testid="attr2-input"
            min="0"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label className="labels" htmlFor="attr3">
          AGILIDADE:
          <input
            className="input-text"
            type="number"
            min="0"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label className="labels" htmlFor="image">
          IMAGEM:
          <input
            className="input-text"
            type="text"
            data-testid="image-input"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label className="labels" htmlFor="input-rare">
          RARIDADE
          <select
            className="select"
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label className="labels" htmlFor="check-box">
          Super Trybe Trunfo
          {hasTrunfo ? 'Você já tem um Super Trunfo em seu baralho' : <input
            className="super-trunfo"
            type="checkbox"
            data-testid="trunfo-input"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />}
        </label>
        <div className="div-btn">
          <button
            className="btn-submit"
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            SALVAR
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};
