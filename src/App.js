import React from "react";
import 'bulma/css/bulma.min.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGuitar, faBars, faCopyright} from '@fortawesome/free-solid-svg-icons'
import Header from "./component/Header";
import Featured from "./component/featured";
import  './resources/style.css'
import Footer from "./component/Footer";

library.add(faGuitar, faBars, faCopyright)
//Not a fan of Bulma-react-components. A different library would suffice better
const App = () => {
  return (
    <div>
      <Header/>
      <Featured/>
      <Footer/>
    </div>
  );
}

export default App;
