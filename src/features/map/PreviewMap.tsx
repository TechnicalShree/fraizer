import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { kentuckyGeoJson } from "../../assets/geoJsons/kentuckyGeoJson";
import { getPreviewStyle } from "../../utils/getGeoStyle";

type PreviewMapProps = {
  selectedCounty: string;
};

export default function PreviewMap({ selectedCounty }: PreviewMapProps) {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;

      // Disable touch-based zoom
      map.touchZoom.disable();

      // @ts-expect-error
      const geoJsonLayer = L.geoJson(kentuckyGeoJson, {
        style: (feature) => {
          return getPreviewStyle(feature?.properties.name === selectedCounty);
        },
      });
      geoJsonLayer.addTo(map);
      map.zoomControl.remove();
      map.attributionControl.remove();
    }
  }, [selectedCounty]);

  useEffect(() => {
    // @ts-expect-error
    if (!document.getElementById("map_preview")?._leaflet_id) {
      const map = L.map("map_preview", {
        center: [37.73, -85.54],
        zoom: 5.6,
        zoomSnap: 0.001,
        doubleClickZoom: false, // Disable zoom on double click
        tap: false, // Disable zoom on double tap
        scrollWheelZoom: false, // Disable zoom on scroll
        dragging: false, // Disable dragging
        touchZoom: false, // Disable zoom on pinch gestures
      });

      mapRef.current = map;
    }
  }, []);

  return (
    <div
      id="map_preview"
      style={{
        height: "180px",
        width: "300px",
        overflow: "hidden",
      }}
    ></div>
  );
}
