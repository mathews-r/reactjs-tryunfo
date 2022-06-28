import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class FilterSuperTrunfo extends Component {
  render() {
    const { func } = this.props;
    return (
      <div className="filter-st">
        <p className="p">Super Trunfo</p>
        <label data-testid="trunfo-filter" htmlFor="filterTrunfo" onChange={ func }>
          <input type="checkbox" name="filterTrunfo" />
        </label>
      </div>
    );
  }
}

FilterSuperTrunfo.propTypes = {
  func: PropTypes.func.isRequired,
};
