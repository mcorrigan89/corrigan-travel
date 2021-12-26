import React, { useEffect, useRef } from "react";
import { useDestinationPageController } from "./DestinationPage.controller";
import {
  DestinationPageWrapper,
  DestinationPageTitle,
  DestinationPageLink,
  DestinationPageText,
} from "./DestinationPage.styled";
import { Location } from "../../data/sitemap";
import Link from "next/link";

interface DestinationPageProps {
  active: boolean;
  location: Location;
}

export const DestinationPage: React.FC<DestinationPageProps> = ({
  active,
  location,
}) => {
  const pageRef = useRef<HTMLDivElement>(null);
  const { setLocation } = useDestinationPageController();
  useEffect(() => {
    if (active) {
      setLocation(location);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
  return (
    <DestinationPageWrapper
      id={location.slug}
      ref={pageRef}
      onClick={() => setLocation(location)}
    >
      <DestinationPageTitle>{location.title}</DestinationPageTitle>
      {location.text ? (
        <>
          <DestinationPageText>{location.text}</DestinationPageText>
          <DestinationPageText>{location.text}</DestinationPageText>
          <DestinationPageText>{location.text}</DestinationPageText>
          <DestinationPageText>{location.text}</DestinationPageText>
        </>
      ) : null}
      <Link href={`/destinations/${location.slug}`} passHref>
        <DestinationPageLink>More...</DestinationPageLink>
      </Link>
    </DestinationPageWrapper>
  );
};
