import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch
} from "react-icons/fa";
import {
  HiHome,
  HiUserGroup,
  HiFolder,
  HiCalendar,
  HiDocument
} from "react-icons/hi";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <HiHome />
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <HiUserGroup />
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <HiFolder />
  },
  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <HiCalendar />
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <HiDocument />
  }
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <FaSketch />
  }
];
