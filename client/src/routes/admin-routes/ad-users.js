import { LoadUsers } from "../../middleware/load-data";
import "./admin-panel.css";

export default function Users() {
    const users = LoadUsers();
    
    return (
        <div>
            <h1>Users</h1>

<<<<<<< HEAD
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

    const usersdata = LoadUsers(_id);
    const navigate = useNavigate();


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

=======
            {/* Filter section */}
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
>>>>>>> 86a5655e9bf502184e77f98f62a4e97ac984723d

                <div className="col-6 col-sm-4 col-md-3 filter-container">
                    Name Search
                    <input type="text" placeholder="Name here..." className="form-control" aria-label="Select billboard type" />
                </div>
            </div>

            {/* Data display section */}
            <div className="table-box">
                <table className="table pages">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email address</th>
                            <th>Phone number</th>
                            <th>Register date</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.createdAt}</td>
                                    <td>
                                        <button className="btn">View</button>
                                        <button className="btn danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}