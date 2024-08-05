import { FC } from 'react';
import './loanMessage.scss';

const LoanMessage: FC = ({ }) => {
  return (
      <section className="message">
        <h3 className="message__title">The preliminary decision has been sent to your email.</h3>
        <p className="message__text">In the letter you can get acquainted with the preliminary decision on the credit card.</p>
      </section>
  );
};

export { LoanMessage };