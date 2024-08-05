import { FC } from 'react';
import './loanOffers.scss';
import { LoanCard, Button } from '@UI';
import { sortOffers } from '@utils';
import { IOffersList, IOffer } from '../../../types/interfaces';
import { postOffer } from '@api';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setButtonText, setPrescoringStep, setStatus, offersState } from "../../../store/prescoringSlice";
import { setApplicationId, setApplicationStep } from '../../../store/applicationSlice';

const LoanOffers: FC = ({ }) => {
    const offersData: IOffersList = useAppSelector(offersState)
    const sortedOffers: IOffersList = sortOffers(offersData);
    const dispatch = useAppDispatch();

    const handleSubmit = async (index: number) => {
        const offer = sortedOffers[index];
        // включается loader
        dispatch(setStatus("loading"));
        try {
            const result = await postOffer(offer);
            if (result) {
                dispatch(setButtonText('Continue registration'));
                dispatch(setStatus("success"));
                dispatch(setPrescoringStep(3));
                dispatch(setApplicationStep(3));
                dispatch(setApplicationId(offer.applicationId));
            } else throw new Error();
        } catch (error) {
            dispatch(setStatus("error"));
        }
    }
    
    return (
        <article className="loanOffers">
            {
                sortedOffers ? sortedOffers.map((offer: IOffer, index: number) => (
                    <div key={index} className="loanOffers__item">
                        <LoanCard
                            id={offer.applicationId}
                            reqAmount={offer.requestedAmount}
                            totalAmount={offer.totalAmount}
                            term={offer.term}
                            payment={offer.monthlyPayment}
                            rate={offer.rate}
                            insurance={offer.isInsuranceEnabled}
                            salaryClient={offer.isSalaryClient}/>
                            <Button className="mainBtn" onClick={() => handleSubmit(index)}>Select</Button>
                    </div>
                ))
                : null
            }
        </article>
    );
};

export { LoanOffers };