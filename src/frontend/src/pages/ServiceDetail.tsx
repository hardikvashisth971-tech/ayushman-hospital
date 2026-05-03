import { DepartmentIcon } from "@/components/DepartmentIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DEPARTMENT_DETAILS } from "@/data/departmentDetails";
import { DEPARTMENTS, DOCTORS } from "@/data/sampleData";
import { Link, useParams } from "@tanstack/react-router";
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  HelpCircle,
  Microscope,
  Stethoscope,
  Wrench,
} from "lucide-react";
import { useState } from "react";

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border rounded-lg overflow-hidden"
      data-ocid={`service_detail.faq_item.${index + 1}`}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/40 transition-smooth"
        onClick={() => setOpen((p) => !p)}
        aria-expanded={open}
        data-ocid={`service_detail.faq_toggle.${index + 1}`}
      >
        <span className="font-medium text-foreground text-sm">{question}</span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function ServiceDetail() {
  const { id } = useParams({ from: "/services/$id" });
  const dept = DEPARTMENTS.find((d) => d.id === Number(id));
  const detail = DEPARTMENT_DETAILS.find((d) => d.id === Number(id));

  if (!dept) {
    return (
      <div
        className="max-w-7xl mx-auto px-4 py-24 text-center"
        data-ocid="service_detail.not_found"
      >
        <Stethoscope className="w-16 h-16 mx-auto text-muted-foreground/40 mb-4" />
        <h2 className="font-display text-2xl font-bold text-foreground mb-3">
          Department not found
        </h2>
        <p className="text-muted-foreground mb-6">
          The department you're looking for doesn't exist or has moved.
        </p>
        <Link to="/services" data-ocid="service_detail.back_link">
          <Button>Back to Services</Button>
        </Link>
      </div>
    );
  }

  const deptDoctors = DOCTORS.filter((d) => d.departmentId === dept.id);

  return (
    <div data-ocid="service_detail.page">
      {/* Page header */}
      <section className="bg-card border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center text-sm text-muted-foreground mb-5"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-primary transition-smooth">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5" />
            <Link
              to="/services"
              className="hover:text-primary transition-smooth"
            >
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-1.5" />
            <span className="text-foreground font-medium">{dept.name}</span>
          </nav>
          <div className="flex items-center gap-5">
            <div className="w-18 h-18 w-[4.5rem] h-[4.5rem] rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <DepartmentIcon
                name={dept.iconName}
                className="w-9 h-9 text-primary"
              />
            </div>
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                {dept.name}
              </h1>
              <p className="text-muted-foreground mt-1.5 max-w-2xl leading-relaxed">
                {dept.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div
          className="lg:col-span-2 space-y-8"
          data-ocid="service_detail.main_section"
        >
          {/* Detailed description */}
          {detail && (
            <section data-ocid="service_detail.description_section">
              <h2 className="font-display font-semibold text-foreground text-xl mb-3 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-primary" />
                About {dept.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {detail.detailedDescription}
              </p>
            </section>
          )}

          {/* Conditions treated */}
          {detail && (
            <Card
              className="medical-card"
              data-ocid="service_detail.conditions_section"
            >
              <CardContent className="p-6">
                <h2 className="font-display font-semibold text-foreground text-xl mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Conditions Treated
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
                  {detail.conditionsTreated.map((c) => (
                    <div key={c} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{c}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Key Treatments */}
          <Card
            className="medical-card"
            data-ocid="service_detail.treatments_section"
          >
            <CardContent className="p-6">
              <h2 className="font-display font-semibold text-foreground text-xl mb-4 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                Key Treatments &amp; Procedures
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dept.keyTreatments.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2.5 p-3 bg-primary/5 rounded-lg"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technologies & Equipment */}
          <Card
            className="medical-card"
            data-ocid="service_detail.technology_section"
          >
            <CardContent className="p-6">
              <h2 className="font-display font-semibold text-foreground text-xl mb-4 flex items-center gap-2">
                <Microscope className="w-5 h-5 text-primary" />
                Technologies &amp; Procedures
              </h2>
              {detail && (
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                    Advanced Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {detail.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-primary/10 text-primary border-0 text-sm font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                  Available Equipment
                </h3>
                <div className="flex flex-wrap gap-2">
                  {dept.availableEquipment.map((eq) => (
                    <Badge key={eq} variant="secondary" className="text-sm">
                      {eq}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Accordion */}
          {detail && detail.faqs.length > 0 && (
            <section data-ocid="service_detail.faq_section">
              <h2 className="font-display font-semibold text-foreground text-xl mb-4 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {detail.faqs.map((faq, i) => (
                  <FaqItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                    index={i}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Doctors in this department */}
          {deptDoctors.length > 0 && (
            <section data-ocid="service_detail.doctors_section">
              <h2 className="font-display font-semibold text-foreground text-xl mb-4 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-primary" />
                {dept.name} Specialists
              </h2>
              <div className="space-y-4">
                {deptDoctors.map((doc, i) => (
                  <Card
                    key={doc.id}
                    className="medical-card"
                    data-ocid={`service_detail.doctor_card.${i + 1}`}
                  >
                    <CardContent className="p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-card">
                        <span className="text-xl font-bold text-primary">
                          {doc.name.split(" ")[1]?.[0] ?? "D"}
                        </span>
                      </div>
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-semibold text-foreground">
                          {doc.name}
                        </h3>
                        <p className="text-primary text-sm font-medium">
                          {doc.specialty}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5">
                          {doc.qualification}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {doc.consultationHours.days},{" "}
                            {doc.consultationHours.startTime}–
                            {doc.consultationHours.endTime}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            &#8377;{doc.consultationFee} fee
                          </Badge>
                        </div>
                      </div>
                      {/* Actions */}
                      <div className="flex gap-2 flex-shrink-0">
                        <Link
                          to="/doctors/$id"
                          params={{ id: String(doc.id) }}
                          data-ocid={`service_detail.view_profile_button.${i + 1}`}
                        >
                          <Button variant="outline" size="sm">
                            View Profile
                          </Button>
                        </Link>
                        <Link
                          to="/appointments"
                          data-ocid={`service_detail.book_button.${i + 1}`}
                        >
                          <Button size="sm">
                            <Calendar className="w-3.5 h-3.5 mr-1.5" />
                            Book
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-4" data-ocid="service_detail.sidebar">
          {/* Book consultation card */}
          <Card className="bg-primary border-0 shadow-elevated">
            <CardContent className="p-6">
              <h3 className="font-display font-semibold text-primary-foreground text-lg mb-2">
                Book a Consultation
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-5 leading-relaxed">
                Schedule an appointment with our {dept.name} specialists today.
              </p>
              <Link
                to="/appointments"
                data-ocid="service_detail.book_consultation_button"
              >
                <Button variant="secondary" className="w-full font-semibold">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* All departments list */}
          <Card className="medical-card">
            <CardContent className="p-5">
              <h3 className="font-display font-semibold text-foreground mb-4">
                All Departments
              </h3>
              <ul className="space-y-1">
                {DEPARTMENTS.map((d) => (
                  <li key={d.id}>
                    <Link
                      to="/services/$id"
                      params={{ id: String(d.id) }}
                      className={`flex items-center gap-2.5 text-sm py-2 px-3 rounded-lg transition-smooth ${
                        d.id === dept.id
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                      data-ocid={`service_detail.sidebar_dept_${d.id}_link`}
                    >
                      <DepartmentIcon
                        name={d.iconName}
                        className="w-4 h-4 flex-shrink-0"
                      />
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Emergency card */}
          <Card className="medical-card border-destructive/30">
            <CardContent className="p-5">
              <h3 className="font-display font-semibold text-destructive text-sm mb-1">
                24/7 Emergency
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                Medical emergencies? Call us immediately.
              </p>
              <a
                href="tel:18001110000"
                className="block w-full text-center bg-destructive text-destructive-foreground text-sm font-bold py-2.5 px-4 rounded-lg hover:bg-destructive/90 transition-smooth"
                data-ocid="service_detail.emergency_call_button"
              >
                1800-111-0000
              </a>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
