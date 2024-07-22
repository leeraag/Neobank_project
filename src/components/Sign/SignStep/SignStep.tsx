import { FC, useState } from 'react';
import './signStep.scss';
import { Button, FormHeader, Checkbox } from '@UI';
import { setApplicationStep, applicationIdState } from '../../../store/applicationSlice';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import document from '@assets/files/credit-card-offer.pdf'
import file from '@assets/icons/file.svg'
import { postSign } from '@api';

const SignStep: FC = ({ }) => {
    const [check, setCheck] = useState<boolean>(false);
    const applicationId = useAppSelector(applicationIdState);
    const dispatch = useAppDispatch();
    // изменение состояния чекбокса
    const handleCheckboxChange = () => {
        setCheck(!check);
    }
    const sendAgreement = async () => {
        if (check === true) {
            try {
                const result = await postSign(applicationId);
                if (result) {
                    dispatch(setApplicationStep(6));
                } else throw new Error();
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <article className="signStep">
            <div className="signStep__header">
                <FormHeader title="Signing of documents" step={4}/>
            </div>
            <p className="signStep__text">
                Information on interest rates under bank deposit agreements with individuals. 
                Center for Corporate Information Disclosure. Information of a professional 
                participant in the securities market. Information about persons under whose 
                control or significant influence the Partner Banks are. By leaving an application, 
                you agree to the processing of personal data, obtaining information, obtaining 
                access to a credit history, using an analogue of a handwritten signature, an offer, 
                a policy regarding the processing of personal data, a form of consent to the
                processing of personal data.
            </p>
            <div className="signStep__file">
                <img src={file} alt="file"/>
                <a
                    href={document}
                    download="credit-card-offer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="signStep__file-button">Information on your card</button>
                </a>
            </div>
            <div className="signStep__button">
                <Checkbox 
                    label={"I agree"}
                    isChecked={false}
                    onChange={handleCheckboxChange} />
                <Button 
                    className={check === true ? "mainBtn" 
                    : "mainBtnDisabled"}
                    onClick={sendAgreement}>
                    Send
                </Button>
            </div>
        </article>
    );
};

export { SignStep };