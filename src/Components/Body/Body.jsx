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
      onChangeNoteTitle={event => props.onChangeNoteTitle(event)}
      onChangeNote={event => props.onChangeNote(event)}
      valueNoteTitle={props.valueNoteTitle}
      valueNote={props.valueNote}
      alertBool={props.alertBool}
    />
    <BodyFooter
      valueNote={props.valueNote}
      valueNoteTitle={props.valueNoteTitle}
      textSave={props.textSave}
      onSaveEvent={() => props.onSaveEvent()}
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

  onChangeNoteTitle: PropTypes.func.isRequired,
  valueNoteTitle: PropTypes.string.isRequired,

  onChangeNote: PropTypes.func.isRequired,
  valueNote: PropTypes.string.isRequired,
  alertBool: PropTypes.bool.isRequired,

  onSaveEvent: PropTypes.func.isRequired,
};

export default Body;
