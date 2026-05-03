import { DepartmentIcon } from "@/components/DepartmentIcon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DEPARTMENTS, DOCTORS, HOSPITAL_INFO } from "@/data/sampleData";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  Award,
  BedDouble,
  ChevronRight,
  Clock,
  HeartPulse,
  Phone,
  Shield,
  Star,
  Stethoscope,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { icon: BedDouble, value: "500+", label: "Hospital Beds" },
  { icon: Users, value: "100+", label: "Expert Doctors" },
  { icon: Activity, value: "20+", label: "Departments" },
  { icon: HeartPulse, value: "50,000+", label: "Patients Served" },
];

// ─── Why Choose Us ────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: Clock,
    title: "24/7 Emergency Care",
    desc: "Round-the-clock emergency services with rapid-response teams and trauma specialists on standby.",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: Award,
    title: "Experienced Specialists",
    desc: "Over 100 highly qualified doctors trained at premier institutions across India and abroad.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "Advanced Equipment",
    desc: "State-of-the-art diagnostic and surgical technology — Cath Lab, MRI 3T, Robot-assisted surgery.",
    color: "text-accent",
    bg: "bg-accent/15",
  },
  {
    icon: HeartPulse,
    title: "Patient-First Approach",
    desc: "Every care decision is driven by compassion, evidence, and respect for patient dignity.",
    color: "text-secondary",
    bg: "bg-secondary/15",
  },
  {
    icon: Shield,
    title: "Affordable Quality Care",
    desc: "Transparent pricing, cashless insurance, and government scheme support — quality care within reach.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Stethoscope,
    title: "Holistic Wellness",
    desc: "From preventive screenings to post-operative rehabilitation — we support your complete health journey.",
    color: "text-accent",
    bg: "bg-accent/15",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    name: "Rekha Gupta",
    location: "Jaipur",
    rating: 5,
    text: "After my knee replacement surgery with Dr. Vikram Singh, I was back on my feet within three weeks. The care and attention from every nurse and doctor was exceptional. Ayushman truly feels like family.",
    dept: "Orthopedics",
  },
  {
    name: "Suresh Agarwal",
    location: "Ajmer",
    rating: 5,
    text: "I rushed to the emergency with chest pain at 2 AM. Within 20 minutes Dr. Anjali Mehta's team had me in the Cath Lab. The speed and professionalism saved my life. Forever grateful.",
    dept: "Cardiology",
  },
  {
    name: "Meena Rathore",
    location: "Jaipur",
    rating: 5,
    text: "My daughter was terrified of dental treatment. Dr. Priya Sharma's gentle approach completely changed that. The clinic is child-friendly and hygienic. Highly recommend to every parent.",
    dept: "Dentistry",
  },
  {
    name: "Arvind Sharma",
    location: "Sikar",
    rating: 5,
    text: "Ayushman Hospital gave us a second chance. The ENT team under Dr. Sunita Verma handled my mother's sinus surgery with amazing skill. Follow-up care was prompt and thorough.",
    dept: "ENT",
  },
];

const FEATURED_DEPTS = DEPARTMENTS.slice(0, 4);

