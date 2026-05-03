import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, H as HOSPITAL_INFO, P as Phone, L as Link, M as MapPin, f as Mail, C as Clock, B as Button, b as DEPARTMENTS, e as ue } from "./index-DKO4PK6f.js";
import { C as Card, a as CardContent, B as Badge } from "./card-Cy1HM19A.js";
import { I as Input } from "./input-B8grHCrY.js";
import { L as Label, T as Textarea } from "./textarea-CnscL0ry.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, e as ChevronUp } from "./select-D1AcfFX_.js";
import { S as Separator } from "./separator-C1hhmjMd.js";
import { C as ChevronRight } from "./chevron-right-DGpJCicl.js";
import { C as ChevronDown } from "./chevron-down-Bw57g9O2.js";
import "./index-PS5BhIdd.js";
import "./index-DPcGNP4Y.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = createLucideIcon("triangle-alert", __iconNode);
const DEPT_STATUS = {
  1: "accepting",
  2: "accepting",
  3: "limited",
  4: "accepting",
  5: "limited",
  6: "closed"
};
const STATUS_LABEL = {
  accepting: "Accepting Patients",
  limited: "Limited Availability",
  closed: "Closed Today"
};
const STATUS_VARIANT = {
  accepting: "default",
  limited: "secondary",
  closed: "destructive"
};
const STATUS_DOT = {
  accepting: "bg-green-500",
  limited: "bg-yellow-400",
  closed: "bg-destructive"
};
const FAQS = [
  {
    q: "Is parking available at Ayushman Hospital?",
    a: "Yes, we have a dedicated multi-level parking facility for patients and visitors. Parking is available 24/7 with separate bays for emergency vehicles. The first 2 hours are free for OPD patients upon validation at the reception."
  },
  {
    q: "What are the visiting hours for admitted patients?",
    a: "General visiting hours are 10:00 AM – 12:00 PM and 5:00 PM – 7:00 PM daily. ICU and post-operative wards have restricted visiting — please check with the nursing station. A maximum of 2 visitors are allowed per patient at a time."
  },
  {
    q: "Which insurance schemes does Ayushman Hospital accept?",
    a: "We are empanelled with Ayushman Bharat (PMJAY), CGHS, ECHS, and most major TPAs including Star Health, HDFC Ergo, United India, New India Assurance, and Mediassist. Please carry your insurance card and a valid photo ID for cashless processing."
  },
  {
    q: "How do I reach the hospital by public transport?",
    a: "We are located in Vidhyadhar Nagar, Jaipur. The nearest metro station is Mansarovar (Pink Line, ~3 km). RSRTC city buses route 10C and 15A stop at Vidhyadhar Nagar. Auto-rickshaws and app cabs are readily available throughout the day."
  },
  {
    q: "How do I book an appointment online?",
    a: "You can book an appointment through the Appointments page on this website by selecting your preferred department, doctor, date, and time slot. Alternatively, call our general line at +91 141 222 3344 (Mon–Sat, 8 AM–8 PM). Emergency cases are attended immediately without prior booking."
  },
  {
    q: "Are reports and test results available online?",
    a: "Pathology and radiology reports for inpatient and OPD patients are available within 24–48 hours. You can collect them from the reports counter on the ground floor or request a digital copy by emailing care@ayushmanhospital.in with your patient ID."
  }
];
function Contact() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [subject, setSubject] = reactExports.useState("");
  const [message, setMessage] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [openFaq, setOpenFaq] = reactExports.useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    ue.success("Message sent! We'll get back to you within 24 hours.", {
      duration: 5e3
    });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${HOSPITAL_INFO.name}, ${HOSPITAL_INFO.address}, ${HOSPITAL_INFO.city}, ${HOSPITAL_INFO.state}`
  )}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "bg-destructive text-destructive-foreground py-3 sm:py-4",
        "data-ocid": "contact.emergency_banner",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 flex-shrink-0 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-sm sm:text-base", children: "Medical Emergency? Our team is ready 24 hours a day, 7 days a week." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: `tel:${HOSPITAL_INFO.emergencyPhone.replace(/-/g, "")}`,
              className: "flex items-center gap-2 bg-destructive-foreground/15 border border-destructive-foreground/30 hover:bg-destructive-foreground/25 transition-smooth text-destructive-foreground font-bold text-base sm:text-lg px-4 py-2 rounded-lg whitespace-nowrap",
              "data-ocid": "contact.emergency_call_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
                HOSPITAL_INFO.emergencyPhone
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-card border-b border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "nav",
        {
          className: "text-sm text-muted-foreground mb-3",
          "aria-label": "Breadcrumb",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary transition-smooth", children: "Home" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "inline w-3.5 h-3.5 mx-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Contact" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-bold text-foreground mb-2", children: "Contact Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl", children: "Whether you need to schedule an appointment, locate us, or simply have a question — we're here to help every step of the way." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "contact.info_section", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground", children: "Get in Touch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
          {
            icon: MapPin,
            label: "Address",
            value: `${HOSPITAL_INFO.address}, ${HOSPITAL_INFO.city}, ${HOSPITAL_INFO.state} – ${HOSPITAL_INFO.pincode}`,
            href: void 0,
            emergency: false
          },
          {
            icon: Phone,
            label: "General Enquiries",
            value: HOSPITAL_INFO.phone,
            href: `tel:${HOSPITAL_INFO.phone.replace(/\s/g, "")}`,
            emergency: false
          },
          {
            icon: Phone,
            label: "24/7 Emergency Helpline",
            value: HOSPITAL_INFO.emergencyPhone,
            href: `tel:${HOSPITAL_INFO.emergencyPhone.replace(/-/g, "")}`,
            emergency: true
          },
          {
            icon: Mail,
            label: "Email",
            value: HOSPITAL_INFO.email,
            href: `mailto:${HOSPITAL_INFO.email}`,
            emergency: false
          }
        ].map(({ icon: Icon, label, value, href, emergency }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-start gap-4 p-4 rounded-lg border ${emergency ? "bg-destructive/5 border-destructive/25" : "bg-muted/30 border-border"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Icon,
                {
                  className: `w-5 h-5 mt-0.5 flex-shrink-0 ${emergency ? "text-destructive" : "text-primary"}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5", children: label }),
                href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href,
                    className: `font-medium break-words hover:underline ${emergency ? "text-destructive font-bold" : "text-foreground hover:text-primary"}`,
                    children: value
                  }
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground break-words", children: value })
              ] })
            ]
          },
          label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "medical-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary" }),
            "Working Hours"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: HOSPITAL_INFO.workingHours.map((wh) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: wh.day }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `font-semibold ${wh.day === "Emergency" ? "text-destructive" : "text-foreground"}`,
                children: wh.day === "Emergency" ? "24 / 7" : `${wh.openTime} – ${wh.closeTime}`
              }
            )
          ] }, wh.day)) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "medical-card", "data-ocid": "contact.form_card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 sm:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold text-foreground mb-6", children: "Send Us a Message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "contactName", children: [
              "Your Name ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "contactName",
                placeholder: "Full name",
                value: name,
                onChange: (e) => setName(e.target.value),
                required: true,
                "data-ocid": "contact.name_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "contactEmail", children: [
              "Email Address ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "contactEmail",
                type: "email",
                placeholder: "you@example.com",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                required: true,
                "data-ocid": "contact.email_input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "contactSubject", children: [
              "Subject ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: subject, onValueChange: setSubject, required: true, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                SelectTrigger,
                {
                  id: "contactSubject",
                  "data-ocid": "contact.subject_select",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a subject" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "general", children: "General Inquiry" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "appointment", children: "Appointment" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "feedback", children: "Feedback" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "complaint", children: "Complaint" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "other", children: "Other" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "contactMessage", children: [
              "Message ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                id: "contactMessage",
                placeholder: "How can we help you?",
                value: message,
                onChange: (e) => setMessage(e.target.value),
                rows: 5,
                required: true,
                "data-ocid": "contact.message_textarea"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "submit",
              size: "lg",
              className: "w-full font-semibold",
              disabled: loading || !subject,
              "data-ocid": "contact.submit_button",
              children: loading ? "Sending…" : "Send Message"
            }
          ),
          loading && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-center text-sm text-muted-foreground",
              "data-ocid": "contact.loading_state",
              children: "Please wait while we send your message…"
            }
          )
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-14 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground mb-1", children: "Find Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
          HOSPITAL_INFO.address,
          ", ",
          HOSPITAL_INFO.city,
          ",",
          " ",
          HOSPITAL_INFO.state,
          " – ",
          HOSPITAL_INFO.pincode
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "relative rounded-xl overflow-hidden border border-border shadow-card bg-card",
          style: { minHeight: 320 },
          "data-ocid": "contact.map_placeholder",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-primary/5 via-background to-primary/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                className: "absolute inset-0 w-full h-full opacity-10",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "pattern",
                    {
                      id: "map-grid",
                      width: "60",
                      height: "60",
                      patternUnits: "userSpaceOnUse",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "path",
                        {
                          d: "M 60 0 L 0 0 0 60",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "0.5"
                        }
                      )
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#map-grid)" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                className: "absolute inset-0 w-full h-full opacity-15 text-primary",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "line",
                    {
                      x1: "0",
                      y1: "50%",
                      x2: "100%",
                      y2: "50%",
                      stroke: "currentColor",
                      strokeWidth: "8"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "line",
                    {
                      x1: "40%",
                      y1: "0",
                      x2: "40%",
                      y2: "100%",
                      stroke: "currentColor",
                      strokeWidth: "6"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "line",
                    {
                      x1: "70%",
                      y1: "0",
                      x2: "70%",
                      y2: "100%",
                      stroke: "currentColor",
                      strokeWidth: "4"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-destructive shadow-elevated flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-7 h-7 text-destructive-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center bg-card/90 backdrop-blur-sm border border-border rounded-lg px-5 py-3 shadow-card max-w-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-foreground", children: HOSPITAL_INFO.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: HOSPITAL_INFO.address }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                  HOSPITAL_INFO.city,
                  ", ",
                  HOSPITAL_INFO.state,
                  " –",
                  " ",
                  HOSPITAL_INFO.pincode
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: mapsUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-smooth shadow-card text-sm",
                  "data-ocid": "contact.get_directions_link",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4" }),
                    "Get Directions on Google Maps"
                  ]
                }
              )
            ] })
          ] })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-14 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-semibold text-foreground mb-1", children: "Department Availability Today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Real-time status of each department. Updated daily." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
          "data-ocid": "contact.dept_status_list",
          children: DEPARTMENTS.map((dept, i) => {
            const status = DEPT_STATUS[dept.id] ?? "accepting";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex items-center justify-between bg-card border border-border rounded-lg px-5 py-4 shadow-card hover:shadow-elevated transition-smooth",
                "data-ocid": `contact.dept_status.item.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `w-2.5 h-2.5 rounded-full flex-shrink-0 ${STATUS_DOT[status]}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm truncate", children: dept.name })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      variant: STATUS_VARIANT[status],
                      className: "ml-3 flex-shrink-0 text-xs",
                      children: STATUS_LABEL[status]
                    }
                  )
                ]
              },
              dept.id
            );
          })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/30 py-14 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-semibold text-foreground mb-2", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Quick answers to common questions about visiting Ayushman Hospital." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", "data-ocid": "contact.faq_list", children: FAQS.map((faq, i) => {
        const isOpen = openFaq === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "bg-card border border-border rounded-xl shadow-card overflow-hidden",
            "data-ocid": `contact.faq.item.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenFaq(isOpen ? null : i),
                  className: "w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/20 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  "aria-expanded": isOpen,
                  "data-ocid": `contact.faq.toggle.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground text-sm sm:text-base", children: faq.q }),
                    isOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "w-4 h-4 text-muted-foreground flex-shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 text-muted-foreground flex-shrink-0" })
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: faq.a }) })
              ] })
            ]
          },
          faq.q
        );
      }) })
    ] }) })
  ] });
}
export {
  Contact
};
