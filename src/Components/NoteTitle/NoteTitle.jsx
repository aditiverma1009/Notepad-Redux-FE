import React from 'react';
import { connect } from 'react-redux';
import { onChangeNoteTitle } from '../../redux/Actions/index';
import './Note-Title.css';
import PropTypes from 'prop-types';

const NoteTitle = props => (
  <input
    className="NoteTitle"
    onChange={event => props.onChangeNoteTitle(event.target.value)}
    value={props.valueNoteTitle}
  />
);


NoteTitle.propTypes = {
  onChangeNoteTitle: PropTypes.func.isRequired,
  valueNoteTitle: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({

  noteTitle: state.noteReducer.noteTitle,

});

const mapDispatcherToProps = dispatch => ({
  onChangeNoteTitle: eventvalue => dispatch(onChangeNoteTitle(eventvalue)),
});
export default connect(mapStateToProps, mapDispatcherToProps)(NoteTitle);
