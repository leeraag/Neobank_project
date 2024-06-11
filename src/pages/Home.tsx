import { FC, useState, useEffect } from "react";
import { headerlinks, footerlinks } from "../constant";
import {
    Header,
    ChooseCard,
    BankFeatures,
    Map,
    Subscribe,
    Footer,
    Converter,
    News
} from "../components";
import { getCurrencies } from "../api/getCurrencies";
import { baseCurrencies } from "../constant/currencies"

const Home: FC = () => {
    const [currencies, setCurrencies] = useState([]);
    const miliseconds: number = 1000;
    const seconds: number = 60;
    const minutes: number = 15;
    const convertCurrencies = async () => {
        const response = await getCurrencies(baseCurrencies).then(function (response: any) {
            return response;
        });
        setCurrencies(response);
    };
    useEffect(() => {
        convertCurrencies();
        setInterval(() => {
            convertCurrencies();
        }, (miliseconds * seconds * minutes));
    }, []);

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            <ChooseCard />
            <BankFeatures/>
            <Converter currencies={currencies}/>
            <Map/>
            <News />
            <Subscribe/>
            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { Home };