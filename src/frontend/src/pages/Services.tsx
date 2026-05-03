import { DepartmentIcon } from "@/components/DepartmentIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DEPARTMENTS } from "@/data/sampleData";
import { Link } from "@tanstack/react-router";
import { Activity, ChevronRight, Search } from "lucide-react";
import { useState } from "react";

export function Services() {
  const [query, setQuery] = useState("");

  const filtered = DEPARTMENTS.filter(
    (d) =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div data-ocid="services.page">
      {/* Hero section */}
      <section
        className="relative overflow-hidden bg-card border-b border-border"
        data-ocid="services.hero_section"
      >
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Breadcrumb */}
          <nav
            className="flex items-center text-sm text-muted-foreground mb-6"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-primary transition-smooth">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5" />
            <span className="text-foreground font-medium">
              Our Medical Services
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-5">
                <Activity className="w-4 h-4" />
                Multi-Specialty Excellence
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
                Our Medical
                <span className="block text-primary">Services</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Comprehensive, compassionate healthcare across all major
                specialties — delivered by expert physicians with cutting-edge
                technology at Ayushman Hospital.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 lg:gap-8 flex-shrink-0">
              {[
                { label: "Specialties", value: "6+" },
                { label: "Expert Doctors", value: "40+" },
                { label: "Years of Care", value: "26+" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search / filter bar */}
      <section
        className="bg-muted/40 border-b border-border py-5"
        data-ocid="services.filter_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input
                className="pl-9"
                placeholder="Search departments or treatments…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                data-ocid="services.search_input"
              />
            </div>
            {query && (
              <Badge variant="secondary" className="shrink-0">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Department grid */}
      <section
        className="bg-background py-14"
        data-ocid="services.departments_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div
              className="text-center py-20 text-muted-foreground"
              data-ocid="services.empty_state"
            >
              <Search className="w-10 h-10 mx-auto mb-4 opacity-40" />
              <p className="text-lg font-medium">
                No departments match "{query}"
              </p>
              <p className="text-sm mt-1">Try a different search term</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((dept, i) => (
                <Card
                  key={dept.id}
                  className="medical-card flex flex-col group"
                  data-ocid={`services.dept_card.${i + 1}`}
                >
                  <CardContent className="p-6 flex flex-col flex-1">
                    {/* Icon + Name */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-smooth">
                        <DepartmentIcon
                          name={dept.iconName}
                          className="w-7 h-7 text-primary"
                        />
                      </div>
                      <div>
                        <h2 className="font-display font-semibold text-foreground text-xl leading-tight">
                          {dept.name}
                        </h2>
                        <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                          {dept.description}
                        </p>
                      </div>
                    </div>

                    {/* Key Treatments */}
                    <div className="mb-5 flex-1">
                      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                        Key Treatments
                      </h3>
                      <ul className="space-y-1.5">
                        {dept.keyTreatments.map((t) => (
                          <li
                            key={t}
                            className="text-sm text-foreground flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* View Details Button */}
                    <Link
                      to="/services/$id"
                      params={{ id: String(dept.id) }}
                      data-ocid={`services.view_details_button.${i + 1}`}
                    >
                      <Button className="w-full font-medium" size="sm">
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="bg-primary py-14" data-ocid="services.cta_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">
            Not sure which department you need?
          </h2>
          <p className="text-primary-foreground/80 mb-7 max-w-xl mx-auto">
            Our General Medicine physicians serve as your entry point — they
            assess your condition and refer you to the right specialist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/appointments" data-ocid="services.book_cta_button">
              <Button variant="secondary" size="lg" className="font-semibold">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/contact" data-ocid="services.contact_cta_button">
              <Button
                variant="outline"
                size="lg"
                className="font-semibold border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
