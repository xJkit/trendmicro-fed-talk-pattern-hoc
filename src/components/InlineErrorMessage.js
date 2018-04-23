import React from 'react';
import PropTypes from 'prop-types';
import InfoIcon from 'react-icons/lib/md/info';

const styles = {
  containerStyle: {
    display: 'inline-block',
    color: '#DB3D44',
    paddingLeft: 8,
    fontSize: 18
  },
  iconStyle: {
    paddingRight: 4,
    verticalAlign: 'middle',
    fontSize: 20
  }
}

const ErrorMessage = ({ message }) => (
  <div style={styles.containerStyle}>
    <InfoIcon style={styles.iconStyle} />
    {message}
  </div>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;

