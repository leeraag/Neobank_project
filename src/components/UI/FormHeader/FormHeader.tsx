import { FC } from 'react';
import './formHeader.scss'

type TFormHeader = {
  title: string,
  step: number,
}

const FormHeader: FC<TFormHeader> = ({ title, step }) => {
  return (
    <div className="header">
        <h3 className="header__title">{title}</h3>
        <p className="header__step">Step {step} of 5</p>
    </div>
  );
}

export { FormHeader };