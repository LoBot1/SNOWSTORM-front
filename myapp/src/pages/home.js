
import NavBar from '../components/NavBar.js';

import '../style/home.css'

function home() {
    return (
        <div className='Contain'>
            <div className='box1'>
            
            </div>
            <div className='box2'>
                <h2>Nos Entraineur</h2>
                <img className="test" src="https://cdn.discordapp.com/attachments/1067015324530118716/1067176955578957984/Capture.png"></img>
            </div>
            
            <div className='box2'>
                <h2>Nos Camps</h2>
            </div>
            
            <div className='box2'>
                <h2>Boutique</h2>
            </div>
            <div className='button'>
                <div className='elite'>
                    <button>
                    <div><h5>ELITE</h5></div>
                        <span></span><span></span><span></span><span></span><span></span>
                    </button>
                </div>
                <div className='ludique'>
                    <button>
                        <div><h5>LUDIQUE</h5></div>
                        <span></span><span></span><span></span><span></span><span></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default home;