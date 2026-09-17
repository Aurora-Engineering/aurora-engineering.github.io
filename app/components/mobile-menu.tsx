"use client";

import { useRef } from "react";

type MobileMenuLink = {
  href: string;
  label: string;
};

export default function MobileMenu({ links }: { links: MobileMenuLink[] }) {
  const menu = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }

  return (
    <details className="mobile-menu" ref={menu} onKeyDown={(event) => {
      if (event.key === "Escape") {
        closeMenu();
        menu.current?.querySelector("summary")?.focus();
      }
    }}>
      <summary>Menu <span aria-hidden="true">+</span></summary>
      <nav aria-label="Mobile navigation">
        {links.map((link) => <a href={link.href} key={`${link.href}-${link.label}`} onClick={closeMenu}>{link.label}</a>)}
      </nav>
    </details>
  );
}
