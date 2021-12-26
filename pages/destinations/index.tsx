import { NextPage } from "next";
import styled from "styled-components";
import { siteMap } from "../../data/sitemap";
import {
  DestinationMapProvider,
  DestinationMap,
} from "../../components/DestinationMap";
import { DestinationPage } from "../../components/DestinationPage";
import { useState } from "react";

const DestinationWrapper = styled.div`
  display: flex;
`;

const DestinationPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Destinations: NextPage = () => {
  const [activePage, setActivePage] = useState<string>('');
  const isElementOnScreen = (id: string) => {
    const element = document.getElementById(id);
    const bounds = element ? element.getBoundingClientRect() : null;
    return bounds ? bounds.top < window.innerHeight - 240 && bounds.bottom > 240 : false;
  }

  globalThis.onscroll = () => {
    for (const location of siteMap.locations) {
      if (isElementOnScreen(location.slug)) {
        setActivePage(location.slug);
        break;
      }
    }
  };

  return (
    <DestinationMapProvider>
      <DestinationWrapper>
        <DestinationPageWrapper>
          {siteMap.locations.map((location) => (
            <DestinationPage key={location.slug} active={activePage === location.slug} location={location} />
          ))}
        </DestinationPageWrapper>
        <DestinationMap />
      </DestinationWrapper>
    </DestinationMapProvider>
  );
};

export default Destinations;
