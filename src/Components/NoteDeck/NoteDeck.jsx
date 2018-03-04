import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onClickEditReducer } from '../../redux/Actions/index';
import React from 'react';
import './Note-Deck.css';


const NoteDeck = props => (
  <div
    className="NoteDeck"
    index={props.indexSent} // receive index from store
    onClick={() => {
      props.onClickEdit(props.indexSent);
    }}
  >
    <textarea className="NoteDeckTitle">{props.noteDeckT}</textarea>
    <textarea className="NoteDeckNote">{props.noteDeckN}</textarea>
  </div>
);

// we need to send key which we need to fetch from store...


NoteDeck.propTypes = {
  onClickEdit: PropTypes.func.isRequired,
  indexSent: PropTypes.number.isRequired,
  noteDeckT: PropTypes.string.isRequired,
  noteDeckN: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  history: state.noteReducer.history,
  page: state.noteReducer.page,
  edit: state.noteReducer.edit,
  noteid: state.noteReducer.noteid,
});

const mapDispatcherToProps = dispatch => ({
  onClickEdit: key => dispatch(onClickEditReducer(key)),
});

export default connect(mapStateToProps, mapDispatcherToProps)(NoteDeck);
