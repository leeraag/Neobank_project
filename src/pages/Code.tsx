import { FC, ReactNode } from "react";
import { headerlinks, footerlinks } from "@constant";
import {
    Header,
    Footer,
    CodeSection,
    MessageStep
} from "@components";
import { useAppSelector } from "../hooks";
import { applicationStepState } from "../store/applicationSlice";
import { useNavigate } from 'react-router-dom';
import { persistor } from '../store/main';

const Code: FC = () => {
    const applicationStep = useAppSelector(applicationStepState);
    const navigate = useNavigate();

    const handleClick = () => {
        persistor.purge(); // очистка store
        navigate("/");
        window.location.reload();
    }

    const codeModule = (): ReactNode => {
        if (applicationStep === 6) {
            return <CodeSection/>;
        } else if (applicationStep === 7) {
            return <MessageStep
                title={"Congratulations! You have completed your new credit card."}
                text={"Your credit card will arrive soon. Thank you for choosing us!"}
                image={true}
                button={true}
                buttonText={"View other offers of our bank"}
                onClick={handleClick}/>; 
        }
    };

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            {codeModule()}
            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { Code };