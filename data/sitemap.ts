interface Page {
  title: string;
  page: string;
}

interface Location {
    slug: string;
}

interface SiteMap {
  title: string;
  pages: Array<Page>;
  locations: Array<Location>;
}

export const siteMap: SiteMap = {
  title: "Corrigan Travel",
  pages: [
    { title: 'Home', page: '' },
    { title: 'Destinations', page: 'destinations' },
    { title: "Photos", page: "photos" },
    { title: "Blog", page: "blog" },
  ],
  locations: [
    { slug: 'san-francisco' },
    { slug: 'london' }
  ]
};
