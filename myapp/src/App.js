
import NavBar from "./components/NavBar";
import Home from "./pages/home";



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
        

  }
  return(
    <>
      <NavBar/>
      {components}
    </>

  )
  
}

export default App;
