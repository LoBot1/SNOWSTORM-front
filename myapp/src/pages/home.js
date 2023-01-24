

import '../style/home.css'

function home() {
    return (
        <div className='Contain'>
            <div className='box1'>
            
            </div>
            <div className='box2'>
                <h2>Nos Entraineur</h2>
                <img className="test" src="https://thumbs.dreamstime.com/b/jour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg"></img>
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