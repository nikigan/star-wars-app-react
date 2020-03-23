import React, { Component } from 'react';
import './Row.scss';

class Row extends Component {

  render() {

    const { left, right } = this.props;

    return (
      <div className="row mb-2">
        <div className="col-md-6 mb-2">
          {left}
        </div>
        <div className="col-md-6">
          {right}
        </div>
      </div>
    );
  }
}

export default Row;