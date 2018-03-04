import React from 'react';
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import NoteDeck from '../NoteDeck/NoteDeck';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import {onClickEditReducer,onFooterClick,onSync,onGetData} from '../../redux/Actions/index'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertBool: false,
      leftChar: 10,
      noteTitle: '',
      noteContent: '',
    };
  }



  componentDidMount() {
    axios.get('/getData').then((historyArr) => {
      this.props.getData(historyArr);
    });
  }



  onChangeNote = (event) => {
    let alertBoolnew = false;
    let valueNotenew = event.target.value;
    const totalChar = valueNotenew.length;
    let leftChar = 10 - totalChar;
    if (totalChar > 10) {
      leftChar = 0;
      valueNotenew = valueNotenew.slice(0, 10);
      alertBoolnew = true;
    }
    this.setState({
      noteContent: valueNotenew,
      alertBool: alertBoolnew,
      leftChar,
    });
  }

  onChangeNoteTitle = (event) => {
    const newvalueNoteTitle = event.target.value;
    this.setState({
      noteTitle: newvalueNoteTitle,
    });
  }

  onFooterClick=()=> {
    const noteTitle='';
    const noteContent='';
    this.setState({
      noteTitle,
      noteContent,
    });
    this.props.onFooterClickHere();
    }  
  
  onClickEdit = (key) => {
    const history = this.props.history.slice();
    history.map((step) => {
      let noteContent = '';
      let noteTitle = '';
      if (key === step.noteid) {
        noteContent = step.valueNote;
        noteTitle = step.valueNoteTitle;
      }
      this.setState({
        noteContent,
        noteTitle,
      });
      this.props.onClickEditHere(key);
      return true;
    });
  }

  

  render() {
    const history = this.props.history;
    const noteList = history.map((step, index) => (
      <li>
        <NoteDeck
          noteDeckT={step.notetitle}
          noteDeckN={step.notecontent}
          indexSent={step.noteid}
          onClickEdit={i => this.onClickEdit(i)}
        />
      </li>
    ));

    if (this.props.page === false) {
      return (
        <div className="App">
          <Header textHeader="Start taking Note" />
          <Body
            textNoteTitleHeading="Note Title"
            textButtonEn="en"
            textNoteHeading="Please type your note below"
            textSave="Save"
            onChangeNote={event => this.onChangeNote(event)}
            onChangeNoteTitle={event => this.onChangeNoteTitle(event)}
            alertBool={this.state.alertBool}
            textCounter={this.state.leftChar}
            valueNoteTitle={this.state.noteTitle}
            valueNote={this.state.noteContent}
            onSaveEvent={() => this.onSaveEvent()}
          />
          <Footer textFooter="View Saved Notes" 
          onFooterClick={this.props.onFooterClickHere} 
          />
        </div>
      );
    }
    return (
      <div className="AppPage2">
        <Header textHeader="Saved Notes" />

        <button className="SyncBtn" onClick={()=>this.props.onSyncHere()}>Sync</button>
        <ol className="Body2">{noteList}</ol>
        <Footer textFooter="Create new note" 
        onFooterClick={() => this.onFooterClick()} 
        />
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
  onSyncHere:()=>dispatch(onSync()),
  onClickEditHere: key => dispatch(onClickEditReducer(key)),
  onFooterClickHere: () => dispatch(onFooterClick()),
  getData:(historyArr)=>dispatch(onGetData(historyArr)),
});
export default connect(mapStateToProps, mapDispatcherToProps)(App);


