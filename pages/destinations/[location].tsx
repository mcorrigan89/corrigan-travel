import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { siteMap } from "../../data/sitemap";

const Location: NextPage = () => {
  const router = useRouter();
  const { location } = router.query;

  return <div>Location: {location}</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = siteMap.locations.map(({ slug }) => ({
    params: { location: slug },
  }));
  return { paths, fallback: false };
};

export default Location;
