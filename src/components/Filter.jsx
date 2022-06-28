import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Filter extends Component {
  render() {
    const { func, blockFilter } = this.props;
    return (
      <div className="filter-name">
        <p>Filtros de busca</p>
        <input
          type="text"
          data-testid="name-filter"
          placeholder="Nome da carta"
          onChange={ func }
          disabled={ blockFilter }
        />
      </div>
    );
  }
}

Filter.propTypes = {
  func: PropTypes.func.isRequired,
  blockFilter: PropTypes.bool.isRequired,
};
