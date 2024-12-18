import React from 'react';
import PropTypes from 'prop-types';
import "./CustomButton.css"

const CustomButton = ({
  label,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  icon,
  style,
}) => {
  return (
    <button
      type={type}
      className={`custom-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  style: PropTypes.object,
};

export default CustomButton;
