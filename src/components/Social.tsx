import Link from "next/link";
import { FC } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/TarekSaeed95" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/tarek-saeeed/" },
  { icon: <FaTwitter />, path: "https://x.com/fa5r_eldeen" },
  { icon: <FaWhatsapp />, path: "https://wa.link/kopbz3" },
];
type SocialPropsTypes = {
  containerStyles: string;
  iconStyles: string;
};
const Social: FC<SocialPropsTypes> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
