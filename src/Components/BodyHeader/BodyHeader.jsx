import PropTypes from 'prop-types';
import React from 'react';
import NoteTitleHeading from '../NoteTitleHeading/NoteTitleHeading';
import ButtonEn from '../ButtonEn/ButtonEn';
import './Body-Header.css';

const BodyHeader = props => (
  <div className="BodyHeader">
    <NoteTitleHeading textNoteTitleHeading={props.textNoteTitleHeading} />
    <ButtonEn textButtonEn={props.textButtonEn} />
  </div>
);


export default BodyHeader;
BodyHeader.propTypes = {
  textNoteTitleHeading: PropTypes.string.isRequired,
  textButtonEn: PropTypes.string.isRequired,
};
