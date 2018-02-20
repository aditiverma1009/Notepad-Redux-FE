const onFooterClick = 'ON_FOOTER_CLICK';
const onClickEditReducer = 'ON_CLICK_EDIT_REDUCER';
const onSaveEventReducer = 'ON_SAVE_EVENT_REDUCER';

const defaultValue = {
  history: [],
  page: false,
  edit: false,
  noteid: 0,
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

    case onClickEditReducer: {
      const key = action.payload;
      const pageNow = prevState.page;
      return {
        ...prevState,
        noteId: key,
        edit: true,
        page: !(pageNow),
      };
    }

    case onSaveEventReducer: {
      const pageNow = prevState.page;
      const updatedhistory = action.payload;
      return {
        ...prevState,
        history: updatedhistory,
        page: !pageNow,
        edit: false,
      };
    }
    default: {
      return prevState;
    }
  }
};
export default noteReducer;


/*
onSaveEvent = () => {
  if (this.state.edit === false) {
    const { noteTitle } = this.state;
    const { noteContent } = this.state;
    const noteid = Date.now();
    const history = this.state.history.slice();

    this.setState({
      history: history.concat([
        {
          valueNote: noteContent,
          valueNoteTitle: noteTitle,
          noteid,
        }]),
      page: !(this.state.page),
    });
  } else if (this.state.edit === true) {
    const history = this.state.history.slice();
    const noteIdRe = this.state.noteId;
    history.map((step, index) => {
      if (step.noteid === noteIdRe) {
        history[index].valueNote = this.state.noteContent;
        history[index].valueNoteTitle = this.state.noteTitle;
        this.setState({
          history: history.slice(),
          page: !(this.state.page),
        });
      }
      return true;
    });
  }
};
*/
