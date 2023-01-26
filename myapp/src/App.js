
import NavBar from "./components/NavBar";
import Home from "./pages/home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Product from "./pages/Product";
import Support from "./components/Support";



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
        

  }
  return(
    <>
      <NavBar/>
      {components}
    </>

  )
  
}

export default App;
