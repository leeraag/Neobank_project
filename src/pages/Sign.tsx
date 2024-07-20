import { FC, ReactNode } from "react";
import { headerlinks, footerlinks } from "@constant";
import {
    Header,
    Footer,
    SignStep,
    MessageStep
} from "@components";
import { useAppSelector } from "../hooks";
import { applicationStepState } from "../store/applicationSlice";


const Sign: FC = () => {
    const applicationStep = useAppSelector(applicationStepState);

    const signModule = (): ReactNode => {
        if (applicationStep === 5) {
            return <SignStep/>
        } else if (applicationStep === 6) { 
            return <MessageStep 
                    title={"Documents have been successfully signed and sent for approval"}
                    text={"Within 10 minutes you will be sent a PIN code to your email for confirmation"}/>
        }
    };

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            {signModule()}
            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { Sign };