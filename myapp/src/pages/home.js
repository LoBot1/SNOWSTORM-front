import test from '../img/test.jpg';
import Test_L80 from '../img/Test_L80.jpg';
import phantom from '../img/phantom.jpg';
import Carousel from 'react-bootstrap/Carousel';

import '../style/home.css'
import '../style/footer.css';

function Home() {
    return <>
        <div className='box1'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={test}
                    alt="SnowStorm Keyboard Sunset edition"
                    />
                    <Carousel.Caption>
                    <h3>Sunset Edition</h3>
                    <p>SnowStorm Sunset Edition les parfait opposés <br></br>
                        choissisz bien votre camp ;)
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={phantom}
                    alt="SnowStorm Keyboard razer collab edition"
                    />

                    <Carousel.Caption>
                    <h3>Razer collab</h3>
                    <p>Découvrez notre collab avec razer inédite !</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Test_L80}
                    alt="SnowStorm Keyboard christmas edition"
                    />

                    <Carousel.Caption>
                    <h3>Christmas edition</h3>
                    <p>Edition limité ! <br></br> alors n'hésitez plus !</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className='box2'>
            
        </div>
        </>
}
export default Home;