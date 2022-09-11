import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getResponse } from "../../middleware/response";
import { LoadUsers } from "../../middleware/load-data";
import "./admin-panel.css";

export default function Users() {

    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [usersname, setUsersname] = useState('');
    const [email, setEmail] = useState('');
    const [passwords, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const users = LoadUsers();
    const URL = 'http://localhost:5000/pages/';

    const load = () => {
        fetch(URL)
            .then(res => res.json())
            .then(json => setData(json))
    }
    useEffect(() => {
        load()
    }, [])

    const save = () => {
        if (id === '') {
            fetch(URL, {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, username: username, email: email, password: password, gender: gender, phone: phone })
            })
                .then(res => {
                    console.log(res)
                    load()
                })
        }
        else {
            fetch(URL, {
                method: "put",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name: name, username: usersname, email: email, password: passwords, gender: gender, phone: phone })
            })
                .then(res => {
                    console.log(res)
                    load()
                })
        }
    }

    const edit = (password) => {
        setPassword(passwords)
        setUsersname(usersname)
    }
    
    
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
                        <option value="3">Most Order</option>
                    </select>
                </div>

                <div className="col-6 col-sm-4 col-md-3 filter-container">
                    Name Search
                    <input type="text" placeholder="Name here..." className="searching" />
                    <ul className="listdata">
                        {/* need a data list of user to input here this one is just a static filter */}
                    </ul>
                </div>


            </div>
        </>
    )
}