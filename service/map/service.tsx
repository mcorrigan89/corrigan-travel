import { Map, GeoJSONSourceOptions } from "mapbox-gl";
import { GeoJSON } from "geojson";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Location } from "../../data/sitemap";

const createData = (
  coords: Array<[number, number]>
): GeoJSON.FeatureCollection<GeoJSON.LineString> => ({
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        color: "red",
      },
      geometry: {
        type: "LineString",
        coordinates: coords,
      },
    },
  ],
});

export const useMapService = (
  initialLocation: Location | null,
  mapRef: React.RefObject<HTMLDivElement>
) => {
  const [map, setMap] = useState<Map>();

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }
    const mapContainer = new Map({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_KEY,
      container: mapRef.current,
      style: process.env.NEXT_PUBLIC_MAPBOX_STYLE,
      attributionControl: false,
      interactive: false,
      zoom: initialLocation?.mapProps.zoom,
      center: initialLocation?.mapProps.center,
    });
    setMap(mapContainer);

    return () => {
      mapContainer.remove();
    };
  }, [setMap, mapRef]);

  const addSource = (map: Map, location: Location) => {
    const source = map.getSource(location.slug);
    if (source) {
      map.flyTo({
        center: location.mapProps.center,
        zoom: location.mapProps.zoom,
        speed: location.mapProps.speed,
      });
      return;
    }
    map.addSource(location.slug, {
      type: "geojson",
      data: createData(location.travelLine?.coordinates ?? []),
    });
    map.addLayer({
      id: location.slug,
      type: "line",
      source: location.slug,
      layout: {
        "line-cap": "round",
        "line-join": "round",
      },
      paint: {
        "line-color": location.travelLine?.color ?? "red",
        "line-width": 4,
        "line-opacity": 0.6,
      },
    });
    map.flyTo({
      center: location.mapProps.center,
      zoom: location.mapProps.zoom,
      speed: location.mapProps.speed,
    });
  };

  const updateMap = (location: Location) => {
    if (map?.loaded()) {
      addSource(map, location);
    } else {
      map?.on("load", () => {
        addSource(map, location);
      });
    }
  };

  return { updateMap };
};
