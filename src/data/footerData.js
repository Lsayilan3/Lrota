import logo from "@/images/resources/footer-logo.png";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Limitsiz Rota",
  about:
    "Gezi ve Tur Acentemize hoş geldiniz. Anlamlı bir deneyim sunmak için buradayız.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+09 532 604 37 30",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "kadirvarol_@hotmail.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "Yeni Mahalle Lale Caddesi Yavuz Kolukısa İş Merkezi No:37/15 50100",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    { id: 2, link: "#", title: "Community Blog" },
    { id: 3, link: "#", title: "Rewards" },
    { id: 4, link: "#", title: "Work with Us" },
    { id: 5, link: "#", title: "Meet the Team" },
  ],
  explore: [
    { id: 1, link: "#", title: "Account" },
    { id: 2, link: "#", title: "Legal" },
    { id: 3, link: "#", title: "Contact" },
    { id: 4, link: "#", title: "Affilitate Program" },
    { id: 5, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
