import { FC, InputHTMLAttributes } from 'react';
import './amountInput.scss'

const AmountInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...inputProps }) => {
  return (
    <input {...inputProps} />
  );
}

export { AmountInput };