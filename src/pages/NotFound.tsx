import { FC } from "react";
import { Header } from "@components"
import { headerlinks } from "@constant";

const NotFound: FC = () => {

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            <h3>Page not found</h3>
        </div>
    );
};

export { NotFound };