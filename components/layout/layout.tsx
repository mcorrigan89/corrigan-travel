import React from "react";
import { PageWrapper } from "./Layout.styles";
import { Header, HeaderProps } from "../Header";

interface LayoutProps {
  header: HeaderProps;
}

export const Layout: React.FC<LayoutProps> = ({ header, children }) => {
  return (
    <>
      <Header {...header} />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
};
