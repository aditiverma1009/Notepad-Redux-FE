import PropTypes from 'prop-types';
import React from 'react';
import './Note-Title-Heading.css';

const NoteTitleHeading = props => (
  <div className="NoteTitleHeading">
    {props.textNoteTitleHeading}
  </div>
);

NoteTitleHeading.propTypes = {
  textNoteTitleHeading: PropTypes.string.isRequired,
};
export default NoteTitleHeading;
