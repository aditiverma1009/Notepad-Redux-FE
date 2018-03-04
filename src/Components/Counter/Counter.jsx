import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import './Counter.css';

const Counter = props => (
  <div className="Counter">
    {props.leftChar} character
  </div>
);


const mapStateToProps = state => ({
  leftChar: state.noteReducer.leftChar,
});

export default connect(mapStateToProps, null)(Counter);

