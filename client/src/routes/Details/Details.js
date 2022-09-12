import 'bootstrap/dist/css/bootstrap.min.css';
import './Details.css';
import Slider from '../../../component/Slider/Slider'
import ProfileCard from '../../../component/Profile Card/Card'
import Features from '../../../component/Profile Card/MediaTable';

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