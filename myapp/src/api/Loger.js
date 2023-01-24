
export const Loger = async (data) => {
    let mail = data.email
    let pass = data.password
    console.log(mail,pass)
    const response = await fetch(
        "http://localhost:4444/user/loger?password="+pass+"&email="+mail+"&non="+data.non+{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }
    )
    const user = await response.json()
    console.log(user)
    return user
}



