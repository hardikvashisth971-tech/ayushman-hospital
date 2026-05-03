import { Button } from "@/components/ui/button";
import { HOSPITAL_INFO } from "@/data/sampleData";
import { Link, useLocation } from "@tanstack/react-router";
import { Calendar, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Doctors", to: "/doctors" },
  { label: "Appointments", to: "/appointments" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border shadow-card">
      {/* Top emergency bar */}
      <div className="bg-primary text-primary-foreground py-1.5 px-4 text-center text-sm font-medium">
        <Phone className="inline-block w-3.5 h-3.5 mr-1.5 -mt-0.5" />
        24/7 Emergency Helpline:{" "}
        <a
          href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
          className="font-bold underline underline-offset-2 hover:opacity-90"
          data-ocid="header.emergency_phone_link"
        >
          {HOSPITAL_INFO.emergencyPhone}
        </a>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 min-w-0"
            data-ocid="header.logo_link"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 2v16M2 10h16"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="text-primary-foreground"
                />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-foreground text-base">
                Ayushman
              </div>
              <div className="font-display font-semibold text-primary text-sm -mt-0.5">
                Hospital
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                location.pathname === link.to ||
                (link.to !== "/" && location.pathname.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={`header.nav_${link.label.toLowerCase()}_link`}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                    isActive
                      ? "text-primary bg-primary/8 font-semibold"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Emergency */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/appointments" data-ocid="header.book_appointment_button">
              <Button variant="default" size="sm" className="font-semibold">
                <Calendar className="w-4 h-4 mr-1.5" />
                Book Appointment
              </Button>
            </Link>
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
              data-ocid="header.emergency_button"
              className="btn-emergency flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              EMERGENCY
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-ocid="header.mobile_menu_toggle"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-card border-t border-border shadow-elevated"
          data-ocid="header.mobile_menu"
        >
          <nav className="px-4 py-3 space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const isActive =
                location.pathname === link.to ||
                (link.to !== "/" && location.pathname.startsWith(link.to));
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  data-ocid={`header.mobile_nav_${link.label.toLowerCase()}_link`}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-smooth ${
                    isActive
                      ? "text-primary bg-primary/8 font-semibold"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-2 flex flex-col gap-2">
              <Link
                to="/appointments"
                onClick={() => setMenuOpen(false)}
                data-ocid="header.mobile_book_button"
              >
                <Button
                  variant="default"
                  size="sm"
                  className="w-full font-semibold"
                >
                  <Calendar className="w-4 h-4 mr-1.5" />
                  Book Appointment
                </Button>
              </Link>
              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                className="btn-emergency flex items-center justify-center gap-2 text-sm w-full"
                data-ocid="header.mobile_emergency_button"
              >
                <Phone className="w-4 h-4" />
                EMERGENCY: {HOSPITAL_INFO.emergencyPhone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
