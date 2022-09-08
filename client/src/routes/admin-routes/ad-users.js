import React, { useState } from "react";

// import user data list here//


export default function SeekUsers() {


    return (
        <>
            <h1>Users</h1>

            <div className="row filters">
                <div className="col-6 col-sm-4 col-md-3 filter-container">
                    Time Range
                    <select className="form-select" aria-label="Select billboard type">
                        <option defaultValue="0">Lastest</option>
                        <option value="1">Oldest</option>
                        <option value="2">Most Billboard</option>
                    </select>
                </div>

                <div className="col-6 col-sm-4 col-md-3 filter-container">
                    Name Search
                    <input type="text" placeholder="Name here..." className="searching"/>
                    <ul className="listdata">
                        {/* need a data list of user to input here this one is just a static filter */}
                    </ul>
                </div>
            

            </div>
        </>
    )
}