import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../../components/Collapse/collapse";
import { LoadSections } from "../../../middleware/load-data";
import "./generic-page.css";

const GenericPage = () => {
    // Load the page
    const [page, setPage] = useState({});
    const { _id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/pages/${_id}`)
            .then(res => res.json())
            .then(data => setPage(data))
    }, [_id]);

    console.log(page);

    const sections = LoadSections(_id);

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

            <p className="update-txt">Last updated on {page.lastUpdated}.</p>
        </div>
    );
}

export default GenericPage;