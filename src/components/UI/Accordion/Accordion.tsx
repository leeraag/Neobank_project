import { FC, useState } from 'react';
import './accordion.scss'
import Down from '@assets/icons/Expand_down.svg'
import Up from '@assets/icons/Expand_up.svg'

type TAccordionProps = {
  sections: { id: number, title: string; description: string }[];
};

const Accordion: FC<TAccordionProps> = ({ sections }) => {
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  return (
    <div className='accordion'>
      {
        sections.map((section, index) => (
          <div key={section.id} className='accordion__section'>
            <div className='accordion__section-title' onClick={() => toggleSection(index)}>
              <p>{section.title}</p>
              {openSectionIndex === index ? 
                <img src={Up} alt="up" /> 
                : <img src={Down} alt="down" />}
            </div>
            {openSectionIndex === index && <p className='accordion__section-description'>{section.description}</p>}
          </div>
        ))
      }
    </div>
  );
};

export default Accordion;

export { Accordion };