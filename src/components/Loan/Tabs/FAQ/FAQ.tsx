import { FC } from "react";
import { Accordion } from "../../../../components";
import { IReceivingCard } from '../../../../constant';
import { IUsingCard } from "../../../../constant";
import './faq.scss';

type TFAQProps = {
  receivingCard: Array<IReceivingCard>;
  usingCard: Array<IUsingCard>;
};

const FAQ: FC<TFAQProps> = ({ receivingCard, usingCard }) => {

  return (
    <div className="faq">
      <h3 className="faq__title">Issuing and receiving a card</h3>
      <Accordion sections={receivingCard}/>
      <h3 className="faq__title">Using a credit card</h3>
      <Accordion sections={usingCard}/>
    </div>
  );
};

export { FAQ };