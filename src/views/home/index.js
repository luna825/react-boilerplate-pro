import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import action from './action';

class Home extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    getMessage: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { getMessage } = this.props;
    getMessage();
  }

  render() {
    const { message } = this.props;
    return (
      <div>{message}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.home.message,
});

const mapDispatchToProps = {
  getMessage: action.getMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
