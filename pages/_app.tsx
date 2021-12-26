import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { theme } from "../styles/theme";
import { Layout } from "../components/Layout";
import { siteMap } from "../data/sitemap";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={process.env.NEXT_PUBLIC_FONT_URL} />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout header={{ title: siteMap.title, navigationItems: siteMap.pages }}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
