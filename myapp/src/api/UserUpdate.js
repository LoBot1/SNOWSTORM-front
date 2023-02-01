export const UserUpdate = (data) => {
    console.log(data)
    fetch('http://localhost:4444/user/update',{
        method: 'POST', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({data})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
}