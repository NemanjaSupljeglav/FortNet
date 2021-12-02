import React from "react";
import "./googleMaps.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "1000px",
  marginRight: "15px",
  marginLeft: "5px",
  position: "sticky",
  top: "-70px",
  borderRadius: "5px",
};

function TranslationContainer() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAD9BnG-MvxatROXPl1JFhF9O0ztnv_Hbg",
  });

  const [zoomMap, setZoomMap] = useState(1);
  const [popUp, setPopUp] = useState();
  console.log(popUp);
  console.log(popUp);
  console.log(popUp);
  setInterval(() => {
    setZoomMap(2);
  }, 10);
  const [map, setMap] = React.useState(null);
  const center = {
    lat: 43.343777,
    lng: 17.807758,
    zoom: 14 + zoomMap,
  };

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
          {true && (
            <Marker
              position={{ lat: 43.343777, lng: 17.807758 }}
              icon="./logotitle.png"
              className="icon-react"
              title="Hello Nemanja kralju!"
              content='<div id="foo">Nemanjaaaa</div>'
              id={1}
              onClick={(id) => setPopUp(id)}
            />
          )}
          {true && (
            <Marker
              position={{ lat: 43.398777, lng: 17.807758 }}
              icon="./logotitle.png"
              id={2}
            />
          )}
          {true && (
            <Marker
              position={{ lat: 43.318777, lng: 17.802758 }}
              icon="./logotitle.png"
              id={3}
            />
          )}
          {true && (
            <Marker
              position={{ lat: 43.418777, lng: 17.902758 }}
              icon="./logotitle.png"
              id={4}
            />
          )}
          {true && (
            <Marker
              position={{ lat: 43.618777, lng: 17.302758 }}
              icon="./logotitle.png"
              id={5}
            />
          )}
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
}

export default TranslationContainer;
