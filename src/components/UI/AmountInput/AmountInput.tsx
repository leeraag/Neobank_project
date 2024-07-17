import { FC, InputHTMLAttributes } from 'react';
import './amountInput.scss'

const AmountInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...inputProps }) => {
  return (
    <div className="amountInput">
      <p className="amountInput__title">Select amount</p>
      <output className="amountInput__value">{inputProps.value}</output>
      <input {...inputProps} />
      <datalist id="values" className="amountInput__caption">
        <option label="15000" className="amountInput__caption-item"></option>
        <option label="600000" className="amountInput__caption-item"></option>
      </datalist>
    </div>
    
  );
}

export { AmountInput };