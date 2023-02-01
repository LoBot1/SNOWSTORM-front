
export const PasswordUpdate = async (data) => {
    const response = await fetch(
        "http://localhost:4444/user/loger?repeatpassword="+data.repeatpassword+"&lastpassword="+data.lastpassword+"&password="+data.password+"&email="+data.email+"&non="+data.non+{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }
    )
    // const user = await response.json()
    // console.log(user)
    // return user
}



