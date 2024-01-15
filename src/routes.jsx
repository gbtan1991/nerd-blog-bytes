import {
  RiHomeLine,
  RiTerminalWindowLine,
  RiUser6Line,
  RiPhoneLine,
} from "react-icons/ri";

export const routes = [
  {
    id: 1,
    urlName: "Home",
    url: "/",
    icon: <RiHomeLine />,
  },
  {
    id: 2,
    urlName: "Blogs",
    url: "/blogs",
    icon: <RiTerminalWindowLine />,
  },
  {
    id: 3,
    urlName: "About",
    url: "/about",
    icon: <RiUser6Line />,
  },
  {
    id: 4,
    urlName: "Contact",
    url: "/contact",
    icon: <RiPhoneLine />,
  },


];
