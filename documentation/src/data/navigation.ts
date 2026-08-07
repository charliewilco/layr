export interface NavigationPage {
  name: string;
  href: string;
}

export const pages: NavigationPage[] = [
  {
    name: "Settings",
    href: "/settings",
  },
  {
    name: "Generic",
    href: "/generic",
  },
  {
    name: "Elements",
    href: "/elements",
  },
  {
    name: "Objects",
    href: "/objects",
  },
  {
    name: "Components",
    href: "/components",
  },
  {
    name: "Utilities",
    href: "/utilities",
  },
  {
    name: "PostCSS Plugins",
    href: "/postcss",
  },
];

export const subpages: NavigationPage[] = [
  {
    name: "Usage",
    href: "/usage",
  },
  {
    name: "Styleguide",
    href: "/styleguide",
  },
  {
    name: "Naming Classes",
    href: "/naming-classes",
  },
  {
    name: "ITCSS",
    href: "/itcss",
  },
  {
    name: "CSS for Everyone",
    href: "/css-for-everyone",
  },
];
