import '../style/panel.css'

function panelAdmin() {
    return (
        <div className='grpBloc'>
            <div className='bloc'>
                <h2>User Table</h2>
                <p>id user</p>
                <input type="number" id="id-user" name='id-user' maxlength="32" size="20"></input>
                <p>admin</p>
                <input type="number" id="admin" name='admin' maxlength="1" size="1"></input>
                <p>adresse e-mail</p>
                <input type="texte" id="mail" name='mail' maxlength="64" size="25"></input>
                <p>name</p>
                <input type="texte" id="name" name='name' maxlength="32" size="20"></input>
                <p>firstname</p>
                <input type="texte" id="firstname" name='firstname' maxlength="32" size="20"></input>
                <p>adresse</p>
                <input type="texte" id="adress" name='adress' maxlength="64" size="20"></input>
            </div>
            <div className='bloc'>
                <h2>Products</h2>
                <p>id-product</p>
                <input type="number" id="id-product" name='id-product' maxlength="9" size="20"></input>
                <p>product name</p>
                <input type="texte" id="product-name" name='product-name' maxlength="64" size="20"></input>
                <p>id-stock</p>
                <input type="number" id="id-stock" name='id-stock' maxlength="32" size="20"></input>
                <p>product price</p>
                <input type="texte" id="price" name='price' maxlength="32" size="20"></input>
            </div>
            <div className='bloc'>
                <h2>Custom</h2>
                <p>id-custom</p>
                <input type="number" id="id-custom" name='id-custom' maxlength="32" size="20"></input>
                <p>id-product</p>
                <input type="number" id="id-product" name='id-product' maxlength="32" size="20"></input>
                <p>board color</p>
                <input type="texte" id="board-color" name='board-color' maxlength="32" size="20"></input>
                <p>key's color</p>
                <input type="texte" id="key-color" name='key-color' maxlength="32" size="20"></input>
                <p>police</p>
                <input type="texte" id="police" name='police' maxlength="32" size="20"></input>
                <p>led</p>
                <input type="texte" id="led" name='led' maxlength="32" size="20"></input>
                <p>custom price</p>
                <input type="texte" id="custom-price" name='custom-price' maxlength="32" size="20"></input>
            </div>
            <div className='bloc'>
                <h2>autre chose peut etre...</h2>
                <p>irngkngikngdiongdngbdnxd</p>
            </div>
        </div>
    );
}

export default panelAdmin;