import { socials } from "../data/portfolio";
import { linkProps } from "../utils/links";

export default function SocialLinks() {
  return (
    <div className="socials">
      {socials.filter((s) => s.label !== "Email").map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} {...linkProps(href)} aria-label={label} className="social">
          <Icon />
        </a>
      ))}
    </div>
  );
}
