export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/Produit/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    )
    const Produit = await response.json()
    return Produit
}