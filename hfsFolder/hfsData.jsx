import iconBuilding from "./hfsIcons/iconBuilding.png";
import iconPhone from "./hfsIcons/iconPhone.png";
import iconEmail from "./hfsIcons/iconEmail.png";

// Combined array of objects for titles and page names.
export const tabsAndPages = [
  { title: "Home", page: "/home" },
  { title: "Member page", page: "/member" },
  { title: "Sports", page: "/sport" },
  { title: "Join us", page: "/join" },
  { title: "About us", page: "/about" },
];

// An object of objects, each containing a single key-value pair.
export const externalLinks = [
  { site: "Bet365", url: "https://www.bet365.com/" },
  { site: "Unibet", url: "https://www.unibet.se/" },
  { site: "WilliamHill", url: "https://www.williamhill.com/" },
];

export const presentation = [
  {
    dt: "Nullam porta sed orci id dictum. ",
    dd: "Aliquam sed lectus vel erat molestie sodales. Sed tempus orci dolor, at iaculis ligula imperdiet rutrum. ",
  },
  {
    dt: "Phasellus pharetra magna ac magna volutpat aliquet. ",
    dd: "Fusce hendrerit turpis eu tortor vehicula, ut gravida nulla tincidunt. Pellentesque finibus.",
  },
  {
    dt: " Sed ac ligula sapien. ",
    dd: "Nam euismod, felis in scelerisque laoreet, Pellentesque finibus augue mattis tincidunt volutpat.",
  },
];

export const copyright = `\u00A9 ${new Date().getFullYear()} Company. All rights reserved. `;

/* Alternatively, to using the unicode character for the copyright symbol, use the ampersand logogram as HTML entity for producing the copyright symbol.
  const copyright = "&copy;"; */

// For the sake of mapping a function over each member, the variable is structured as an array of objects.
export const contactInfo = [
  {
    type: "address",
    text: "123 Main St, Anytown, USA",
    icon: iconBuilding,
    alt: "An icon of a building",
  },
  {
    type: "phone",
    text: "+1 (123) 456-7890",
    icon: iconPhone,
    alt: "An icon of a phone",
  },
  {
    type: "email",
    text: "emailus@example.com",
    icon: iconEmail,
    alt: "An icon of an email envelope",
  },
];
