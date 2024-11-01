import ContactUs from "@/components/landing-page/ContactUs";
import About from "@/components/landing-page/About";
import Gallery from "@/components/landing-page/Gallery";
import Happenings from "@/components/landing-page/Happenings";
import Home from "@/components/landing-page/Home";
import { Theme } from "@/contexts/theme-provider";
import { Facebook, Monitor, MoonIcon, SunIcon, Twitter } from "lucide-react";


type navItemProps = {
    title: string
    ref: string
}

type themeProps = {
  title: Theme;
  icon: JSX.Element;
};

type mainPageContentProps = {
  id: string
  section: JSX.Element
}

const navTitles = {
  home: "home",
  about: "about",
  gallery: "gallery",
  happenings: "happenings",
  contact: "contact"

}

const navItems: navItemProps[] = [
    {
      title: "Home",
      ref: navTitles.home
    },
    {
      title: "Know Us",
      ref: navTitles.about
    },
    {
      title: "Our Gallery",
      ref: navTitles.gallery
    },
    {
      title: "Happenings",
      ref: navTitles.happenings
    },
    {
      title: "Contact",
      ref: navTitles.contact
    },
  ]

  const mainPagecontent: mainPageContentProps[] = [
    {
      id: navTitles.home,
      section: <Home/>
    },
    {
      id: navTitles.about,
      section: <About/>
    },
    {
      id: navTitles.gallery,
      section: <Gallery/>
    },
    {
      id: navTitles.happenings,
      section: <Happenings/>
    },
    {
      id: navTitles.contact,
      section: <ContactUs/>
    }
  ]

  const socialMediaIcons = [
    {
      icon: <Twitter size={20} />,
      link: "https:x.com",
    },
    {
      icon: <Facebook size={20} />,
      link: "https:facebook.com",
    },
  ];

  const themeIcons: themeProps[] = [
    {
      title: "light",
      icon: <SunIcon />,
    },
    {
      title: "dark",
      icon: <MoonIcon />,
    },
    {
      title: "system",
      icon: <Monitor />,
    },
  ];

export {navTitles, navItems, mainPagecontent, socialMediaIcons, themeIcons}