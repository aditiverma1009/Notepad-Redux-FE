const axios = require('axios');

const onFooterClick = 'ON_FOOTER_CLICK';
const onClickEditReducer = 'ON_CLICK_EDIT_REDUCER';
const onSaveEventReducer = 'ON_SAVE_EVENT_REDUCER';
const setData = 'SET_DATA';
const onGetData = 'GET_DATA';

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

    default: {
      return prevState;
    }
  }
};
export default noteReducer;

