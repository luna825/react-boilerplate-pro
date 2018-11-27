import React, { Component, Fragment } from 'react';
import Authorized from 'utils/Authorized';

const { AuthroizedRoute } = Authorized;

class BasicLayout extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Fragment>
        <h1>head</h1>
        <div>foot</div>
      </Fragment>
    );
  }
}

export default BasicLayout;
