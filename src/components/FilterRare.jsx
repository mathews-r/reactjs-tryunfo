import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class FilterRare extends Component {
  render() {
    const { func } = this.props;
    return (
      <div>
        <select data-testid="rare-filter" onChange={ func }>
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
};
