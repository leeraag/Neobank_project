import { FC } from "react";
import { Header, Footer, NotFoundModule } from "@components"
import { headerlinks, footerlinks } from "@constant";

const NotFound: FC = () => {

    return (
        <div className="container">
            <Header headerlinks={headerlinks}/>
            {/* <h3>Page not found</h3> */}
            <NotFoundModule />
            <Footer footerlinks={footerlinks}/>
        </div>
    );
};

export { NotFound };