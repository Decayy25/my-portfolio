// import { ISocialMediaItem } from './../../../@types/UI';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const socialMediaData = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100081972251173&sk=directory_links&locale=id_ID",
    baseClass: `text-xl text-secondary w-8 h-8 rounded-full flex 
      justify-center items-center border transition duration-300`,
    hoverColor: "#1877F2",
    hoverBorder: "#1877F2",
    icon: FaFacebook,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/ashbatten.dev/",
    baseClass: `text-xl text-secondary w-8 h-8 rounded-full flex 
      justify-center items-center border transition duration-300`,
    hoverColor: "linear-gradient(45deg, #E4405F, #FD1D1D, #F77737)",
    hoverBorder: "#E4405F",
    isGradient: true,
    icon: FaInstagram,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/moch-rizqi-hermawan-a1b81b35b/",
    baseClass: `text-xl text-secondary w-8 h-8 rounded-full flex 
      justify-center items-center border transition duration-300`,
    hoverColor: "#0A66C2",
    hoverBorder: "#0A66C2",
    icon: FaLinkedin,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/Decayy25",
    baseClass: `text-xl text-secondary w-8 h-8 rounded-full flex 
      justify-center items-center border transition duration-300`,
    hoverColor: "#171515",
    hoverBorder: "#171515",
    icon: FaGithub,
  },
];

export default socialMediaData;
