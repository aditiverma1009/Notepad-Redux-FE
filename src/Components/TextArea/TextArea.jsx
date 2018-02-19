import { connect } from 'react-redux';
import React from 'react';
import './TextArea.css';

const TextArea = () => (
  <p>Count is {this.props.text}</p>
);

const mapStateToProps = state => ({
  text: state.counter.count,
});
const mapDispatcherToProps = () => null;

export default connect(mapStateToProps, mapDispatcherToProps)(TextArea);

