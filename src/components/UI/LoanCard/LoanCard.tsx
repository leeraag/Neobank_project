import { FC } from 'react';
import './loanCard.scss';
import image from '@assets/images/SurpriseImage.svg';
import trueIcon from '@assets/icons/okField.svg';
import falseIcon from '@assets/icons/errorField.svg';

type TLoanCard = {
    reqAmount: number;
    totalAmount: number;
    term: number;
    payment: number;
    rate: number;
    insurance: boolean;
    salaryClient: boolean;
}

const LoanCard: FC<TLoanCard> = ({ reqAmount, totalAmount, term, payment, rate, insurance, salaryClient }) => {
    
    return (
        <section className="loanCard">
            <figure className="loanCard__image">
                <img src={image} alt="Surprise" />
            </figure>
            <div className="loanCard__description">
                <p className="loanCard__description-item">Requested amount: {reqAmount}&nbsp;₽</p>
                <p className="loanCard__description-item">Total amount: {totalAmount}&nbsp;₽</p>
                <p className="loanCard__description-item">For {term} months</p>
                <p className="loanCard__description-item">Monthly payment: {payment}&nbsp;₽</p>
                <p className="loanCard__description-item">Your rate: {rate}&nbsp;%</p>
                {
                    insurance === true? 
                        <p className="loanCard__description-item">
                            Insurance included
                            <img className="icon" src={trueIcon} alt="Icon" />
                        </p>
                    : 
                    <p className="loanCard__description-item">
                        Insurance included
                        <img className="icon" src={falseIcon} alt="Icon" />
                    </p>
                }
                {
                    salaryClient === true? 
                        <p className="loanCard__description-item">
                            Salary client
                            <img className="icon" src={trueIcon} alt="Icon" />
                        </p>
                    : 
                    <p className="loanCard__description-item">
                        Salary client
                        <img className="icon" src={falseIcon} alt="Icon" />
                    </p>
                }
            </div>
        </section>
    );
};

export { LoanCard };