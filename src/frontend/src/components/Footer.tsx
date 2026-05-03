import { DEPARTMENTS, HOSPITAL_INFO } from "@/data/sampleData";
import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-card border-t border-border" aria-label="Site footer">
      {/* Emergency banner */}
      <div className="bg-destructive text-destructive-foreground py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span className="font-semibold text-lg">
              24/7 EMERGENCY HOTLINE
            </span>
          </div>
          <a
            href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
            className="text-2xl font-bold tracking-wide hover:opacity-90 transition-smooth"
            data-ocid="footer.emergency_phone_link"
          >
            {HOSPITAL_INFO.emergencyPhone}
          </a>
        </div>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Hospital info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
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
                <div className="font-display font-bold text-foreground">
                  Ayushman
                </div>
                <div className="font-display font-semibold text-primary text-sm">
                  Hospital
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Compassionate care, advanced medicine. Dedicated to your complete
              well-being since {HOSPITAL_INFO.establishedYear}.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  {HOSPITAL_INFO.address}, {HOSPITAL_INFO.city},{" "}
                  {HOSPITAL_INFO.state} – {HOSPITAL_INFO.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a
                  href={`tel:${HOSPITAL_INFO.phone}`}
                  className="hover:text-primary transition-smooth"
                >
                  {HOSPITAL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a
                  href={`mailto:${HOSPITAL_INFO.email}`}
                  className="hover:text-primary transition-smooth"
                >
                  {HOSPITAL_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Medical Services
            </h3>
            <ul className="space-y-2">
              {DEPARTMENTS.map((dept) => (
                <li key={dept.id}>
                  <Link
                    to="/services/$id"
                    params={{ id: String(dept.id) }}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    data-ocid={`footer.dept_${dept.id}_link`}
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Find a Doctor", to: "/doctors" },
                { label: "Book Appointment", to: "/appointments" },
                { label: "Emergency Care", to: "/contact" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                    data-ocid={`footer.${link.label.toLowerCase().replace(/ /g, "_")}_link`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              <Clock className="inline-block w-4 h-4 mr-1.5 -mt-0.5 text-primary" />
              Working Hours
            </h3>
            <ul className="space-y-2">
              {HOSPITAL_INFO.workingHours.map((wh) => (
                <li key={wh.day} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{wh.day}</span>
                  <span className="text-foreground font-medium">
                    {wh.day === "Emergency"
                      ? "24 / 7"
                      : `${wh.openTime} – ${wh.closeTime}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <span>© {year} Ayushman Hospital. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
