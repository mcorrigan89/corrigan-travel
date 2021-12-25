import React, { createContext, useState } from "react";
import { DestinationMapContainer } from "./DestinationMap.styles";
import { useDestinationMapController } from "./DestinationMap.controller";
import { Location } from "../../data/sitemap";
import { siteMap } from '../../data/sitemap';

interface IDestinationMapContext {
  currentLocation: Location | null;
  setLocation: (props: Location) => void;
}
export const DestinationMapContext = createContext<IDestinationMapContext>({
  currentLocation: null,
  setLocation: (props: Location) => {
    throw new Error("no context");
  },
});

export const DestinationMapProvider: React.FC<{}> = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState<Location | null>(siteMap.locations[0]);
  const setLocation = (props: Location) => {
    setCurrentLocation(props);
  };
  return (
    <DestinationMapContext.Provider value={{ currentLocation, setLocation }}>
      {children}
    </DestinationMapContext.Provider>
  );
};

export const DestinationMap: React.FC<{}> = () => {
  const { mapRef } = useDestinationMapController();
  return <DestinationMapContainer ref={mapRef} />;
};
