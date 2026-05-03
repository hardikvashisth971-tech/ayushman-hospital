import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { DEPARTMENTS, HOSPITAL_INFO } from "@/data/sampleData";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { type FormEvent, useState } from "react";
import { toast } from "sonner";

type DeptStatus = "accepting" | "limited" | "closed";

const DEPT_STATUS: Record<number, DeptStatus> = {
  1: "accepting",
  2: "accepting",
  3: "limited",
  4: "accepting",
  5: "limited",
  6: "closed",
};

const STATUS_LABEL: Record<DeptStatus, string> = {
  accepting: "Accepting Patients",
  limited: "Limited Availability",
  closed: "Closed Today",
};

const STATUS_VARIANT: Record<
  DeptStatus,
  "default" | "secondary" | "destructive"
> = {
  accepting: "default",
  limited: "secondary",
  closed: "destructive",
};

const STATUS_DOT: Record<DeptStatus, string> = {
  accepting: "bg-green-500",
  limited: "bg-yellow-400",
  closed: "bg-destructive",
};

const FAQS = [
  {
    q: "Is parking available at Ayushman Hospital?",
    a: "Yes, we have a dedicated multi-level parking facility for patients and visitors. Parking is available 24/7 with separate bays for emergency vehicles. The first 2 hours are free for OPD patients upon validation at the reception.",
  },
  {
    q: "What are the visiting hours for admitted patients?",
    a: "General visiting hours are 10:00 AM – 12:00 PM and 5:00 PM – 7:00 PM daily. ICU and post-operative wards have restricted visiting — please check with the nursing station. A maximum of 2 visitors are allowed per patient at a time.",
  },
  {
    q: "Which insurance schemes does Ayushman Hospital accept?",
    a: "We are empanelled with Ayushman Bharat (PMJAY), CGHS, ECHS, and most major TPAs including Star Health, HDFC Ergo, United India, New India Assurance, and Mediassist. Please carry your insurance card and a valid photo ID for cashless processing.",
  },
  {
    q: "How do I reach the hospital by public transport?",
    a: "We are located in Vidhyadhar Nagar, Jaipur. The nearest metro station is Mansarovar (Pink Line, ~3 km). RSRTC city buses route 10C and 15A stop at Vidhyadhar Nagar. Auto-rickshaws and app cabs are readily available throughout the day.",
  },
  {
    q: "How do I book an appointment online?",
    a: "You can book an appointment through the Appointments page on this website by selecting your preferred department, doctor, date, and time slot. Alternatively, call our general line at +91 141 222 3344 (Mon–Sat, 8 AM–8 PM). Emergency cases are attended immediately without prior booking.",
  },
  {
    q: "Are reports and test results available online?",
    a: "Pathology and radiology reports for inpatient and OPD patients are available within 24–48 hours. You can collect them from the reports counter on the ground floor or request a digital copy by emailing care@ayushmanhospital.in with your patient ID.",
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    toast.success("Message sent! We'll get back to you within 24 hours.", {
      duration: 5000,
    });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${HOSPITAL_INFO.name}, ${HOSPITAL_INFO.address}, ${HOSPITAL_INFO.city}, ${HOSPITAL_INFO.state}`,
  )}`;

  return (
    <div data-ocid="contact.page">
      {/* Emergency Banner */}
      <div
        className="bg-destructive text-destructive-foreground py-3 sm:py-4"
        data-ocid="contact.emergency_banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 animate-pulse" />
            <span className="font-bold text-sm sm:text-base">
              Medical Emergency? Our team is ready 24 hours a day, 7 days a
              week.
            </span>
          </div>
          <a
            href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/-/g, "")}`}
            className="flex items-center gap-2 bg-destructive-foreground/15 border border-destructive-foreground/30 hover:bg-destructive-foreground/25 transition-smooth text-destructive-foreground font-bold text-base sm:text-lg px-4 py-2 rounded-lg whitespace-nowrap"
            data-ocid="contact.emergency_call_button"
          >
            <Phone className="w-4 h-4" />
            {HOSPITAL_INFO.emergencyPhone}
          </a>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-card border-b border-border py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="text-sm text-muted-foreground mb-3"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-primary transition-smooth">
              Home
            </Link>
            <ChevronRight className="inline w-3.5 h-3.5 mx-1" />
            <span className="text-foreground font-medium">Contact</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Whether you need to schedule an appointment, locate us, or simply
            have a question — we're here to help every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-background py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact Details */}
          <div className="space-y-6" data-ocid="contact.info_section">
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Get in Touch
            </h2>

            <div className="space-y-3">
              {[
                {
                  icon: MapPin,
                  label: "Address",
                  value: `${HOSPITAL_INFO.address}, ${HOSPITAL_INFO.city}, ${HOSPITAL_INFO.state} – ${HOSPITAL_INFO.pincode}`,
                  href: undefined as string | undefined,
                  emergency: false,
                },
                {
                  icon: Phone,
                  label: "General Enquiries",
                  value: HOSPITAL_INFO.phone,
                  href: `tel:${HOSPITAL_INFO.phone.replace(/\s/g, "")}`,
                  emergency: false,
                },
                {
                  icon: Phone,
                  label: "24/7 Emergency Helpline",
                  value: HOSPITAL_INFO.emergencyPhone,
                  href: `tel:${HOSPITAL_INFO.emergencyPhone.replace(/-/g, "")}`,
                  emergency: true,
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: HOSPITAL_INFO.email,
                  href: `mailto:${HOSPITAL_INFO.email}`,
                  emergency: false,
                },
              ].map(({ icon: Icon, label, value, href, emergency }) => (
                <div
                  key={label}
                  className={`flex items-start gap-4 p-4 rounded-lg border ${
                    emergency
                      ? "bg-destructive/5 border-destructive/25"
                      : "bg-muted/30 border-border"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      emergency ? "text-destructive" : "text-primary"
                    }`}
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className={`font-medium break-words hover:underline ${
                          emergency
                            ? "text-destructive font-bold"
                            : "text-foreground hover:text-primary"
                        }`}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground break-words">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <Card className="medical-card">
              <CardContent className="p-5">
                <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Working Hours
                </h3>
                <ul className="space-y-2.5">
                  {HOSPITAL_INFO.workingHours.map((wh) => (
                    <li key={wh.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{wh.day}</span>
                      <span
                        className={`font-semibold ${
                          wh.day === "Emergency"
                            ? "text-destructive"
                            : "text-foreground"
                        }`}
                      >
                        {wh.day === "Emergency"
                          ? "24 / 7"
                          : `${wh.openTime} – ${wh.closeTime}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right — Contact Form */}
          <Card className="medical-card" data-ocid="contact.form_card">
            <CardContent className="p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <Label htmlFor="contactName">
                    Your Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contactName"
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    data-ocid="contact.name_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contactEmail">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    data-ocid="contact.email_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contactSubject">
                    Subject <span className="text-destructive">*</span>
                  </Label>
                  <Select value={subject} onValueChange={setSubject} required>
                    <SelectTrigger
                      id="contactSubject"
                      data-ocid="contact.subject_select"
                    >
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="appointment">Appointment</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contactMessage">
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="contactMessage"
                    placeholder="How can we help you?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    required
                    data-ocid="contact.message_textarea"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full font-semibold"
                  disabled={loading || !subject}
                  data-ocid="contact.submit_button"
                >
                  {loading ? "Sending…" : "Send Message"}
                </Button>
                {loading && (
                  <p
                    className="text-center text-sm text-muted-foreground"
                    data-ocid="contact.loading_state"
                  >
                    Please wait while we send your message…
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-muted/30 py-14 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-1">
              Find Us
            </h2>
            <p className="text-muted-foreground text-sm">
              {HOSPITAL_INFO.address}, {HOSPITAL_INFO.city},{" "}
              {HOSPITAL_INFO.state} – {HOSPITAL_INFO.pincode}
            </p>
          </div>
          <div
            className="relative rounded-xl overflow-hidden border border-border shadow-card bg-card"
            style={{ minHeight: 320 }}
            data-ocid="contact.map_placeholder"
          >
            {/* Styled map placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-primary/5 via-background to-primary/10">
              {/* Grid lines to suggest a map */}
              <svg
                className="absolute inset-0 w-full h-full opacity-10"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="map-grid"
                    width="60"
                    height="60"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 60 0 L 0 0 0 60"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#map-grid)" />
              </svg>

              {/* Road lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-15 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <line
                  x1="0"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  stroke="currentColor"
                  strokeWidth="8"
                />
                <line
                  x1="40%"
                  y1="0"
                  x2="40%"
                  y2="100%"
                  stroke="currentColor"
                  strokeWidth="6"
                />
                <line
                  x1="70%"
                  y1="0"
                  x2="70%"
                  y2="100%"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>

              {/* Pin marker */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-destructive shadow-elevated flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-destructive-foreground" />
                </div>
                <div className="text-center bg-card/90 backdrop-blur-sm border border-border rounded-lg px-5 py-3 shadow-card max-w-xs">
                  <p className="font-display font-bold text-foreground">
                    {HOSPITAL_INFO.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {HOSPITAL_INFO.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {HOSPITAL_INFO.city}, {HOSPITAL_INFO.state} –{" "}
                    {HOSPITAL_INFO.pincode}
                  </p>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-smooth shadow-card text-sm"
                  data-ocid="contact.get_directions_link"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get Directions on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Availability */}
      <section className="bg-background py-14 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="font-display text-2xl font-semibold text-foreground mb-1">
              Department Availability Today
            </h2>
            <p className="text-muted-foreground text-sm">
              Real-time status of each department. Updated daily.
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            data-ocid="contact.dept_status_list"
          >
            {DEPARTMENTS.map((dept, i) => {
              const status = DEPT_STATUS[dept.id] ?? "accepting";
              return (
                <div
                  key={dept.id}
                  className="flex items-center justify-between bg-card border border-border rounded-lg px-5 py-4 shadow-card hover:shadow-elevated transition-smooth"
                  data-ocid={`contact.dept_status.item.${i + 1}`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${STATUS_DOT[status]}`}
                    />
                    <span className="font-medium text-foreground text-sm truncate">
                      {dept.name}
                    </span>
                  </div>
                  <Badge
                    variant={STATUS_VARIANT[status]}
                    className="ml-3 flex-shrink-0 text-xs"
                  >
                    {STATUS_LABEL[status]}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-14 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to common questions about visiting Ayushman
              Hospital.
            </p>
          </div>
          <div className="space-y-3" data-ocid="contact.faq_list">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="bg-card border border-border rounded-xl shadow-card overflow-hidden"
                  data-ocid={`contact.faq.item.${i + 1}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/20 transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-expanded={isOpen}
                    data-ocid={`contact.faq.toggle.${i + 1}`}
                  >
                    <span className="font-medium text-foreground text-sm sm:text-base">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <>
                      <Separator />
                      <div className="px-5 py-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
