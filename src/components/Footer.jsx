import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.linkedin.com/in/shadab-ansari-6a86a7194/", icon: <FaLinkedin /> },
  { href: "https://www.instagram.com/shadabansari33366/", icon: <FaInstagram /> },
  { href: "https://www.facebook.com/sadab.afroz/", icon: <FaFacebook /> },
  { href: "https://x.com/ShadabAnsarii23?t=kjFOrTrK8n6VkfA7Gz0N1g&s=09", icon: <FaTwitter /> },
  { href: "https://github.com/Shadab126", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Shadab Ansari 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
