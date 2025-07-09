export type TUserData = {
  daysInHeatMap: number;
  city: string;
  country: string;
  portfolio: string;
  fullname: string;
  footer: {
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  };
  meta: {
    title: string;
    description: string;
  };
};

export const userData: TUserData = {
  daysInHeatMap: 365, // Number of days to show in heatmap (recommended 365 days = 1 year)
  city: "City",
  country: "Country",
  portfolio: "johndoe.dev",
  fullname: "John Doe",
  footer: {
    title: "Real programmers count from 0",
    links: [
      {
        label: "Blogs",
        href: "https://blog.johndoe.dev",
      },
      {
        label: "Contact",
        href: "mailto:hey@johndoe.dev",
      },
      {
        label: "Portfolio",
        href: "https://johndoe.dev",
      },
      {
        label: "Github",
        href: "https://github.com/johndoe",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/john",
      },
      // {
      //   label: "More links",
      //   href: "#",
      // },
    ],
  },
  meta: {
    title: "John Logs for fun",
    description: "Tracking my journey",
  },
};
