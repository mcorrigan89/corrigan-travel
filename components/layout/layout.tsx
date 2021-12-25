import React from "react";
import { PageWrapper } from "./layout.styles";
import { Header, HeaderProps } from "../header";

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
