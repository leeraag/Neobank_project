import { FC } from 'react';
import './messageStep.scss';

type TMessageStep = {
    title: string,
    text: string,
}  

const MessageStep: FC<TMessageStep> = ({ title, text }) => {
  return (
      <section className="messageStep">
        <h3 className="messageStep__title">{title}</h3>
        <p className="messageStep__text">{text}</p>
      </section>
  );
};

export { MessageStep };