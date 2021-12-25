import React from "react";
import Link from "next/link";

import {
  HeaderContainer,
  HeaderTitle,
  NavigationWrapper,
  NavigationItem,
} from "./header.styles";

export interface HeaderProps {
  title: string;
  navigationItems: Array<{
    title: string;
    page: string;
  }>;
}

export const Header: React.FC<HeaderProps> = ({ title, navigationItems }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <NavigationWrapper>
        {navigationItems.map(({ title, page }) => (
          <Link key={page} href={`/${page}`} passHref>
            <NavigationItem>{title}</NavigationItem>
          </Link>
        ))}
      </NavigationWrapper>
    </HeaderContainer>
  );
};
