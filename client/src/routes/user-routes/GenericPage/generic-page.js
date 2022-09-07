import { useLocation } from "react-router-dom";
import Collapse from "../../../components/Collapse/collapse";
import GenericPageData from "../../../data/GenericPageData";
import "./generic-page.css";

const GenericPage = () => {
    const location = useLocation();

    // Get the page object base on path name => The result will be an array
    const page = GenericPageData.filter(page =>
        page.path === location.pathname
    );

    // Get the array of sections
    const pageContent = page[0].sections;

    // console.log(pageContent);

    return (
        <div className="container">
            <h2 className="page-name">{page[0].pageName.toUpperCase()}</h2>
            <p className="content">{page[0].pageDescription}</p>

            <hr />

            {/* Page content here */}
            <div className="panel-group">
                {
                    pageContent.map(section =>
                        <>
                            <Collapse sectionID={section.id} sectionName={section.name} sectionContent={section.content} />
                        </>
                    )
                }
            </div>

            <hr />

            <p className="content">If you have any problems when using our website, please contact us <a id="contact-us-link" href="#">HERE</a>.</p>
            <p className="update-txt">Last updated on {page[0].updatedDate}.</p>
        </div>
    );
}

export default GenericPage;