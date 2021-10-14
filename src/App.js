import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGuitar, faBars} from '@fortawesome/free-solid-svg-icons'
import Header from "./component/Header";
import Featured from "./component/featured";
import  './resources/style.css'
import Footer from "./component/Footer";

library.add(faGuitar, faBars)

const App = () => {
  return (
    <div className='flex flex-col'>
      <Header/>
      <Featured/>
      <Footer/>
    </div>
  );
}

export default App;
