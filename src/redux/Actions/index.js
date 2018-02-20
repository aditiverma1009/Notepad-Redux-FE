export const onFooterClick = () => ({
  type: 'ON_FOOTER_CLICK',
});

export const onClickEditReducer = keyPayload => ({
  type: 'ON_CLICK_EDIT_REDUCER',
  payload: keyPayload,
});

export const onSaveEventReducer = notePayload => ({
  type: 'ON_SAVE_EVENT_REDUCER',
  payload: notePayload, // yet to setup
});
