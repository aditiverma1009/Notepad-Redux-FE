import PropTypes from 'prop-types';
import React from 'react';

import { Link } from 'react-router-dom';
// import axios from 'axios';
import { connect } from 'react-redux';
import './App-Page2.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import NoteDeck from '../NoteDeck/NoteDeck';

import { onClickEditReducer, onSync } from '../../redux/Actions/index';


class AppPage2 extends React.Component {
  render() {
    const { history } = this.props;
    const noteList = history.map(step => (
      <li>
        <Link to="/appPage1" href="/appPage1"><NoteDeck
          noteDeckT={step.notetitle}
          noteDeckN={step.notecontent}
          indexSent={step.noteid}
        />
        </Link>
      </li>
    ));


    return (

      <div className="AppPage2">
        <Header textHeader="Saved Notes" />
        <button className="SyncBtn" onClick={() => this.props.onSyncHere()}>Sync</button>
        <ol className="Body2">{noteList}</ol>
        <Footer textFooter="Create new note" />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  history: state.noteReducer.history,
  page: state.noteReducer.page,
  edit: state.noteReducer.edit,
  noteid: state.noteReducer.noteid,
});

const mapDispatcherToProps = dispatch => ({
  onSyncHere: () => dispatch(onSync()),
  onClickEditHere: key => dispatch(onClickEditReducer(key)),
});
export default connect(mapStateToProps, mapDispatcherToProps)(AppPage2);

