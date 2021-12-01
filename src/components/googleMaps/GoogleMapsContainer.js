import React from "react";
import "./googleMaps.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "1000px",
  marginRight: "15px",
  marginLeft: "5px",
  position: "sticky",
  top: "-70px",
  borderRadius: "5px",
};

const center = {
  lat: 43.343777,
  lng: 17.807758,
  zoom: 14,
};

function TranslationContainer() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAD9BnG-MvxatROXPl1JFhF9O0ztnv_Hbg",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={center.zoom}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
}

export default TranslationContainer;
