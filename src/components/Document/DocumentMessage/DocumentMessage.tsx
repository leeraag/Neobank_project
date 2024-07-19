import { FC } from 'react';
import './documentMessage.scss';

const DocumentMessage: FC = () => {
  return (
      <section className="documentMessage">
        <h3 className="documentMessage__title">Documents are formed</h3>
        <p className="documentMessage__text">Documents for signing will be sent to your email</p>
      </section>
  );
};

export { DocumentMessage };