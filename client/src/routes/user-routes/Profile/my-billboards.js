import Card from "../../../components/Card/card";
import "./profile.css";

const MyBillboards = () => {
    return (
        <>
            <h2 className="tab-header">My billboards</h2>
            <div className="row filters">
                <div className="col-6 col-sm-3 filter-container">
                    Billboard type
                    <select className="form-select" aria-label="Select billboard type">
                        <option defaultValue="0">All</option>
                        <option value="1">Traditional</option>
                        <option value="2">Digital</option>
                    </select>
                </div>
                <div className="col-6 col-sm-3 filter-container">
                    Status
                    <select className="form-select" aria-label="Select status">
                        <option defaultValue="0">All</option>
                        <option value="1">Available</option>
                        <option value="2">Occupied</option>
                    </select>
                </div>
                <div className="col-12 col-sm-6 col-md-4 btn-container">
                    <button className="btn create-new-btn"><em className="fas fa-plus"></em> Create new</button>
                </div>
            </div>
            <div className="row" id="items">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default MyBillboards;