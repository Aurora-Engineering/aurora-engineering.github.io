import Link from "next/link";
import MobileMenu from "./mobile-menu";

const navigationLinks = [
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/#services", label: "Services" },
  { href: "/#products", label: "Products" },
  { href: "/#news", label: "News" },
];

export default function SiteHeader() {
  return (
    <header className="site-header shared-site-header">
      <Link className="logo-panel site-logo" href="/#top" aria-label="Aurora Engineering home">
        <img src="/aurora-logo.png" alt="Aurora Engineering" />
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigationLinks.map((link) => (
          <Link href={link.href} key={link.href}>{link.label}</Link>
        ))}
      </nav>
      <MobileMenu links={[...navigationLinks, { href: "/#contact", label: "Contact" }]} />
      <Link className="header-cta" href="/#contact">Contact us <span aria-hidden="true">↗</span></Link>
    </header>
  );
}
