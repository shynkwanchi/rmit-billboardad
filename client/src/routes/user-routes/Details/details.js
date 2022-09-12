import 'bootstrap/dist/css/bootstrap.min.css';
import './details.css';
import Slider from "../../../components/Slider/slider";
import ProfileCard from "../../../components/Profile Card/Card"
import Features from "../../../components/Profile Card/MediaTable";

function Details(){
    return(
        <main>
            <Slider/>
            <div className='container'>
                <div className='row'>
                    <div className='col-auto'>
                        <ProfileCard/>
                    </div>
                    
                    <div className='col p-3'>
                        <Features/>
                    </div>
                </div>
            </div>
        </main>
    );

}

export default Details;