import { FC } from 'react';
import { IRates } from '../../../../constant';
import './rates.scss';

type TRatesProps = {
    rates: Array<IRates>;
};

const Rates: FC<TRatesProps> = ({ rates }) => {
    return (
        <article className="rates">
           <ul className="rates__list">
                {
                    rates.map((ratesItem) => {
                        return (
                            <li key={ratesItem.id} className="rates__list-item">
                                <p className="item-feature">{ratesItem.title}</p>
                                <p className="item-value">
                                    {ratesItem.description}
                                    <br />
                                    {ratesItem.additional_description}
                                </p>
                            </li>
                        )
                    })
                }
           </ul>
        </article>
    );
};

export { Rates };