import { FC, ReactNode } from "react";
import { headerlinks, footerlinks } from "@constant";
import {
    Header,
    Footer,
    Payments,
    DocumentMessage
} from "@components";
import { useAppSelector } from "../hooks";
import { applicationStepState } from "../store/applicationSlice";


const Document: FC = () => {
    const applicationStep = useAppSelector(applicationStepState);

    const documentModule = (): ReactNode => {
        if (applicationStep === 4) return <Payments/>;
        else if (applicationStep === 5) return <DocumentMessage /> ;
    };

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            {documentModule()}
            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { Document };