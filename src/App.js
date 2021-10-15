import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGuitar, faBars} from '@fortawesome/free-solid-svg-icons'

import Header from "./component/layout/Header";
import Featured from "./component/featured/Featured";
import  './resources/style.css'
import Footer from "./component/layout/Footer";
import VenueNfo from './component/venue_info/VenueNfo'

library.add(faGuitar, faBars)

const App = () => {
  return (
    <div className='flex flex-col'>
      <Header/>
      <Featured/>
      <VenueNfo/>
      <Footer/>
    </div>
  );
}

export default App;
