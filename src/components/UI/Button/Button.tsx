import { FC, ReactNode } from 'react';
import './button.scss'

type TButton = {
  children: string | ReactNode,
  className: string,
}

const Button: FC<TButton> = ({ className, children }) => {
  return (
    <button className={className}>
      <span>
        {children}
      </span>
    </button>
  );
}

export { Button };