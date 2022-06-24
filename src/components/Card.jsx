import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
      <>
        <div data-testid="name-card">{ cardName }</div>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <div data-testid="description-card">{ cardDescription }</div>
        <div data-testid="attr1-card">{ cardAttr1 }</div>
        <div data-testid="attr2-card">{ cardAttr2 }</div>
        <div data-testid="attr3-card">{ cardAttr3 }</div>
        <div data-testid="rare-card">{ cardRare }</div>
        {cardTrunfo ? <div data-testid="trunfo-card">Super Trunfo</div> : '' }
      </>
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
