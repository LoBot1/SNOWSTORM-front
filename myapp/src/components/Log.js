import { CgProfile} from "react-icons/cg";

function Log() {
    const isLoggedIn = localStorage.getItem('profil')
    if (isLoggedIn) {
      return <a href="/signup"><CgProfile/></a>
    }
    return <a href="/signup"><CgProfile/></a>
  }

export default Log ; 