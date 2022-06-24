import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <>
        <label htmlFor="name">
          <input
            type="text"
            data-testid="name-input"
            name="name"
          />
        </label>

        <label htmlFor="description">
          <textarea
            data-testid="description-input"
            name="description"
          />
        </label>

        <label htmlFor="attr1">
          <input
            type="number"
            data-testid="attr1-input"
            name="attr1"
          />
        </label>

        <label htmlFor="attr2">
          <input
            type="number"
            data-testid="attr2-input"
            name="attr2"
          />
        </label>

        <label htmlFor="attr3">
          <input
            type="number"
            data-testid="attr3-input"
            name="attr3"
          />
        </label>

        <label htmlFor="image">
          <input
            type="text"
            data-testid="image-input"
            name="image"
          />
        </label>

        <label htmlFor="input-rare">
          <select data-testid="rare-input" name="input-rare">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="check-box">
          <input
            type="checkbox"
            data-testid="trunfo-input"
            name="check-box"
          />
        </label>

        <button type="submit" data-testid="save-button">Salvar</button>
      </>
    );
  }
}
