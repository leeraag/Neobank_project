import { FC } from 'react';
import './formHeader.scss'

type TFormHeader = {
  title: string,
  step: number,
}

const FormHeader: FC<TFormHeader> = ({ title, step }) => {
  return (
    <div className="formHeader">
        <h3 className="formHeader__title">{title}</h3>
        <p className="formHeader__step">Step {step} of 5</p>
    </div>
  );
}

export { FormHeader };