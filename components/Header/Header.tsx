import React from "react";
import Link from "next/link";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderTitle,
  NavigationWrapper,
  NavigationItem,
} from "./Header.styles";

export interface HeaderProps {
  title: string;
  navigationItems: Array<{
    title: string;
    page: string;
  }>;
}

export const Header: React.FC<HeaderProps> = ({ title, navigationItems }) => {
  return (
    <HeaderWrapper>
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
    </HeaderWrapper>
  );
};
