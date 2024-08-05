import { FC, useRef, ReactNode } from "react";
import { Header, 
        Footer, 
        PlatinumCard, 
        GetCard,
        About,
        Rates,
        TabsPanel,
        Cashback,
        FAQ,
        PrescoringForm,
        LoanOffers,
        Loader,
        LoanMessage } 
        from "@components"
import { 
    headerlinks, 
    footerlinks, 
    aboutItems, 
    ratesItems, 
    cashbackItems,
    receivingCardItems,
    usingCardItems,
    cardFeatures,
    getCardSteps} 
    from "@constant";
import { useAppSelector } from "../hooks";
import '@assets/styles/index.scss';
import { statusState, prescoringStepState, buttonTextState } from "../store/prescoringSlice";
import { applicationStepState, applicationIdState } from "../store/applicationSlice";
import { useNavigate } from "react-router-dom";

const Loan: FC = () => {
    const buttonText = useAppSelector(buttonTextState);
    const prescoringStep = useAppSelector(prescoringStepState);
    const status = useAppSelector(statusState);
    const applicationStep = useAppSelector(applicationStepState);
    const applicationId = useAppSelector(applicationIdState);
    const navigate = useNavigate();

    const tabs = [
        { title: 'About card', content: <About about={aboutItems}/> },
        { title: 'Rates and conditions', content: <Rates rates={ratesItems}/> },
        { title: 'Cashback', content: <Cashback cashback={cashbackItems}/> },
        { title: 'FAQ', content: <FAQ receivingCard={receivingCardItems} usingCard={usingCardItems}/> },
    ];
    
    const targetRef = useRef<HTMLDivElement>(null);

    const scrollToTarget = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // проверить шаг заявки и перейти к нужной странице
    const checkApplicationStatus = () => {
        switch (applicationStep) {
            case 3:
                navigate(`/loan/${applicationId}`);
                break;
            case 4: 
                navigate(`/loan/${applicationId}/document`);
                break;
            case 5:
                navigate(`/loan/${applicationId}/document/sign`);
                break;
            case 6:
                navigate(`/loan/${applicationId}/code`);
                break;
        }
    }

    // отображение модуля прескоринга в зависимости от текущего шага
    const prescoringModule = (): ReactNode => {
        if (prescoringStep === 1) return <PrescoringForm />;
        else if (prescoringStep === 2) return <LoanOffers />;
        else if (prescoringStep === 3) return <LoanMessage/>

    };

    const switchStatus = () => {
        switch (status) {
            case "loading": 
                return <Loader />;
            case "error": 
                return <p className="request-error">Your request cannot be processed, an error has occurred</p>;
            default: return prescoringModule();
        }
    }

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            <PlatinumCard 
                buttonHandle={
                    buttonText !=='Continue registration' 
                    ? scrollToTarget 
                    : checkApplicationStatus} 
                    cardFeatures={cardFeatures} 
                    text={buttonText}/>
            <TabsPanel tabs={tabs} />
            <GetCard getCardSteps={getCardSteps}/>
            <div ref={targetRef}>
                {
                    switchStatus()
                }
            </div>
            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { Loan };