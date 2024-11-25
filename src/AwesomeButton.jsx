import React from 'react';
import './button.css';

export const AwesomeButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'demo-button--primary' : 'demo-button--secondary';
  return (
    <button
      type="button"
      className={['demo-button', `demo-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
      <small className='version'>v1.0.0</small>
    </button>
  );
};
