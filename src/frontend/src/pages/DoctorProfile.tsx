import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DEPARTMENTS, DOCTORS } from "@/data/sampleData";
import { Link, useParams } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  IndianRupee,
  Stethoscope,
} from "lucide-react";

const EDUCATIONS: Record<number, string[]> = {
  1: [
    "BDS – Rajasthan Dental College, Jaipur (2004)",
    "MDS (Prosthodontics) – Government Dental College, Jaipur (2008)",
    "Fellowship in Implantology – ICOI, USA (2012)",
  ],
  2: [
    "MBBS – SMS Medical College, Jaipur (2001)",
    "MD (Anesthesiology) – AIIMS New Delhi (2005)",
    "Fellowship in Pediatric Anesthesia – PGIMER Chandigarh (2007)",
  ],
  3: [
    "MBBS – Sawai Man Singh Medical College, Jaipur (2006)",
    "DLO – SMS Medical College (2009)",
    "MS (ENT) – AIIMS Delhi (2013)",
  ],
  4: [
    "MBBS – Mahatma Gandhi Medical College, Jaipur (2008)",
    "MD (General Medicine) – SMS Medical College (2013)",
    "Fellowship in Diabetology – RSSDI (2015)",
  ],
  5: [
    "MBBS – Jawaharlal Nehru Medical College (2002)",
    "MD (Internal Medicine) – Grant Medical College, Mumbai (2006)",
    "DM (Cardiology) – SGPGI Lucknow (2010)",
    "FESC – Fellow of European Society of Cardiology (2014)",
  ],
  6: [
    "MBBS – RNT Medical College, Udaipur (2000)",
    "MS (Orthopedics) – SMS Medical College (2004)",
    "DNB (Orthopedics) – National Board (2005)",
    "Fellowship in Joint Replacement – Germany (2008)",
  ],
};

const SPECIALIZATIONS: Record<number, string[]> = {
  1: [
    "Dental Implants & Crown Prosthetics",
    "Full-Mouth Rehabilitation",
    "Fixed & Removable Dentures",
    "Smile Designing",
    "Laser Dentistry",
  ],
  2: [
    "General & Regional Anesthesia",
    "Pediatric Anesthesia",
    "Epidural & Spinal Blocks",
    "ICU Pain Management",
    "Sedation Techniques",
  ],
  3: [
    "Endoscopic Sinus Surgery (FESS)",
    "Cochlear Implantation",
    "Tonsillectomy & Adenoidectomy",
    "Septoplasty",
    "Hearing Assessment & Rehabilitation",
  ],
  4: [
    "Diabetes & Metabolic Disorders",
    "Hypertension Management",
    "Infectious Diseases",
    "Thyroid & Endocrine Disorders",
    "Preventive & Lifestyle Medicine",
  ],
  5: [
    "Coronary Angiography & Angioplasty",
    "Structural Heart Disease",
    "Pacemaker & ICD Implantation",
    "Heart Failure Management",
    "Echocardiography",
  ],
  6: [
    "Total Hip & Knee Replacement",
    "Minimally Invasive Joint Surgery",
    "Arthroscopy & Sports Medicine",
    "Complex Fracture Management",
    "Spine Surgery",
  ],
};

