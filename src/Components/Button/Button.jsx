import { connect } from 'react-redux';
import React from 'react';
import './Button.css';
import { increment, decrement } from '../../redux/Actions';

// import decrement from '../../src/redux/Actions/index.js';

const Button = () => (
  <div>
    <button onClick={this.props.increment}>CLICK to INCREASE</button>
    <button onClick={this.props.decrement}>CLICK to Decrease</button>
  </div>
);

const mapDispatcherToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});


export default connect(null, mapDispatcherToProps)(Button);
