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
    } = this.props;

    return (
      <>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            data-testid="name-input"
            name="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description">
          Descrição
          <textarea
            data-testid="description-input"
            name="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1">
          Atributo 1
          <input
            type="number"
            data-testid="attr1-input"
            name="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2">
          Atributo 2
          <input
            type="number"
            data-testid="attr2-input"
            name="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3">
          Atributo 3
          <input
            type="number"
            data-testid="attr3-input"
            name="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            name="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="input-rare">
          Raridade
          <select
            data-testid="rare-input"
            name="input-rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="check-box">
          Super Trybe Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="check-box"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
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
};
