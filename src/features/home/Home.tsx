import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { kentuckyGeoJson } from "../../assets/geoJsons/kentuckyGeoJson";

export default function Home() {
  useEffect(() => {
    // @ts-expect-error
    if (!document.getElementById("map")?._leaflet_id) {
      const map = L.map("map").setView([37.75, -85.7], 8);
      const layer = L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
        }
      );
      map.addLayer(layer);

      // @ts-expect-error
      const geoJsonLayer = L.geoJson(kentuckyGeoJson, {
        style: {
          fillOpacity: 0.7,
          color: "green",
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
