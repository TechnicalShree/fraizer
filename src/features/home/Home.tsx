import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { kentuckyGeoJson } from "../../assets/geoJsons/kentuckyGeoJson";

export default function Home() {
  useEffect(() => {
    // @ts-expect-error
    if (!document.getElementById("map")?._leaflet_id) {
      const map = L.map("map").setView([37.75, -85.7], 8);

      // @ts-expect-error
      const geoJsonLayer = L.geoJson(kentuckyGeoJson, {
        style: {
          fillOpacity: 1,
          color: "#000",
          fillColor: "#fff",
        },
      });
      geoJsonLayer.addTo(map);
      map.zoomControl.remove();
      map.attributionControl.remove();
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    ></div>
  );
}
