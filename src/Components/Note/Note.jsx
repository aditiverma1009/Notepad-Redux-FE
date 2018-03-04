import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onChangeNote } from '../../redux/Actions/index';
import './Note.css';


const Note = props => (
  <textarea
    onChange={event => props.onChangeNote(event.target.value)}
    value={props.noteContent}
    className={props.alertBool ? 'Red' : 'Original'}
  />
);


const mapStateToProps = state => ({
  noteContent: state.noteReducer.noteContent,
  alertBool: state.noteReducer.alertBool,
});

const mapDispatcherToProps = dispatch => ({
  onChangeNote: eventvalue => dispatch(onChangeNote(eventvalue)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(Note);

