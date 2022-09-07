import { useLocation } from "react-router-dom";
import Collapse from "../../../components/Collapse/collapse";
import { LoadPages, LoadSections } from "../../../middleware/load-data";
import "./generic-page.css";

const GenericPage = () => {
    // Load the page
    const {pathname} = useLocation();

    const page = LoadPages().filter(page => 
        page.path === pathname.substring(1)
    );
    console.log(page);

    const sections = LoadSections(page._id);

    return (
        <div className="container">
            <h2 className="page-name">{page.pageName}</h2>
            <p className="content">{page.description}</p>

            <hr />

            {/* Page content here */}
            <div className="panel-group">
                {
                    sections.map(section =>
                        <>
                            <Collapse sectionID={section._id} sectionName={section.sectionName} sectionContent={section.sectionContent} />
                        </>
                    )
                }
            </div>

            <hr />

            <p className="content">If you have any problems when using our website, please contact us <a id="contact-us-link" href="#">HERE</a>.</p>
            <p className="update-txt">Last updated on {page.lastUpdadted}.</p>
        </div>
    );
}

export default GenericPage;