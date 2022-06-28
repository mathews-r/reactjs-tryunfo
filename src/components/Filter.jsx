import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    const { func } = this.props;
    return (
      <div className="filter">
        <p>Filtros de busca</p>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Nome da carta"
          onChange={ func }
        />
      </div>
    );
  }
}

Filter.propTypes = {
  func: PropTypes.func.isRequired,
};
