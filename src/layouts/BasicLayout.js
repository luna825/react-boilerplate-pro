import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

class BasicLayout extends Component {
  componentDidMount() {

  }

  render() {
    const { routes } = this.props;
    return (
      <Fragment>
        <h1>head</h1>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
        <div>foot</div>
      </Fragment>
    );
  }
}

export default BasicLayout;
