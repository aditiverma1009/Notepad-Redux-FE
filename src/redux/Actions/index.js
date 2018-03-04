export const onFooterClick = () => ({
  type: 'ON_FOOTER_CLICK',
});

export const onSync = () => ({
  type: 'SET_DATA',
});

export const onGetData = historyArr => ({
  type: 'GET_DATA',
  payload: historyArr,
});

export const onClickEditReducer = keyPayload => ({
  type: 'ON_CLICK_EDIT_REDUCER',
  payload: keyPayload,
});

export const onSaveEventReducer = notePayload => ({
  type: 'ON_SAVE_EVENT_REDUCER',
  payload: notePayload, // yet to setup
});

