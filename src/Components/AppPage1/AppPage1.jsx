import PropTypes from 'prop-types';

import axios from 'axios';
import { connect } from 'react-redux';
import React from 'react';
import './App-Page1.css';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';

import { onClickEditReducer, onFooterClick, onSync, onGetData, onChangeNote, onChangeNoteTitle } from '../../redux/Actions/index';


class AppPage1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    axios.get('/getData').then((historyArr) => {
      this.props.getData(historyArr);
    });
  }

  render() {
    return (

      <div className="AppPage1">
        <Header textHeader="Start taking Note" />
        <Body
          textNoteTitleHeading="Note Title"
          textButtonEn="en"
          textNoteHeading="Please type your note below"
          textSave="Save"
        />
        <Footer
          textFooter="View Saved Notes"
        />
      </div>);
  }
}


const mapDispatcherToProps = dispatch => ({
  getData: historyArr => dispatch(onGetData(historyArr)),
});
export default connect(null, mapDispatcherToProps)(AppPage1);

