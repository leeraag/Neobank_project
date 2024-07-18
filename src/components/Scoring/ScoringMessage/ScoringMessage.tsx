import { FC } from 'react';
import './scoringMessage.scss';

const ScoringMessage: FC = ({ }) => {
  return (
      <section className="scoringMessage">
        <h3 className="scoringMessage__title">Wait for a decision on the application</h3>
        <p className="scoringMessage__text">The answer will come to your mail within 10 minutes</p>
      </section>
  );
};

export { ScoringMessage };