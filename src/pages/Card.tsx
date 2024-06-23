import { FC } from "react";
import { Header } from "../components"
import { headerlinks } from "../constant";


const Card: FC = () => {

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            <h3>Card</h3>
        </div>
    );
};

export { Card };