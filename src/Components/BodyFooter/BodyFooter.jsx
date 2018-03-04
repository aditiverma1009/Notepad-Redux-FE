import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Save from '../Save/Save';
import Counter from '../Counter/Counter';
import './Body-Footer.css';

const BodyFooter = props => (
  <div className="BodyFooter">
    <Save textSave={props.textSave} />
    <Counter textCounter={props.textCounter} />
  </div>
);

BodyFooter.propTypes = {
  textSave: PropTypes.string.isRequired,
  textCounter: PropTypes.number.isRequired,
};

export default connect(null, null)(BodyFooter);
