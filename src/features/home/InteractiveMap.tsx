import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { kentuckyGeoJson } from "../../assets/geoJsons/kentuckyGeoJson";
import { useAppContext } from "../../contexts/AppContext";
import {
  openCountyDetailModal,
  setCounty,
} from "../../contexts/actions/actions";

export default function InteractiveMap() {
  const { dispatch } = useAppContext();

  useEffect(() => {
    // @ts-expect-error
    if (!document.getElementById("map")?._leaflet_id && Boolean(dispatch)) {
      const map = L.map("map", {
        center: [37.75, -85.7],
        zoom: 7,
        doubleClickZoom: false, // Disable zoom on double click
        tap: false, // Disable zoom on double tap
        scrollWheelZoom: false, // Disable zoom on scroll
        dragging: false, // Disable dragging
        touchZoom: false, // Disable zoom on pinch gestures
      });

      // Disable touch-based zoom
      map.touchZoom.disable();

      // @ts-expect-error
      const geoJsonLayer = L.geoJson(kentuckyGeoJson, {
        style: {
          weight: 1,
          fillOpacity: 1,
          color: "#ccc",
          fillColor: "#6a6a6a",
        },
        onEachFeature: function (feature, layer) {
          layer.on({
            click: function (event) {
              const layer = event.target;

              dispatch(
                setCounty({
                  name: layer?.feature?.properties?.name ?? "",
                  id: layer?.feature?.properties?.id ?? "",
                })
              );

              dispatch(openCountyDetailModal());

              layer.setStyle({
                fillOpacity: 1,
                fillColor: "#c1c1c1",
              });

              layer.bringToFront();
            },
          });
        },
      });
      geoJsonLayer.addTo(map);
      map.zoomControl.remove();
      map.attributionControl.remove();
    }
  }, [dispatch]);

  return (
    <div
      id="map"
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    ></div>
  );
}