export function DoctorProfile() {
  const { id } = useParams({ from: "/doctors/$id" });
  const doc = DOCTORS.find((d) => d.id === Number(id));

  if (!doc) {
    return (
      <div
        className="max-w-7xl mx-auto px-4 py-24 text-center"
        data-ocid="doctor_profile.not_found"
      >
        <Stethoscope className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <h2 className="font-display text-2xl font-bold text-foreground mb-3">
          Doctor not found
        </h2>
        <p className="text-muted-foreground mb-6">
          The doctor you are looking for does not exist or may have moved.
        </p>
        <Link to="/doctors" data-ocid="doctor_profile.back_link">
          <Button type="button">Back to Doctors</Button>
        </Link>
      </div>
    );
  }

  const dept = DEPARTMENTS.find((d) => d.id === doc.departmentId);
  const education = EDUCATIONS[doc.id] ?? [];
  const specializations = SPECIALIZATIONS[doc.id] ?? [];
  const initials = doc.name
    .split(" ")
    .slice(1)
    .map((w) => w[0])
    .join("");

  return (
    <div data-ocid="doctor_profile.page">
      {/* Profile Header */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <nav
            className="text-sm text-muted-foreground mb-6 flex items-center flex-wrap gap-1"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-primary transition-smooth">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              to="/doctors"
              className="hover:text-primary transition-smooth"
            >
              Doctors
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium">{doc.name}</span>
          </nav>

          {/* Doctor identity */}
          <div className="flex flex-col sm:flex-row gap-7 items-start">
            <div className="w-28 h-28 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border-2 border-primary/20">
              <span className="text-4xl font-bold text-primary">
                {initials}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                {dept && (
                  <Badge variant="secondary" className="text-xs font-medium">
                    {dept.name}
                  </Badge>
                )}
                <Badge
                  variant="outline"
                  className="text-xs font-medium text-primary border-primary/30"
                >
                  {doc.yearsOfExperience} yrs exp.
                </Badge>
              </div>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-1 leading-tight">
                {doc.name}
              </h1>
              <p className="text-primary font-semibold text-lg mb-1">
                {doc.specialty}
              </p>
              <p className="text-muted-foreground text-sm">
                {doc.qualification}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <div
          className="lg:col-span-2 space-y-6"
          data-ocid="doctor_profile.main_section"
        >
          {/* Bio */}
          <Card className="medical-card">
            <CardHeader className="pb-3">
              <h2 className="font-display font-semibold text-foreground text-xl flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                About Dr. {doc.name.split(" ").slice(1).join(" ")}
              </h2>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground leading-relaxed">{doc.bio}</p>
            </CardContent>
          </Card>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="medical-card">
              <CardContent className="p-5 text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {doc.yearsOfExperience}+
                </div>
                <div className="text-muted-foreground text-xs font-medium">
                  Years of Experience
                </div>
              </CardContent>
            </Card>
            <Card className="medical-card">
              <CardContent className="p-5 text-center">
                <div className="text-xl font-bold text-primary mb-1">
                  ₹{doc.consultationFee}
                </div>
                <div className="text-muted-foreground text-xs font-medium">
                  Consultation Fee
                </div>
              </CardContent>
            </Card>
            <Card className="medical-card">
              <CardContent className="p-5 text-center">
                <div className="font-bold text-primary text-sm mb-1 leading-snug">
                  {doc.consultationHours.days}
                </div>
                <div className="text-muted-foreground text-xs font-medium">
                  Available Days
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          {education.length > 0 && (
            <Card className="medical-card">
              <CardHeader className="pb-3">
                <h2 className="font-display font-semibold text-foreground text-xl flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Education &amp; Credentials
                </h2>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3">
                  {education.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Specializations */}
          {specializations.length > 0 && (
            <Card className="medical-card">
              <CardHeader className="pb-3">
                <h2 className="font-display font-semibold text-foreground text-xl flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  Areas of Specialization
                </h2>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {specializations.map((s) => (
                    <Badge
                      key={s}
                      variant="secondary"
                      className="text-xs font-medium px-3 py-1.5"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Consultation Hours Table */}
          <Card className="medical-card">
            <CardHeader className="pb-3">
              <h2 className="font-display font-semibold text-foreground text-xl flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Consultation Hours
              </h2>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-6 text-muted-foreground font-medium">
                        Days
                      </th>
                      <th className="text-left py-2 pr-6 text-muted-foreground font-medium">
                        Start Time
                      </th>
                      <th className="text-left py-2 text-muted-foreground font-medium">
                        End Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 pr-6 font-medium text-foreground">
                        {doc.consultationHours.days}
                      </td>
                      <td className="py-3 pr-6 text-foreground">
                        {doc.consultationHours.startTime}
                      </td>
                      <td className="py-3 text-foreground">
                        {doc.consultationHours.endTime}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-6 text-muted-foreground">
                        Other days
                      </td>
                      <td
                        colSpan={2}
                        className="py-3 text-muted-foreground italic"
                      >
                        Not available (Emergency referrals accepted)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <aside className="space-y-5" data-ocid="doctor_profile.sidebar">
          {/* Booking card */}
          <Card className="overflow-hidden border-0 shadow-elevated">
            <div className="h-2 bg-primary w-full" />
            <CardContent className="p-6">
              <h3 className="font-display font-bold text-foreground text-lg mb-1">
                Book an Appointment
              </h3>
              <p className="text-muted-foreground text-sm mb-5">
                Consult with {doc.name.split(" ").slice(1).join(" ")} today.
              </p>
              <Separator className="mb-4" />
              <div className="space-y-3 mb-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Consultation Fee
                  </span>
                  <span className="font-bold text-foreground flex items-center gap-1">
                    <IndianRupee className="w-3.5 h-3.5" />
                    {doc.consultationFee}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Available</span>
                  <span className="font-medium text-foreground text-right max-w-[140px]">
                    {doc.consultationHours.days}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Timings</span>
                  <span className="font-medium text-foreground">
                    {doc.consultationHours.startTime} –{" "}
                    {doc.consultationHours.endTime}
                  </span>
                </div>
              </div>
              <Link to="/appointments" data-ocid="doctor_profile.book_button">
                <Button type="button" className="w-full font-semibold">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Department card */}
          {dept && (
            <Card className="medical-card">
              <CardContent className="p-5">
                <h4 className="font-display font-semibold text-foreground mb-2">
                  Department
                </h4>
                <p className="text-muted-foreground text-sm mb-3">
                  {dept.description}
                </p>
                <Badge variant="secondary" className="text-xs font-medium">
                  {dept.name}
                </Badge>
              </CardContent>
            </Card>
          )}

          {/* Emergency notice */}
          <Card className="medical-card bg-destructive/5 border-destructive/20">
            <CardContent className="p-5">
              <h4 className="font-semibold text-foreground text-sm mb-1">
                24/7 Emergency
              </h4>
              <p className="text-muted-foreground text-xs mb-3">
                For emergencies, call our helpline immediately.
              </p>
              <a
                href="tel:18001110000"
                className="text-destructive font-bold text-sm hover:underline"
                data-ocid="doctor_profile.emergency_link"
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
