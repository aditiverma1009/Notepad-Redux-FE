import PropTypes from 'prop-types';
import React from 'react';
import NoteTitle from '../NoteTitle/NoteTitle';
import NoteHeading from '../NoteHeading/NoteHeading';
import Note from '../Note/Note';
import './Body-Mid.css';

const BodyMid = props => (
  <div className="BodyMid">
    <NoteTitle />
    <NoteHeading textNoteHeading={props.textNoteHeading} />
    <Note />
  </div>
);


BodyMid.propTypes = {
  textNoteHeading: PropTypes.string.isRequired,
};


export default BodyMid;
