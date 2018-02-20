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
      return {
        ...prevState,
        noteid: key,
        edit: true,
        page: false,
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

