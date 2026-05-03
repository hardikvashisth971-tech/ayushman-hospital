import { r as reactExports, b as DEPARTMENTS, j as jsxRuntimeExports, L as Link, B as Button } from "./index-DKO4PK6f.js";
import { D as DepartmentIcon } from "./DepartmentIcon-94X-T7VI.js";
import { B as Badge, C as Card, a as CardContent } from "./card-Cy1HM19A.js";
import { I as Input } from "./input-B8grHCrY.js";
import { C as ChevronRight } from "./chevron-right-DGpJCicl.js";
import { A as Activity } from "./activity-DJEDieWO.js";
import { S as Search } from "./search-BA-nurvH.js";
import "./stethoscope-BMMZ70o2.js";
function Services() {
  const [query, setQuery] = reactExports.useState("");
  const filtered = DEPARTMENTS.filter(
    (d) => d.name.toLowerCase().includes(query.toLowerCase()) || d.description.toLowerCase().includes(query.toLowerCase())
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "services.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden bg-card border-b border-border",
        "data-ocid": "services.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-[0.03] pointer-events-none",
              style: {
                backgroundImage: "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 50%)",
                backgroundSize: "24px 24px"
              },
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "nav",
              {
                className: "flex items-center text-sm text-muted-foreground mb-6",
                "aria-label": "Breadcrumb",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary transition-smooth", children: "Home" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5 mx-1.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Our Medical Services" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-4 h-4" }),
                  "Multi-Specialty Excellence"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4", children: [
                  "Our Medical",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary", children: "Services" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "Comprehensive, compassionate healthcare across all major specialties — delivered by expert physicians with cutting-edge technology at Ayushman Hospital." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 lg:gap-8 flex-shrink-0", children: [
                { label: "Specialties", value: "6+" },
                { label: "Expert Doctors", value: "40+" },
                { label: "Years of Care", value: "26+" }
              ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold text-primary", children: s.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.label })
              ] }, s.label)) })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-muted/40 border-b border-border py-5",
        "data-ocid": "services.filter_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 w-full max-w-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                className: "pl-9",
                placeholder: "Search departments or treatments…",
                value: query,
                onChange: (e) => setQuery(e.target.value),
                "data-ocid": "services.search_input"
              }
            )
          ] }),
          query && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "shrink-0", children: [
            filtered.length,
            " result",
            filtered.length !== 1 ? "s" : ""
          ] })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "bg-background py-14",
        "data-ocid": "services.departments_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center py-20 text-muted-foreground",
            "data-ocid": "services.empty_state",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-10 h-10 mx-auto mb-4 opacity-40" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-medium", children: [
                'No departments match "',
                query,
                '"'
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Try a different search term" })
            ]
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filtered.map((dept, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "medical-card flex flex-col group",
            "data-ocid": `services.dept_card.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-smooth", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  DepartmentIcon,
                  {
                    name: dept.iconName,
                    className: "w-7 h-7 text-primary"
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-xl leading-tight", children: dept.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mt-1 leading-relaxed", children: dept.description })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3", children: "Key Treatments" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: dept.keyTreatments.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "text-sm text-foreground flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" }),
                      t
                    ]
                  },
                  t
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/services/$id",
                  params: { id: String(dept.id) },
                  "data-ocid": `services.view_details_button.${i + 1}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "w-full font-medium", size: "sm", children: [
                    "View Details",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 ml-1" })
                  ] })
                }
              )
            ] })
          },
          dept.id
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-14", "data-ocid": "services.cta_section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-3", children: "Not sure which department you need?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/80 mb-7 max-w-xl mx-auto", children: "Our General Medicine physicians serve as your entry point — they assess your condition and refer you to the right specialist." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/appointments", "data-ocid": "services.book_cta_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "secondary", size: "lg", className: "font-semibold", children: "Book a Consultation" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", "data-ocid": "services.contact_cta_button", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            size: "lg",
            className: "font-semibold border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10",
            children: "Contact Us"
          }
        ) })
      ] })
    ] }) })
  ] });
}
export {
  Services
};
