import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'react-router-dom';
import './Save.css';
import { onSaveEventReducer } from '../../redux/Actions/index';


const Save = props => (
  <Link to="/appPage2" href="/appPage2">
    <button
      className="Save"
      onClick={() => props.onSaveEvent()}
    >
      {props.textSave}
    </button>
  </Link>
);


const mapDispatcherToProps = dispatch => ({
  onSaveEvent: history => dispatch(onSaveEventReducer(history)),
});

Save.propTypes = {
  textSave: PropTypes.string.isRequired,
};
export default connect(null, mapDispatcherToProps)(Save);

