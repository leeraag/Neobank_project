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
import { useSelector } from 'react-redux'
import '@assets/styles/index.scss';
import { statusState, prescoringStepState, buttonTextState } from "../store/prescoringSlice";

const Loan: FC = () => {
    const buttonText = useSelector(buttonTextState);
    const step = useSelector(prescoringStepState);
    const status = useSelector(statusState);

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

    const prescoringModule = (): ReactNode => {
        if (step === 1) return <PrescoringForm />;
        else if (step === 2) return <LoanOffers />;
        else if (step === 3) return <LoanMessage/>

    };

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            <PlatinumCard scroll={scrollToTarget} cardFeatures={cardFeatures} text={buttonText}/>
            <TabsPanel tabs={tabs} />
            <GetCard getCardSteps={getCardSteps}/>
            <div ref={targetRef}>
                {status === "loading" ? (
                    <Loader />
                ) : status === "error" ? (
                    <p className="request-error">
                        Your request cannot be processed, an error has occurred
                    </p>
                ) : (
                    prescoringModule()
                )}
            </div>
            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { Loan };