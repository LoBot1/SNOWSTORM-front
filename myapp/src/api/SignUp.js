
// import bcrypt from 'bcrypt'
// const salt = bcrypt.genSaltSync(10)

export const SignUpPost = (data) => {
    // const salt = bcrypt.genSaltSync(10)
    // let dataPassword = data.password
    // const password = dataPassword.current.value
    // const hashedPassword = bcrypt.hashSync(password, '$2a$10$CwTycUXWue0Thq9StjUM0u') 
    fetch('http://localhost:4444/user/post',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({firstname:data.firstname,name:data.name,email:data.email,adress:data.adress,password:data.password})
    })
    .then(res => res.json())
    .then(res => {console.log(res)})
}