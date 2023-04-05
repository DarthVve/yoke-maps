import { useRef, useState, useEffect } from 'react';
// import mapboxgl, { MapboxEvent, MapboxOptions } from 'mapbox-gl'; 
// // import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// mapboxgl.accessToken = 'pk.eyJ1IjoiZGFydGgtdnZlIiwiYSI6ImNsZmkwYXBmZzA3ZmYzcXAyMmhld2J4eHIifQ.oDCya8N0cwh9PteBi7EpnQ';


// const Map = () => {
//   const mapContainer = useRef(null!);
//   // const map = useRef<unknown>(null!);
//   const [lng, setLng] = useState(-70.9);
//   const [lat, setLat] = useState(42.35);
//   const [zoom, setZoom] = useState(9);


//   // useEffect(() => {
//   //   if (mapContainer.current) return; // initialize map only once
//   //   map.current = new mapboxgl.Map({
//   //     container: 'map',
//   //     style: 'mapbox://styles/mapbox/streets-v12',
//   //     center: [lng, lat],
//   //     zoom: zoom
//   //   });
//   // }, []);

//   // const Map = setAccessToken('pk.eyJ1IjoiZGFydGgtdnZlIiwiYSI6ImNsZmkwYXBmZzA3ZmYzcXAyMmhld2J4eHIifQ.oDCya8N0cwh9PteBi7EpnQ')
//   // const Map = ReactMapboxGl({
//   //   accessToken: setAccessToken('pk.eyJ1IjoiZGFydGgtdnZlIiwiYSI6ImNsZmkwYXBmZzA3ZmYzcXAyMmhld2J4eHIifQ.oDCya8N0cwh9PteBi7EpnQ')
//   // });


//   return (
//     <>
//       <div id='map' ref={mapContainer} className="map-container" />
//       {/* <Map style="mapbox://styles/mapbox/streets-v8"/> */}
//     </>
//   )
// };

// export default Map;