import { FC } from 'react';
import { ICashback } from '../../../../constant';
import './cashback.scss';

type TCashbackProps = {
    cashback: Array<ICashback>;
};

const Cashback: FC<TCashbackProps> = ({ cashback }) => {
    return (
        <article className="cashback">
            {
                cashback.map((cashbackItem) => {
                    return (
                        <section key={cashbackItem.id} className="cashback__item">
                            <p className="cashback__item-title">{cashbackItem.category}</p>
                            <p className="cashback__item-description">{cashbackItem.cashback}</p>
                        </section>
                    )
                })
            }
        </article>
    );
};

export { Cashback };