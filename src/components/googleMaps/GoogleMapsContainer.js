import React from "react";
import "./googleMaps.css";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "1070px",
  marginRight: "15px",
  marginLeft: "5px",
  position: "sticky",
  top: "-50px",
  borderRadius: "5px",
};

function TranslationContainer() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAD9BnG-MvxatROXPl1JFhF9O0ztnv_Hbg",
  });

  const [zoomMap, setZoomMap] = useState(1);
  const [popUp, setPopUp] = useState();
  const [selectedCenter, setSelectedCenter] = useState(null);
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
              onClick={() => {
                setSelectedCenter(1);
              }}
            />
          )}
          {selectedCenter && (
            <InfoWindow
              onCloseClick={() => {
                setSelectedCenter(null);
              }}
              position={{
                lat: 43.343777,
                lng: 17.807758,
              }}
            >
              <div className="popup-test">hello nemanja poopup</div>
            </InfoWindow>
          )}
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
}

export default TranslationContainer;
