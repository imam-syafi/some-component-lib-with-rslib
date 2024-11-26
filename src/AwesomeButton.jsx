import React, { useCallback } from 'react';
import { snowflakeCursor } from 'cursor-effects';

import './button.css';

export const AwesomeButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? 'demo-button--primary' : 'demo-button--secondary';

  const setupCursor = useCallback(() => {
    new snowflakeCursor({ element: document.body });
  }, []);

  return (
    <button
      type="button"
      className={['demo-button', `demo-button--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
      ref={setupCursor}
    >
      {label}
      <small className='version'>v1.2.0</small>
    </button>
  );
};
