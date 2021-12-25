import { useContext } from "react";
import { DestinationMapContext } from "../DestinationMap";

export const useDestinationPageController = () => {
  const { setLocation } = useContext(DestinationMapContext);
  return {
    setLocation,
  };
};
