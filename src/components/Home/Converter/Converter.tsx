import { FC } from 'react';
import converter from '../../../assets/images/converter.svg';
import { baseCurrencies } from '../../../constant';
import './converter.scss';
import { Loader } from '../../UI';

type TCurrencies = {
    currencies: Array<any>;
};

const Converter: FC<TCurrencies> = ({ currencies }) => {
    return (
        <article className="converter">
        <div className="converter__header-main">
            <h3>Exchange rate in internet bank</h3>
            <p>Update every 15 minutes, MSC 09.08.2022</p>
        </div>
        <h3 className="converter__header">Currency</h3>
        <div className="converter__currencies">
            <ul className="converter__currencies-list">
            {currencies.length ? currencies.map((currency, index: number) => {
                    return (
                        <li key={index}>
                            <span>{baseCurrencies[index].from}: </span>
                            {Number.parseFloat(currency.value.data).toFixed(2)}
                        </li>
                    )
                }) : <Loader/>
            }
            </ul>
            <img src={converter} alt=""/>
        </div>
        <a href="#" className="converter__link">All courses</a>
    </article>
    );
};

export { Converter };