import 'bootstrap/dist/css/bootstrap.min.css';
import './MediaTable.css';

export default function MediaTable(props) {
    return (
        <table className='table table-hover'>
            <tbody>
                <tr>
                    <th scope="row">Height</th>
                    <td>24m</td>
                </tr>
                <tr>
                    <th scope="row">Weight</th>
                    <td>110kg</td>
                </tr>
                <tr>
                    <th scope="row">Area</th>
                    <td>{props.area}</td>
                </tr>
                <tr>
                    <th scope="row">Price</th>
                    <td>{props.price}</td>
                </tr>
                <tr>
                    <th scope="row">Description</th>
                    <td>{props.description}</td>
                </tr>
            </tbody>
        </table>
    )
};