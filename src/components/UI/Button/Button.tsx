import { FC, ReactNode } from 'react';
import './button.scss'

type TButton = {
  children: string | ReactNode,
  className: string,
  type?: 'button' |'submit' |'reset',
}

const Button: FC<TButton> = ({ className, children, type }) => {
  return (
    <button 
      className={className}
      type={type || 'button'}
      >
      <span>
        {children}
      </span>
    </button>
  );
}

export { Button };