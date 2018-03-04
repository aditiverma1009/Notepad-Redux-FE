const axios = require('axios');

const onFooterClick = 'ON_FOOTER_CLICK';
const onClickEditReducer = 'ON_CLICK_EDIT_REDUCER';
const onSaveEventReducer = 'ON_SAVE_EVENT_REDUCER';
const setData = 'SET_DATA';
const onGetData = 'GET_DATA';
const onChangeNote = 'ON_CHANGE_NOTE';
const onChangeNoteTitle = 'ON_CHANGE_NOTE_TITLE';

const defaultValue = {
  noteTitle: '',
  noteContent: '',
  history: [],
  page: false,
  edit: false,
  noteid: 0,
  alertBool: false,
  leftChar: 10,
};

const noteReducer = (prevState = defaultValue, action) => {
  switch (action.type) {
    case onFooterClick: {
      const pageNow = prevState.page;

      return {
        ...prevState,
        page: !pageNow,
        edit: false,
        noteid: 0,
      };
    }


    case onSaveEventReducer: {
      const valueNoteTitle = prevState.noteTitle;
      const valueNote = prevState.noteContent;
      const pageNow = prevState.page;
      let historyNow = prevState.history;
      const { edit } = prevState;
      let { noteid } = prevState;
      if (edit === false) {
        noteid = Date.now().toString();
        historyNow = historyNow.concat([{
          noteid,
          notecontent: valueNote,
          notetitle: valueNoteTitle,
        }]);
      } else if (edit === true) {
        historyNow.map((step, index) => {
          if (step.noteid === noteid) {
            historyNow[index].noteid = noteid;
            historyNow[index].notecontent = valueNote;
            historyNow[index].notetitle = valueNoteTitle;
          }
          return true;
        });
      }
      return {
        ...prevState,
        history: historyNow,
        page: !pageNow,
        edit: false,
      };
    }


    case setData: {
      console.log(prevState.history);
      const historyData = prevState.history;
      console.log('on sync in set data');
      console.log(historyData);
      axios({
        method: 'post',
        url: '/setData',
        data: historyData,
      }).then((resp) => {
        console.log(resp);
      });
      return {
        ...prevState,
      };
    }

    case onGetData: {
      const historyArr = action.payload;
      const historyArr2 = historyArr.data;
      console.log('In on get data - history ->', historyArr2);
      return {
        ...prevState,
        history: historyArr2,
        noteid: 0,
      };
    }

    case onClickEditReducer: {
      const key = action.payload;
      const historyArr = prevState.history;
      let noteContent = '';
      let noteTitle = '';
      historyArr.map((step) => {
        if (key === step.noteid) {
          noteContent = step.noteContent;
          noteTitle = step.noteTitle;
        }
      });
      return {
        ...prevState,
        noteContent,
        noteTitle,
        noteid: key,
        edit: true,
        page: false,
      };
    }

    case onChangeNote: {
      let valueNotenew = action.payload;
      let alertBoolnew = false;
      const totalChar = valueNotenew.length;
      let leftChar = 10 - totalChar;
      if (totalChar > 10) {
        leftChar = 0;
        valueNotenew = valueNotenew.slice(0, 10);
        alertBoolnew = true;
      }
      return {
        ...prevState,
        noteContent: valueNotenew,
        alertBool: alertBoolnew,
        leftChar,
      };
    }


    case onChangeNoteTitle: {
      const newvalueNoteTitle = action.payload;
      return {
        ...prevState,
        noteTitle: newvalueNoteTitle,
      };
    }


    default: {
      return prevState;
    }
  }
};
export default noteReducer;

