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
import { getCurrencies, getNews } from "../api/index";
import { baseCurrencies } from "../constant/currencies"
import { INews } from "../types/interfaces";

const Home: FC = () => {
    const [currencies, setCurrencies] = useState([]);
    const [news, setNews] = useState<INews[]>([]);
    const miliseconds: number = 1000;
    const seconds: number = 60;
    const minutes: number = 15;
    const convertCurrencies = async () => {
        const response = await getCurrencies(baseCurrencies).then(function (response: any) {
            return response;
        });
        setCurrencies(response);
    };

    const checkImage = (url: string) => {
        const img = new Image();
        img.src = url;
        if (img.height !== 0 && img.width!== 0) {
            return true;
        } else {
            return false;
        }
    }

    const receiveNews = async () => {
        const response = await getNews();
        if (response) {
            const articles: INews[] = response.data.articles;
            const newsList = articles.filter((
                {
                    title,
                    description,
                    url,
                    urlToImage,
                }) => {
                // const validate = /.com/.test(urlToImage);
                const validate = checkImage(urlToImage); 
                if (description && urlToImage!== null && validate === true) {
                    return {
                        title,
                        description,
                        url,
                        urlToImage,
                    };
                } 
                
            });
            setNews(newsList);
    }}

    useEffect(() => {
        convertCurrencies();
        receiveNews();
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
            <News news={news}/>
            <Subscribe/>
            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { Home };