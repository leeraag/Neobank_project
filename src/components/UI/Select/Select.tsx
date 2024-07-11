import { FC } from 'react';
import './select.scss';

type TSelectProps = {
    id: string;
    onChange: any;
    onBlur: any;
    options: Array<any>;
}

const Select: FC<TSelectProps> = ({ id, onChange, onBlur, options }) => {
  return (
    <select className= "select" id={id} onChange={onChange} onBlur={onBlur}>
      {
        options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
                {option.label}
            </option>
          );
        })
      }
    </select>
  );
};

export { Select };