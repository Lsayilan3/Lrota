import logo from "@/images/resources/limitsizRota1.jpg";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Anasayfa",
    href: "/",
    subNavItems: [],
  },
  {
    id: 2,
    name: "Varış Noktaları",
    href: "/destinations",
    subNavItems: [],
  },
  {
    id: 3,
    name: "Turlar",
    href: "/tours",
    subNavItems: [],
  },
  {
    id: 4,
    name: "Sayfalar",
    href: "/about",
    subNavItems: [],
  },
  {
    id: 5,
    name: "Haberler",
    href: "/news",
    subNavItems: [],
  },
  {
    id: 6,
    name: "İletişim",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+09 532 604 37 30",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "kadirvarol_@hotmail.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
