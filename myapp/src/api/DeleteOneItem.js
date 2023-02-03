export const DeleteOneItem = async (data) => {
    const response = await fetch(
        'http://localhost:4444/basket/deleteOne', {
            method: 'Delete', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body : JSON.stringify({id:data})
        }
    )
    const Basket = await response.json()
    return Basket
}