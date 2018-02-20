import PropTypes from 'prop-types';
import React from 'react';
import Save from '../Save/Save';
import Counter from '../Counter/Counter';
import './Body-Footer.css';

const BodyFooter = props => (
  <div className="BodyFooter">
    <Save
      textSave={props.textSave}
      onSaveEvent={() => props.onSaveEvent()}
      valueNote={props.valueNote}
      valueNoteTitle={props.valueNoteTitle}
    />
    <Counter textCounter={props.textCounter} />
  </div>
);


BodyFooter.propTypes = {
  valueNote: PropTypes.string.isRequired,
  valueNoteTitle: PropTypes.string.isRequired,
  textSave: PropTypes.string.isRequired,
  textCounter: PropTypes.number.isRequired,
  onSaveEvent: PropTypes.func.isRequired,
};

export default BodyFooter;
