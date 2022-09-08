import React, { useState } from "react";


export default function Billboards() {
    {/* Data display section */ }


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
            </div>
        </>
    )
}