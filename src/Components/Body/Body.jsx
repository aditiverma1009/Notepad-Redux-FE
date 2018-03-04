import PropTypes from 'prop-types';
import React from 'react';
import BodyHeader from '../BodyHeader/BodyHeader';
import BodyMid from '../BodyMid/BodyMid';
import BodyFooter from '../BodyFooter/BodyFooter';
import './Body.css';

const Body = props => (
  <div className="Body">
    <BodyHeader
      textNoteTitleHeading={props.textNoteTitleHeading}
      textButtonEn={props.textButtonEn}
    />
    <BodyMid
      textNoteHeading={props.textNoteHeading}
    />
    <BodyFooter
      textSave={props.textSave}
      textCounter={props.textCounter}
    />
  </div>
);

Body.propTypes = {
  textSave: PropTypes.string.isRequired,
  textCounter: PropTypes.number.isRequired,
  textNoteTitleHeading: PropTypes.string.isRequired,
  textButtonEn: PropTypes.string.isRequired,
  textNoteHeading: PropTypes.string.isRequired,
};

export default Body;
