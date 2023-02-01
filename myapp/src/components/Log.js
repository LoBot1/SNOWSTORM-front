function Log() {
    const isLoggedIn = localStorage.getItem('profile')
    if (isLoggedIn) {
      return <button onClick={localStorage.removeItem("user")}>Logout</button>
    }
    return <a href="/Login">Se connecter</a>
  }

export default Log ; 