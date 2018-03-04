import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import './Save.css';
import { onSaveEventReducer } from '../../redux/Actions/index';


class Save extends React.Component {

  onSaveEventHere = (valueNoteTitle,valueNote) => {
    let newhist = this.props.history;
    console.log(valueNote);
    console.log(valueNoteTitle);
    console.log(newhist);
    const { edit } = this.props;
    let { noteid } = this.props;
    console.log(edit);
    console.log(noteid);
    if (edit === false) {
      noteid = Date.now().toString();
      newhist = newhist.concat([{
        noteid,
        notecontent:valueNote,
        notetitle:valueNoteTitle,
       
      }]);
      console.log(newhist);
    } else if (edit === true) {
      console.log("in edit"+this.props.noteid);
      newhist.map((step, index) => {
        if (step.noteid === noteid) {
          newhist[index].noteid=noteid;
          newhist[index].notecontent = valueNote;
          newhist[index].notetitle = valueNoteTitle;
        }
        return true;
      });
    }
    console.log(`${newhist}`);
    this.props.onSaveEvent(newhist);
  };

  render() {
    return (
      <button
        className="Save"
        onClick={() => this.onSaveEventHere(this.props.valueNoteTitle,this.props.valueNote)}
      >
        {this.props.textSave}
      </button>
    );
  }
}


const mapStateToProps = state => ({
  history: state.noteReducer.history,
  edit: state.noteReducer.edit,
  noteid: state.noteReducer.noteid,
});

const mapDispatcherToProps = dispatch => ({
  onSaveEvent: history => dispatch(onSaveEventReducer(history)),
});

Save.propTypes = {
  textSave: PropTypes.string.isRequired,
  valueNote: PropTypes.string.isRequired,
  valueNoteTitle: PropTypes.string.isRequired,
};
export default connect(mapStateToProps, mapDispatcherToProps)(Save);

