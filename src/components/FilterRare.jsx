import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class FilterRare extends Component {
  render() {
    const { func, blockFilter } = this.props;
    return (
      <div className="filter-rare">
        <select data-testid="rare-filter" onChange={ func } disabled={ blockFilter }>
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </div>
    );
  }
}

FilterRare.propTypes = {
  func: PropTypes.func.isRequired,
  blockFilter: PropTypes.bool.isRequired,
};
