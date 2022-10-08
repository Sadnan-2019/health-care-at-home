import "./Map.css";
import React, { useRef, useState } from "react";
 
import "leaflet/dist/leaflet.css";
import L from "leaflet";
 
const Map = () => {
 
  return (
    <div className="    "  >
      <iframe className='broder   lg:w-[500px] md:w-[350px] py-8 rounded  h-96  ' 
 src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3650.7490889132346!2d90.41645411434928!3d23.791947643106184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d23.7919271!2d90.418686!4m5!1s0x3755c712067b4975%3A0x78f7e1870533e90e!2sArtLand%20Dhaka%20niloy%20house%2011%2C%20flat%20501%2C%20road%20108%2C%20gulshan%202%20near%20gulshan%20youth%20club%20Dhaka%201212!3m2!1d23.791843699999998!2d90.4186216!5e0!3m2!1sen!2sbd!4v1664948951631!5m2!1sen!2sbd"
  
 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Map;
