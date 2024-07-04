import { FC, useRef } from "react";
import { Header, 
        Footer, 
        PlatinumCard, 
        GetCard,
        About,
        Rates,
        TabsPanel,
        Cashback,
        FAQ,
        PrescoringForm } 
        from "../components"
import { 
    headerlinks, 
    footerlinks, 
    aboutItems, 
    ratesItems, 
    cashbackItems,
    receivingCardItems,
    usingCardItems } 
    from "../constant";


const Loan: FC = () => {
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

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            <PlatinumCard scroll={scrollToTarget}/>
            <TabsPanel tabs={tabs} />
            <GetCard/>
            <div ref={targetRef}>
                <PrescoringForm/>
            </div>

            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { Loan };