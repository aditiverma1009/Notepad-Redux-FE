import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = props => (
  <div className="Footer" onClick={() => props.onFooterClick()}>
    {props.textFooter}
  </div>
);


Footer.propTypes = {
  textFooter: PropTypes.string.isRequired,
  onFooterClick: PropTypes.func.isRequired,
};

export default connect(null, null)(Footer);
