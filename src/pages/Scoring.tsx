import { FC } from "react";
import { headerlinks, footerlinks } from "@constant";
import {
    Header,
    Footer,
} from "@components";

import { useAppSelector } from "../hooks";
import { applicationIdState } from "../store/applicationSlice";


const Scoring: FC = () => {
    const applicationId = useAppSelector(applicationIdState);
    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            <h1> Scoring {applicationId}</h1>
            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { Scoring };