import { FC } from 'react';
import './messageStep.scss';
import SurpriseImage from '@assets/images/SurpriseImage.svg';
import { Button } from '@UI';

type TMessageStep = {
    title: string,
    text: string,
    image?: boolean,
    button?: boolean,
    buttonText?: string,
    onClick?: () => void,
}  

const MessageStep: FC<TMessageStep> = ({ title, text, image, button, buttonText, onClick }) => {
  return (
      <section className="messageStep">
        { image && 
          <figure>
            <img src={SurpriseImage} alt="Surprise" />
          </figure>
        }
        <h3 className="messageStep__title">{title}</h3>
        <p className="messageStep__text">{text}</p>
        { button && 
          <Button className="mainBtn" onClick={onClick}>{buttonText}</Button>
        }
      </section>
  );
};

export { MessageStep };