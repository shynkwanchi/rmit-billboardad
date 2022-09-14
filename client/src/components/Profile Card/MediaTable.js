import 'bootstrap/dist/css/bootstrap.min.css';
import './MediaTable.css';

export default function MediaTable() {


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
            </tbody>
        </table>
    )
};