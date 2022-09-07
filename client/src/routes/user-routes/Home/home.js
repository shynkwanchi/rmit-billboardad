import { React, useState, useEffect } from "react";
import Card from "../../../components/Card/card";
import Slider from "../../../components/Slider/slider";
import HomeData from "../../../data/HomeData";

// This is the home page of the web application
const Home = () => {
    const [billboards, setBillboard] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/billboards`)
        .then(res => res.json())
        .then(data => setBillboard(data))
    }, [billboards])
    return (
        <main>
            <Slider slides={HomeData} />
            <div className="container">
                <div className="row filters">
                    <div className="col-6 col-sm-4 col-md-3 filter-container">
                        Billboard type
                        <select className="form-select" aria-label="Select billboard type">
                            <option defaultValue="0">All</option>
                            <option value="1">Traditional</option>
                            <option value="2">Digital</option>
                        </select>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 filter-container">
                        Topic
                        <select className="form-select" aria-label="Select topic">
                            <option defaultValue="0">All</option>
                            <option value="1">Topic 1</option>
                            <option value="2">Topic 2</option>
                            <option value="3">Topic 3</option>
                        </select>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 filter-container">
                        Price range
                        <select className="form-select" aria-label="Select price range">
                            <option defaultValue="0">All</option>
                            <option value="1">Range 1</option>
                            <option value="2">Range 2</option>
                            <option value="3">Range 3</option>
                        </select>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 filter-container">
                        Area
                        <select className="form-select" aria-label="Select area">
                            <option defaultValue="0">All</option>
                            <option value="1">Area 1</option>
                            <option value="2">Area 2</option>
                            <option value="3">Area 3</option>
                        </select>
                    </div>
                </div>
                <div className="row" id="items">
                        <Card id={billboards[0]?._id} title={billboards[0]?.title} description={billboards[0]?.description} price={billboards[0]?.price}/>
                        <Card id={billboards[1]?._id} title={billboards[1]?.title} description={billboards[1]?.description} price={billboards[1]?.price}/>
                        <Card id={billboards[2]?._id} title={billboards[2]?.title} description={billboards[2]?.description} price={billboards[2]?.price}/>
                        <Card id={billboards[3]?._id} title={billboards[3]?.title} description={billboards[3]?.description} price={billboards[3]?.price}/>
                </div>
            </div>
        </main>
    );
};

export default Home;