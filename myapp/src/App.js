
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import Support from "./components/Support";
import Faq from "./pages/faq";
import Panel from "./pages/panel"
import CookieBanner from 'react-cookie-banner';
import Item from "./components/Item"
import Basket from "./pages/Basket";


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
                    break
                    case "/payment":
                      components = <Item/>
                      break
                      case "/Basket":
                        components = <Basket/>
                        break
                        

        

  }
  return(
    <>
      <NavBar/>
      {components}
      
 
    React.renderComponent(
      <div>
        <CookieBanner
          message="Yes, we use cookies. If you don't like it change website, we won't miss you!"
          onAccept={() => {}}
          cookie="user-has-accepted-cookies" />
      </div>,
      document.body
    );
      
    </>

  )
  
}

export default App;

