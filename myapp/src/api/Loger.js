
export const Loger = async (data) => {
    const response = await fetch(
        "http://localhost:4444/user/loger?password="+data.password+"&email="+data.email+"&non="+data.non+{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json'
            }
        }
    )
    const result = await response.json()
    if (result == true || result == "true") {
        console.log("error")
    }
    else{
        localStorage.setItem("user", result);
    }
}



