import { FC, ReactNode } from "react";
import { headerlinks, footerlinks } from "@constant";
import {
    Header,
    Footer,
    ScoringForm,
    ScoringMessage
} from "@components";
import { useAppSelector } from "../hooks";
import { applicationStepState } from "../store/applicationSlice";


const Scoring: FC = () => {
    const applicationStep = useAppSelector(applicationStepState);

    const scoringModule = (): ReactNode => {
        if (applicationStep === 3) return <ScoringForm />;
        else if (applicationStep === 4) return <ScoringMessage /> ;
    };

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            {scoringModule()}
            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { Scoring };