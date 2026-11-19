import { Outlet } from "react-router-dom";
import NavbarMenuPill from "@/components/navbars/NavbarMenuPill";
import FooterWordmarkLanding from "@/components/sections/footer/FooterWordmarkLanding";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="filled" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarMenuPill
          brand="Ana Oliveira"
          navItems={[
            {
              name: "About",
              href: "#about"
            },
            {
              name: "Services",
              href: "#services"
            },
            {
              name: "Gallery",
              href: "#gallery"
            },
            {
              name: "Reviews",
              href: "#testimonial"
            },
            {
              name: "Contact",
              href: "#contact"
            }
          ]}
          contact={{
            text: "(267) 680-6578",
            href: "tel:267) 680-6578"
          }}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="filled" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer" className="relative z-[45]">
        <FooterWordmarkLanding
          brand="Ana Oliveira Dressmaker"
          links={[
            {
              text: "Privacy Policy",
              href: "#"
            },
            {
              text: "Terms of Service",
              href: "#"
            }
          ]}
          tagline="Expert tailoring and bespoke dressmaking in Philadelphia."
          copyright="© 2026 Ana Oliveira Dressmaker. All rights reserved."
        />
      </footer>
    </div>
  );
}
