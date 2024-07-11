import { FC, ReactNode } from 'react';
import './button.scss'

type TButton = {
  children: string | ReactNode,
  className: string,
  type?: 'button' |'submit' |'reset',
  onClick?: () => void,
}

const Button: FC<TButton> = ({ className, children, type, onClick }) => {
  return (
    <button 
      className={className}
      type={type || 'button'}
      onClick={onClick? onClick : undefined}
      >
      <span>
        {children}
      </span>
    </button>
  );
}

export { Button };