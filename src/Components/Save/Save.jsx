import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import './Save.css';
import { onSaveEventReducer } from '../../redux/Actions/index';

const onSaveEvent = (valueNote, valueNoteTitle, props) => {
  let newhist = props.history.slice();
  const { edit } = props;
  let { noteid } = props;
  if (edit === false) {
    noteid = Date.now();
    newhist = newhist.concat([{
      valueNote,
      valueNoteTitle,
      noteid,
    }]);
  } else if (edit === true) {
    newhist.map((step, index) => {
      if (step.noteid === noteid) {
        newhist[index].valueNote = valueNote;
        newhist[index].valueNoteTitle = valueNoteTitle;
      }
      return true;
    });
  }
  props.onSaveEventHere(newhist);
};


const Save = props => (
  <button
    className="Save"
    onClick={() => onSaveEvent(props.valueNote, props.valueNoteTitle, props)}
  >
    {props.textSave}
  </button>
);


const mapStateToProps = state => ({
  history: state.noteReducer.history,
  edit: state.noteReducer.edit,
  noteid: state.noteReducer.noteid,
});

const mapDispatcherToProps = dispatch => ({
  onSaveEventHere: history => dispatch(onSaveEventReducer(history)),
});

Save.propTypes = {
  textSave: PropTypes.string.isRequired,
  valueNote: PropTypes.string.isRequired,
  valueNoteTitle: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatcherToProps)(Save);

