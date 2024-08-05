import { FC, ReactNode } from "react";
import { headerlinks, footerlinks } from "@constant";
import {
    Header,
    Footer,
    Payments,
    MessageStep
} from "@components";
import { useAppSelector } from "../hooks";
import { applicationStepState } from "../store/applicationSlice";


const Document: FC = () => {
    const applicationStep = useAppSelector(applicationStepState);

    const documentModule = (): ReactNode => {
        if (applicationStep === 4) {
            return <Payments/>;
        } else if (applicationStep === 5) {
            return <MessageStep 
                    title={"Documents are formed"}
                    text={"Documents for signing will be sent to your email"}/>; 
        }
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