export function Home() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section
        data-ocid="home.hero_section"
        className="relative overflow-hidden min-h-[88vh] flex items-center"
        style={{ background: "oklch(0.14 0.06 210)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-doctors-team.dim_1400x700.jpg')",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, oklch(0.13 0.07 210 / 0.92) 40%, oklch(0.2 0.08 195 / 0.6) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-white space-y-6"
          >
            <Badge
              className="text-sm font-medium px-3 py-1 border-white/30 bg-white/10 text-white"
              variant="outline"
            >
              🏥 Jaipur’s Trusted Healthcare Partner since{" "}
              {HOSPITAL_INFO.establishedYear}
            </Badge>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Quality Healthcare
              <span className="block" style={{ color: "oklch(0.82 0.12 175)" }}>
                for Every Life
              </span>
            </h1>

            <p className="text-lg text-white/80 max-w-lg leading-relaxed">
              Compassionate care. Advanced medicine. Dedicated specialists — all
              under one roof. At Ayushman Hospital, your well-being is our
              highest calling.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                asChild
                size="lg"
                data-ocid="home.book_appointment_button"
                className="font-semibold text-base px-8 shadow-elevated"
              >
                <Link to="/appointments">Book Appointment</Link>
              </Button>
              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                data-ocid="home.emergency_button"
                className="inline-flex items-center gap-2 font-semibold text-base px-8 py-2.5 rounded-lg bg-destructive text-white hover:bg-destructive/90 transition-smooth shadow-elevated"
              >
                <Phone className="w-4 h-4" />
                Emergency: {HOSPITAL_INFO.emergencyPhone}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block"
          >
            <Card className="shadow-elevated border-border/40 bg-card/95 backdrop-blur">
              <CardContent className="p-6 space-y-4">
                <p className="font-display font-semibold text-xl text-foreground">
                  Quick Appointment
                </p>
                <div className="space-y-3">
                  {FEATURED_DEPTS.map((dept) => (
                    <Link
                      key={dept.id}
                      to="/appointments"
                      data-ocid={`home.quick_dept.item.${dept.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-smooth group cursor-pointer"
                    >
                      <span className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10">
                        <DepartmentIcon
                          name={dept.iconName}
                          className="w-5 h-5 text-primary"
                        />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block font-medium text-foreground">
                          {dept.name}
                        </span>
                        <span className="block text-sm text-muted-foreground truncate">
                          {dept.description}
                        </span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-smooth" />
                    </Link>
                  ))}
                </div>
                <Button
                  asChild
                  className="w-full font-semibold"
                  data-ocid="home.quick_book_button"
                >
                  <Link to="/appointments">Schedule Now</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section data-ocid="home.stats_section" className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`home.stat.item.${i + 1}`}
                className="flex flex-col items-center gap-1"
              >
                <s.icon className="w-6 h-6 text-primary-foreground/80 mb-1" />
                <span className="font-display text-3xl font-bold text-primary-foreground">
                  {s.value}
                </span>
                <span className="text-sm text-primary-foreground/75">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Departments */}
      <section
        data-ocid="home.departments_section"
        className="bg-background py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="text-primary border-primary/30 mb-3"
            >
              Our Specialities
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              World-Class Medical Departments
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              From routine check-ups to complex interventions — every department
              is staffed by specialists dedicated to your care.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_DEPTS.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  data-ocid={`home.dept_card.item.${dept.id}`}
                  className="medical-card h-full flex flex-col group hover:-translate-y-1 transition-smooth"
                >
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
                    <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <DepartmentIcon
                        name={dept.iconName}
                        className="w-6 h-6 text-primary"
                      />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground">
                        {dept.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {dept.description}
                      </p>
                    </div>
                    <ul className="space-y-1 flex-1">
                      {dept.keyTreatments.slice(0, 3).map((t) => (
                        <li
                          key={t}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/services"
                      data-ocid={`home.dept_learn_more.${dept.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-smooth mt-auto"
                    >
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="home.all_departments_button"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Link to="/services">View All Departments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section data-ocid="home.why_us_section" className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="text-primary border-primary/30 mb-3"
            >
              Why Ayushman
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Healthcare You Can Trust
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              We combine clinical excellence with genuine compassion to deliver
              outcomes that matter most to you and your family.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-ocid={`home.feature_card.item.${i + 1}`}
              >
                <Card className="bg-card border-border h-full shadow-card hover:shadow-elevated transition-smooth">
                  <CardContent className="p-6 flex gap-4">
                    <span
                      className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl ${f.bg}`}
                    >
                      <f.icon className={`w-6 h-6 ${f.color}`} />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {f.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section data-ocid="home.doctors_section" className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="text-primary border-primary/30 mb-3"
            >
              Our Specialists
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Meet Our Expert Doctors
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              A team of nationally recognised specialists committed to
              personalised, evidence-based care.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTORS.slice(0, 6).map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
              >
                <Card
                  data-ocid={`home.doctor_card.item.${doc.id}`}
                  className="medical-card group hover:-translate-y-1 transition-smooth"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-14 h-14 border-2 border-primary/20">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                          {doc.name
                            .split(" ")
                            .filter((w) => w !== "Dr.")
                            .slice(0, 2)
                            .map((w) => w[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-semibold text-foreground truncate">
                          {doc.name}
                        </h3>
                        <p className="text-sm text-primary font-medium truncate">
                          {doc.specialty}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {doc.qualification}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {doc.yearsOfExperience}+ yrs exp
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs border-primary/20 text-primary"
                      >
                        ₹{doc.consultationFee}
                      </Badge>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs"
                        data-ocid={`home.view_profile_button.${doc.id}`}
                      >
                        <Link to="/doctors/$id" params={{ id: String(doc.id) }}>
                          View Profile
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="flex-1 text-xs"
                        data-ocid={`home.book_doc_button.${doc.id}`}
                      >
                        <Link to="/appointments">Book</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              data-ocid="home.all_doctors_button"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              <Link to="/doctors">Meet All Doctors</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        data-ocid="home.testimonials_section"
        className="bg-muted/30 py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge
              variant="outline"
              className="text-primary border-primary/30 mb-3"
            >
              Patient Stories
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              What Our Patients Say
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Real experiences from the people who trusted us with their health.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`home.testimonial.item.${i + 1}`}
              >
                <Card className="bg-card border-border shadow-card h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <Star
                          key={`${t.name}-star-${si}`}
                          className="w-4 h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-border">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {t.name
                            .split(" ")
                            .slice(0, 2)
                            .map((w) => w[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {t.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t.location} · {t.dept}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section data-ocid="home.cta_section" className="bg-primary py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground">
              Book an Appointment Today
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-lg mx-auto">
              Our specialists are ready to help you. Schedule your visit now and
              experience healthcare at its finest.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                data-ocid="home.cta_book_button"
                className="bg-card text-primary hover:bg-card/90 font-semibold px-10 shadow-elevated"
              >
                <Link to="/appointments">Book Now</Link>
              </Button>
              <a
                href={`tel:${HOSPITAL_INFO.phone}`}
                data-ocid="home.cta_call_button"
                className="inline-flex items-center gap-2 font-semibold text-base px-8 py-2.5 rounded-lg border border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 transition-smooth"
              >
                <Phone className="w-4 h-4" />
                {HOSPITAL_INFO.phone}
              </a>
            </div>
            <p className="text-primary-foreground/60 text-sm pt-2">
              24/7 Emergency Helpline:{" "}
              <a
                href={`tel:${HOSPITAL_INFO.emergencyPhone}`}
                className="font-semibold text-primary-foreground underline underline-offset-2 hover:text-primary-foreground/80 transition-smooth"
                data-ocid="home.emergency_hotline_link"
              >
                {HOSPITAL_INFO.emergencyPhone}
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
