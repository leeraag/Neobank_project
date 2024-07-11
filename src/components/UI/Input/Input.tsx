import { FC, InputHTMLAttributes } from 'react';
import './input.scss'

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...inputProps }) => {
  return (
    <input {...inputProps} />
  );
}

export { Input };