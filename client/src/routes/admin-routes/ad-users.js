import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getResponse } from "../../middleware/response";
import { LoadUsers } from "../../middleware/load-data";
import "./admin-panel.css";

export default function Users() {

    const [human, setHuman] = useState({
        id: '',
        name: '',
        usersname: '',
        email: '',
        password: '',
        gender: '',
        phone: '',
    });
    const{_id}= useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/pages/${_id}`)
        .then(res => res.json())
        .then(data => setHuman(data))
    }, [_id]);

    const save = (e, id) => {
        e.preventDefault();
        try {
            fetch(`http://localhost:5000/pages/${id}`, {
                method: "put",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: human.name, email: human.email, phone: human.phone })
            })
                .then(res => {
                    console.log(res)
                    load()
                })
        }
    }


    const deleteUsers = (id) => {
            fetch(URL + "/" + id, {
                method: "delete"
            })
                .then(res => {
                    console.log(res)
                    const newdata = data.filter((item) => {
                        return item._id != id
                    })
                    setData(newdata)
                })
        }

        const editUsers = ({ password: human.password, username: human.usersname })
        return (
            <div>
                <h1>Users</h1>

                <div className="row filters">
                    <div className="col-6 col-sm-4 col-md-3 filter-container">
                        Time Range
                        <select className="form-select" aria-label="Select billboard type">
                            <option defaultValue="0">Lastest</option>
                            <option value="1">Oldest</option>
                            <option value="2">Most Billboard</option>
                            <option value="3">Most Order</option>
                        </select>
                    </div>

                    <div className="col-6 col-sm-4 col-md-3 filter-container">
                        Name Search
                        <input type="text" placeholder="Name here..." className="form-control" aria-label="Select billboard type" />
                        <ul className="listdata">
                            {/* need a data list of user to input here this one is just a static filter */}
                        </ul>
                    </div>


                </div>
            </div>
        )
    }