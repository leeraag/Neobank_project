import { FC } from "react";
import { Header, 
        Footer, 
        PlatinumCard, 
        GetCard,
        About,
        Rates,
        TabsPanel,
        Cashback,
        FAQ } 
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

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            <PlatinumCard/>
            <TabsPanel tabs={tabs} />
            <GetCard/>
            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { Loan };