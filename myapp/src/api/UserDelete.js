export const UserDelete = (data) => {
    console.log(data.firstname,data.name)
    fetch('http://localhost:4444/user/delete',{
        method: 'DELETE', 
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({firstname:data.firstname,name:data.name})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
}