import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLevelUpAlt, faHeadphonesAlt, faBars, faTicketAlt, faMapMarkerAlt, faDollarSign, faWarehouse} from '@fortawesome/free-solid-svg-icons'
import { Element } from "react-scroll";

import Header from "./component/layout/Header";
import Featured from "./component/featured/Featured";
import Footer from "./component/layout/Footer";
import VenueNfo from './component/venue_info/VenueNfo';
import Highlights from "./component/highlights/Highlights";

import Location from './component/location/Location'

//solid icons seem to work the best with this method, regular tend to never show and just easier to import in at the component
library.add(faHeadphonesAlt, faBars, faTicketAlt, faMapMarkerAlt, faLevelUpAlt, faDollarSign, faWarehouse);

const App = () => {
  return (
    <div className='flex flex-col'>
      <Header/>

      <Element name='featured'>
        <Featured/>
      </Element>

      <Element name='venuenfo'>
        <VenueNfo/>
      </Element>

      <Element name='highlights'>
        <Highlights/>
      </Element>

      <Element name='location'>
        <Location/>
      </Element>

      <Footer/>
    </div>
  );
}

export default App;
