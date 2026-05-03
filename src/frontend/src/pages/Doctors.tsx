import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEPARTMENTS, DOCTORS } from "@/data/sampleData";
import { Link } from "@tanstack/react-router";
import { Calendar, Search, Stethoscope, Users } from "lucide-react";
import { useState } from "react";

export function Doctors() {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("all");

  const filtered = DOCTORS.filter((doc) => {
    const matchSearch =
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(search.toLowerCase()) ||
      doc.qualification.toLowerCase().includes(search.toLowerCase());
    const matchDept =
      deptFilter === "all" || doc.departmentId === Number(deptFilter);
    return matchSearch && matchDept;
  });

  return (
    <div data-ocid="doctors.page">
      {/* Hero Header */}
      <section className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Stethoscope className="w-5 h-5 text-primary" />
            </div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Our Medical Team
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
            Our Expert Doctors
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mb-8">
            Meet our team of highly qualified, compassionate specialists — each
            committed to delivering the best care for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>
                <strong className="text-foreground">{DOCTORS.length}+</strong>{" "}
                Specialist Doctors
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>Available Mon – Sat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-muted/30 border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, specialty or qualification…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-card"
                data-ocid="doctors.search_input"
              />
            </div>
            <Select value={deptFilter} onValueChange={setDeptFilter}>
              <SelectTrigger
                className="sm:w-52 bg-card"
                data-ocid="doctors.department_select"
              >
                <SelectValue placeholder="All Departments" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                {DEPARTMENTS.map((dept) => (
                  <SelectItem key={dept.id} value={String(dept.id)}>
                    {dept.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Doctor Grid */}
      <section className="bg-background py-14" data-ocid="doctors.list_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24" data-ocid="doctors.empty_state">
              <Stethoscope className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                No doctors found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter.
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setSearch("");
                  setDeptFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((doc, i) => {
                const dept = DEPARTMENTS.find((d) => d.id === doc.departmentId);
                const initials = doc.name
                  .split(" ")
                  .slice(1)
                  .map((w) => w[0])
                  .join("");
                return (
                  <Card
                    key={doc.id}
                    className="medical-card group overflow-hidden"
                    data-ocid={`doctors.item.${i + 1}`}
                  >
                    {/* Top accent strip */}
                    <div className="h-1 bg-primary w-full" />
                    <CardContent className="p-6">
                      {/* Avatar + name row */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-smooth">
                          <span className="text-xl font-bold text-primary">
                            {initials}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h2 className="font-display font-bold text-foreground text-lg leading-snug mb-0.5 truncate">
                            {doc.name}
                          </h2>
                          <p className="text-xs text-muted-foreground font-medium mb-1 truncate">
                            {doc.qualification}
                          </p>
                          <p className="text-primary text-sm font-semibold truncate">
                            {doc.specialty}
                          </p>
                        </div>
                      </div>

                      {/* Department badge */}
                      {dept && (
                        <div className="mb-3">
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium"
                          >
                            {dept.name}
                          </Badge>
                        </div>
                      )}

                      {/* One-liner bio */}
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
                        {doc.bio}
                      </p>

                      {/* Stats row */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-primary/60" />
                          <span className="text-xs font-semibold text-foreground">
                            {doc.yearsOfExperience} yrs
                          </span>
                          <span className="text-xs text-muted-foreground">
                            experience
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Badge
                            variant="outline"
                            className="text-xs font-semibold text-primary border-primary/30 px-2 py-0"
                          >
                            ₹{doc.consultationFee}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            consult
                          </span>
                        </div>
                      </div>

                      {/* Availability */}
                      <p className="text-xs text-muted-foreground mb-4">
                        <span className="font-medium text-foreground">
                          Available:
                        </span>{" "}
                        {doc.consultationHours.days},{" "}
                        {doc.consultationHours.startTime} –{" "}
                        {doc.consultationHours.endTime}
                      </p>

                      {/* Action buttons */}
                      <div className="flex gap-2">
                        <Link
                          to="/doctors/$id"
                          params={{ id: String(doc.id) }}
                          className="flex-1"
                          data-ocid={`doctors.view_profile_button.${i + 1}`}
                        >
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            className="w-full font-medium"
                          >
                            View Profile
                          </Button>
                        </Link>
                        <Link
                          to="/appointments"
                          className="flex-1"
                          data-ocid={`doctors.book_appointment_button.${i + 1}`}
                        >
                          <Button
                            type="button"
                            size="sm"
                            className="w-full font-medium"
                          >
                            <Calendar className="w-3.5 h-3.5 mr-1.5" />
                            Book
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
