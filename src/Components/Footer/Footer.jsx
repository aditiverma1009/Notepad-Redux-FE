import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Footer.css';
import { onFooterClick } from '../../redux/Actions/index';

const Footer = props => (
  <Link to="/appPage1" href="/appPage1">
    <div className="Footer" onClick={props.onFooterClick}>
      {props.textFooter}
    </div>
  </Link>
);


const mapDispatcherToProps = dispatch => ({
  onFooterClick: () => dispatch(onFooterClick()),
});

Footer.propTypes = {
  textFooter: PropTypes.string.isRequired,
};

export default connect(null, mapDispatcherToProps)(Footer);
