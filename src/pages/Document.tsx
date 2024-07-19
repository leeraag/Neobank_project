import { FC } from "react";
import { headerlinks, footerlinks } from "@constant";
import {
    Header,
    Footer,
} from "@components";
import { useAppSelector } from "../hooks";
import { applicationIdState } from "../store/applicationSlice";


const Document: FC = () => {
    const applicationId = useAppSelector(applicationIdState);

    // const scoringModule = (): ReactNode => {
    //     if (applicationStep === 3) return <ScoringForm />;
    //     else if (applicationStep === 4) return <ScoringMessage /> ;
    // };

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            <h1>Document {applicationId}</h1>
            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { Document };