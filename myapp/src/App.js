
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import Support from "./components/Support";
import Faq from "./pages/faq";
import Panel from "./pages/panel"



//App.js
function App(props){
  let components
  switch(window.location.pathname){
    case "/":
      components = <App/>
      break
      case "/home":
        components = <Home/>
        break
        case "/login":
          components = <Login/>
          break
          case "/signup":
            components = <SignUp/>
            break
            case "/product":
            components = <Product/>
            break
            case "/support":
              components = <Support/>
              break
            case "/faq":
              components = <Faq/>
              break
            case "/panel":
              components = <Panel/>
              case "/payment":
                  components = <StripePayment/>
                  break
                  case "/success":
                    components = <Success/>
                    break
                    case "/cancel":
                      components = <Cancel/>
                      break
        

  }
  return(
    <>
      <NavBar/>
      {components}
    </>

  )
  
}

export default App;
