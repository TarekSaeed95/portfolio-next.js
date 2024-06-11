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
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaTwitter />, path: "" },
  { icon: <FaWhatsapp />, path: "" },
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
