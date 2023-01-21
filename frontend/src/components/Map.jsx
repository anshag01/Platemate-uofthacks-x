import { useState, useCallback } from "react"
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api"

const containerStyle = {
  width: "100vw",
  height: "100vh",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "-1",
}

const center = {
  lat: 43.66336,
  lng: -79.4001408,
}

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBafwgKGnLCerwKxmHSlVRrQRbiSq4HM1s",
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    // map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : (
    <div className="">loading</div>
  )
}

export default MyComponent
