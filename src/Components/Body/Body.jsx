import PropTypes from 'prop-types';
import React from 'react';
import BodyHeader from '../BodyHeader/BodyHeader';
import BodyMid from '../BodyMid/BodyMid';
import BodyFooter from '../BodyFooter/BodyFooter';
import './Body.css';

class Body extends React.Component {
  render() {
    return (
      <div className="Body">
        <BodyHeader
          textNoteTitleHeading={this.props.textNoteTitleHeading}
          textButtonEn={this.props.textButtonEn}
        />
        <BodyMid
          textNoteHeading={this.props.textNoteHeading}
          onChangeNoteTitle={event => this.props.onChangeNoteTitle(event)}
          valueNoteTitle={this.props.valueNoteTitle}
          onChangeNote={event => this.props.onChangeNote(event)}
          valueNote={this.props.valueNote}
          alertBool={this.props.alertBool}
        />
        <BodyFooter
          textSave={this.props.textSave}
          onSaveEvent={this.props.onSaveEvent}
          textCounter={this.props.textCounter}
        />
      </div>
    );
  }
}

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
