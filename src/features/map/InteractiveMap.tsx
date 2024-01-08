import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { kentuckyGeoJson } from "../../assets/geoJsons/kentuckyGeoJson";
import { useAppContext } from "../../contexts/AppContext";
import {
  openCountyDetailModal,
  setCounty,
} from "../../contexts/actions/actions";
import { getStyle } from "../../utils/getGeoStyle";

export default function InteractiveMap() {
  const { state, dispatch } = useAppContext();
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !state.countyDetailsModal.isOpen) {
      const map = mapRef.current;

      // Disable touch-based zoom
      map.touchZoom.disable();

      // @ts-expect-error
      const geoJsonLayer = L.geoJson(kentuckyGeoJson, {
        style: (feature) => {
          return getStyle(
            feature?.properties.name || "",
            state.tagFilter.appliedCounties
          );
        },
        onEachFeature: function (_, layer) {
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
  }, [
    dispatch,
    state.tagFilter.appliedCounties,
    state.countyDetailsModal.isOpen,
  ]);

  useEffect(() => {
    // @ts-expect-error
    if (!document.getElementById("map")?._leaflet_id && Boolean(dispatch)) {
      const map = L.map("map", {
        center: [38.2, -85.45],
        zoom: 7.65,
        zoomSnap: 0.001,
        doubleClickZoom: false, // Disable zoom on double click
        tap: false, // Disable zoom on double tap
        scrollWheelZoom: false, // Disable zoom on scroll
        dragging: false, // Disable dragging
        touchZoom: false, // Disable zoom on pinch gestures
      });

      mapRef.current = map;
    }
  }, [dispatch]);

  return (
    <div
      id="map"
      style={{
        height: "640px",
        width: "100%",
        overflow: "hidden",
      }}
    ></div>
  );
}
