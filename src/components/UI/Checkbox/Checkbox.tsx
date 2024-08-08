import { FC, useState, ChangeEvent, useEffect } from 'react';
import './checkbox.scss'

type TCheckboxProps = {
  label: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Checkbox: FC<TCheckboxProps> = ({ label, isChecked, onChange }) => {
  const [checked, setChecked] = useState<boolean>(isChecked);
  
  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    onChange(isChecked);
  };

  return (
    <label className="checkbox">
        <input type="checkbox" checked={checked} onChange={handleCheckboxChange} className="checkbox__input"/>
        {label}
    </label>
  );
};

export { Checkbox };
