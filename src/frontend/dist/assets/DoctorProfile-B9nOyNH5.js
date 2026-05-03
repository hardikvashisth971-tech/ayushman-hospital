import { c as createLucideIcon, u as useParams, D as DOCTORS, j as jsxRuntimeExports, L as Link, B as Button, b as DEPARTMENTS, C as Clock, d as Calendar } from "./index-DKO4PK6f.js";
import { B as Badge, C as Card, b as CardHeader, a as CardContent } from "./card-Cy1HM19A.js";
import { S as Separator } from "./separator-C1hhmjMd.js";
import { S as Stethoscope } from "./stethoscope-BMMZ70o2.js";
import { C as ChevronRight } from "./chevron-right-DGpJCicl.js";
import { A as Award } from "./award-CiraodkM.js";
import "./index-PS5BhIdd.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M6 3h12", key: "ggurg9" }],
  ["path", { d: "M6 8h12", key: "6g4wlu" }],
  ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
  ["path", { d: "M6 13h3", key: "wdp6ag" }],
  ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }]
];
const IndianRupee = createLucideIcon("indian-rupee", __iconNode);
const EDUCATIONS = {
  1: [
    "BDS – Rajasthan Dental College, Jaipur (2004)",
    "MDS (Prosthodontics) – Government Dental College, Jaipur (2008)",
    "Fellowship in Implantology – ICOI, USA (2012)"
  ],
  2: [
    "MBBS – SMS Medical College, Jaipur (2001)",
    "MD (Anesthesiology) – AIIMS New Delhi (2005)",
    "Fellowship in Pediatric Anesthesia – PGIMER Chandigarh (2007)"
  ],
  3: [
    "MBBS – Sawai Man Singh Medical College, Jaipur (2006)",
    "DLO – SMS Medical College (2009)",
    "MS (ENT) – AIIMS Delhi (2013)"
  ],
  4: [
    "MBBS – Mahatma Gandhi Medical College, Jaipur (2008)",
    "MD (General Medicine) – SMS Medical College (2013)",
    "Fellowship in Diabetology – RSSDI (2015)"
  ],
  5: [
    "MBBS – Jawaharlal Nehru Medical College (2002)",
    "MD (Internal Medicine) – Grant Medical College, Mumbai (2006)",
    "DM (Cardiology) – SGPGI Lucknow (2010)",
    "FESC – Fellow of European Society of Cardiology (2014)"
  ],
  6: [
    "MBBS – RNT Medical College, Udaipur (2000)",
    "MS (Orthopedics) – SMS Medical College (2004)",
    "DNB (Orthopedics) – National Board (2005)",
    "Fellowship in Joint Replacement – Germany (2008)"
  ]
};
const SPECIALIZATIONS = {
  1: [
    "Dental Implants & Crown Prosthetics",
    "Full-Mouth Rehabilitation",
    "Fixed & Removable Dentures",
    "Smile Designing",
    "Laser Dentistry"
  ],
  2: [
    "General & Regional Anesthesia",
    "Pediatric Anesthesia",
    "Epidural & Spinal Blocks",
    "ICU Pain Management",
    "Sedation Techniques"
  ],
  3: [
    "Endoscopic Sinus Surgery (FESS)",
    "Cochlear Implantation",
    "Tonsillectomy & Adenoidectomy",
    "Septoplasty",
    "Hearing Assessment & Rehabilitation"
  ],
  4: [
    "Diabetes & Metabolic Disorders",
    "Hypertension Management",
    "Infectious Diseases",
    "Thyroid & Endocrine Disorders",
    "Preventive & Lifestyle Medicine"
  ],
  5: [
    "Coronary Angiography & Angioplasty",
    "Structural Heart Disease",
    "Pacemaker & ICD Implantation",
    "Heart Failure Management",
    "Echocardiography"
  ],
  6: [
    "Total Hip & Knee Replacement",
    "Minimally Invasive Joint Surgery",
    "Arthroscopy & Sports Medicine",
    "Complex Fracture Management",
    "Spine Surgery"
  ]
};
function DoctorProfile() {
  const { id } = useParams({ from: "/doctors/$id" });
  const doc = DOCTORS.find((d) => d.id === Number(id));
  if (!doc) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-7xl mx-auto px-4 py-24 text-center",
        "data-ocid": "doctor_profile.not_found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-12 h-12 text-muted-foreground mx-auto mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-3", children: "Doctor not found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6", children: "The doctor you are looking for does not exist or may have moved." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/doctors", "data-ocid": "doctor_profile.back_link", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", children: "Back to Doctors" }) })
        ]
      }
    );
  }
  const dept = DEPARTMENTS.find((d) => d.id === doc.departmentId);
  const education = EDUCATIONS[doc.id] ?? [];
  const specializations = SPECIALIZATIONS[doc.id] ?? [];
  const initials = doc.name.split(" ").slice(1).map((w) => w[0]).join("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "doctor_profile.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          className: "text-sm text-muted-foreground mb-6 flex items-center flex-wrap gap-1",
          "aria-label": "Breadcrumb",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary transition-smooth", children: "Home" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/doctors",
                className: "hover:text-primary transition-smooth",
                children: "Doctors"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-3.5 h-3.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: doc.name })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-7 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-28 h-28 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border-2 border-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-bold text-primary", children: initials }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mb-1", children: [
            dept && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs font-medium", children: dept.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Badge,
              {
                variant: "outline",
                className: "text-xs font-medium text-primary border-primary/30",
                children: [
                  doc.yearsOfExperience,
                  " yrs exp."
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground mb-1 leading-tight", children: doc.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary font-semibold text-lg mb-1", children: doc.specialty }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: doc.qualification })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "lg:col-span-2 space-y-6",
          "data-ocid": "doctor_profile.main_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "medical-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-foreground text-xl flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5 text-primary" }),
                "About Dr. ",
                doc.name.split(" ").slice(1).join(" ")
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: doc.bio }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "medical-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl font-bold text-primary mb-1", children: [
                  doc.yearsOfExperience,
                  "+"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs font-medium", children: "Years of Experience" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "medical-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl font-bold text-primary mb-1", children: [
                  "₹",
                  doc.consultationFee
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs font-medium", children: "Consultation Fee" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "medical-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 text-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-primary text-sm mb-1 leading-snug", children: doc.consultationHours.days }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs font-medium", children: "Available Days" })
              ] }) })
            ] }),
            education.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "medical-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-foreground text-xl flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "w-5 h-5 text-primary" }),
                "Education & Credentials"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: education.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "li",
                {
                  className: "flex items-start gap-3 text-sm text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" }),
                    item
                  ]
                },
                item
              )) }) })
            ] }),
            specializations.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "medical-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-foreground text-xl flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stethoscope, { className: "w-5 h-5 text-primary" }),
                "Areas of Specialization"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: specializations.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "text-xs font-medium px-3 py-1.5",
                  children: s
                },
                s
              )) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "medical-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-semibold text-foreground text-xl flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5 text-primary" }),
                "Consultation Hours"
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 pr-6 text-muted-foreground font-medium", children: "Days" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 pr-6 text-muted-foreground font-medium", children: "Start Time" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-2 text-muted-foreground font-medium", children: "End Time" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border/50", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-6 font-medium text-foreground", children: doc.consultationHours.days }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-6 text-foreground", children: doc.consultationHours.startTime }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-foreground", children: doc.consultationHours.endTime })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-6 text-muted-foreground", children: "Other days" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "td",
                      {
                        colSpan: 2,
                        className: "py-3 text-muted-foreground italic",
                        children: "Not available (Emergency referrals accepted)"
                      }
                    )
                  ] })
                ] })
              ] }) }) })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-5", "data-ocid": "doctor_profile.sidebar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden border-0 shadow-elevated", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 bg-primary w-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground text-lg mb-1", children: "Book an Appointment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mb-5", children: [
              "Consult with ",
              doc.name.split(" ").slice(1).join(" "),
              " today."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Consultation Fee" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-foreground flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(IndianRupee, { className: "w-3.5 h-3.5" }),
                  doc.consultationFee
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Available" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-right max-w-[140px]", children: doc.consultationHours.days })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Timings" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
                  doc.consultationHours.startTime,
                  " –",
                  " ",
                  doc.consultationHours.endTime
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/appointments", "data-ocid": "doctor_profile.book_button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", className: "w-full font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 mr-2" }),
              "Book Appointment"
            ] }) })
          ] })
        ] }),
        dept && /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "medical-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-foreground mb-2", children: "Department" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-3", children: dept.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs font-medium", children: dept.name })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "medical-card bg-destructive/5 border-destructive/20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground text-sm mb-1", children: "24/7 Emergency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mb-3", children: "For emergencies, call our helpline immediately." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "tel:18001110000",
              className: "text-destructive font-bold text-sm hover:underline",
              "data-ocid": "doctor_profile.emergency_link",
              children: "1800-111-0000"
            }
          )
        ] }) })
      ] })
    ] })
  ] });
}
export {
  DoctorProfile
};
