import { FC, ReactNode } from 'react';
import './label.scss'

type TLabel = {
    htmlFor: string;
    children?: ReactNode; 
}

const Label: FC<TLabel> = ({ htmlFor, children }) => {
  return (
    <label className="label" htmlFor={htmlFor}>{children}</label>
  );
}

export { Label };