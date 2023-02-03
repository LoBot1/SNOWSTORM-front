export const userBasket = async (data) => {
    let non = "dkfllksd"
    const response = await fetch(
        "http://localhost:4444/basket/getUser?user_id="+data+"&non="+non+{
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const Basket = await response.json()
    return Basket
}
export const basketInsertUpdate = async (id_product,user_id,name_product) => {
    const response = await fetch(
        'http://localhost:4444/items-basket/update-insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify({id_product:id_product,user_id:user_id,name_product:name_product})
        }
    )
}

