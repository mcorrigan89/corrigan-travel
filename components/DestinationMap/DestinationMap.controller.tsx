import { Map, GeoJSONSourceOptions } from "mapbox-gl";
import { GeoJSON } from "geojson";
import { useContext, useEffect, useRef, useState } from "react";
import { DestinationMapContext } from ".";
import { useMapService } from "../../service/map/service";

export const useDestinationMapController = () => {
  const { currentLocation } = useContext(DestinationMapContext);
  const mapRef = useRef<HTMLDivElement>(null);
  const { updateMap } = useMapService(currentLocation, mapRef);

  useEffect(() => {
    if (currentLocation) {
      updateMap(currentLocation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  return { mapRef };
};
