import { FC, useState, ReactElement } from 'react';
import './tooltip.scss'

type TTooltipProps = {
  text: string;
  children: ReactElement;
}

const Tooltip: FC<TTooltipProps> = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className='tooltip' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && (
        <div className='tooltip__text'>
          {text}
        </div>
      )}
    </div>
  );
};

export { Tooltip };