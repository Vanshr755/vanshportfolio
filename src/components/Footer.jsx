import { profile } from "../data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        {/* <SocialLinks /> */}
      </div>
    </footer>
  );
}
