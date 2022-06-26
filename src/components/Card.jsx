import PropTypes from 'prop-types';
import React, { Component } from 'react';
import str from '../images/str.png';
import agi from '../images/agi.png';
import int from '../images/int.png';

export default class Card extends Component {
  render() {
    const { cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="div-card">
        <div className="name-photo">
          <div
            data-testid="name-card"
            className="div-preview"
          >
            {' '}
            { cardName }
          </div>

          <img
            className="photo-card"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />

        </div>
        <div className="attrs">

          <div
            data-testid="attr1-card"
            className="div-preview"
          >
            {' '}
            <img src={ str } alt="str" className="atributo" />
            { cardAttr1 }
          </div>
          <div
            data-testid="attr2-card"
            className="div-preview"
          >

            {' '}
            <img src={ agi } alt="agi" className="atributo" />
            { cardAttr2 }
          </div>
          <div
            data-testid="attr3-card"
            className="div-preview"
          >

            {' '}
            <img src={ int } alt="int" className="atributo" />
            { cardAttr3 }
          </div>

        </div>

        <div
          data-testid="description-card"
          className="div-desc"
        >
          {' '}
          { cardDescription }
        </div>

        <div
          data-testid="rare-card"
          className="div-preview"
        >
          Raridade:
          {' '}
          { cardRare }
        </div>
        {cardTrunfo ? <div data-testid="trunfo-card">Super Trunfo</div> : '' }
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
