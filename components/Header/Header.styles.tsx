import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
`;

export const HeaderContainer = styled.nav`
  padding: 32px 0 32px 0;
  margin: 0 128px 0 128px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.div`
  font-family: ${props => props.theme.fonts.serif};
  font-style: italic;
  font-size: 3rem;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const NavigationItem = styled.a`
  padding: 0 16px 0 16px;
  line-height: 3;
`;
