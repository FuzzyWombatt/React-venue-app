import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarker, faHeadphonesAlt, faBars, faTicketAlt, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

import Header from "./component/layout/Header";
import Featured from "./component/featured/Featured";
import Footer from "./component/layout/Footer";
import VenueNfo from './component/venue_info/VenueNfo';

import Location from './component/location/Location'

//solid icons seem to work the best with this method, regular tend to never show
library.add(faHeadphonesAlt, faBars, faTicketAlt, faMapMarkerAlt, faMapMarker);

const App = () => {
  return (
    <div className='flex flex-col'>
      <Header/>
      <Featured/>
      <VenueNfo/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
