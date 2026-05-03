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
import { DEPARTMENTS, DOCTORS, TIME_SLOTS } from "@/data/sampleData";
import type { Appointment, AppointmentRequest } from "@/types";
import { Link } from "@tanstack/react-router";
import {
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Printer,
  Stethoscope,
  Trash2,
  User,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const STORAGE_KEY = "ayushman_appointments";

const DISPLAY_TIME_SLOTS = [
  { startTime: "09:00", endTime: "10:00", label: "09:00 AM – 10:00 AM" },
  { startTime: "10:00", endTime: "11:00", label: "10:00 AM – 11:00 AM" },
  { startTime: "11:00", endTime: "12:00", label: "11:00 AM – 12:00 PM" },
  { startTime: "14:00", endTime: "15:00", label: "02:00 PM – 03:00 PM" },
  { startTime: "15:00", endTime: "16:00", label: "03:00 PM – 04:00 PM" },
  { startTime: "16:00", endTime: "17:00", label: "04:00 PM – 05:00 PM" },
];

const initialForm: AppointmentRequest = {
  patientName: "",
  patientPhone: "",
  patientEmail: "",
  departmentId: 0,
  doctorId: 0,
  date: "",
  timeSlot: { startTime: "", endTime: "" },
  notes: "",
};

type StepId = 1 | 2 | 3 | 4;

interface FieldError {
  patientName?: string;
  patientPhone?: string;
  patientEmail?: string;
}

const STEPS = [
  { id: 1, label: "Specialist", icon: Stethoscope },
  { id: 2, label: "Schedule", icon: CalendarDays },
  { id: 3, label: "Details", icon: User },
  { id: 4, label: "Confirm", icon: Check },
];

function loadAppointments(): Appointment[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Appointment[]) : [];
  } catch {
    return [];
  }
}

function saveAppointments(appts: Appointment[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appts));
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(`${dateStr}T00:00:00`);
  return d.toLocaleDateString("en-IN", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function StatusBadge({ status }: { status: Appointment["status"] }) {
  const map = {
    pending: "bg-amber-100 text-amber-700 border-amber-200",
    confirmed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    cancelled: "bg-red-100 text-red-600 border-red-200",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
        map[status]
      }`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export function Appointments() {
  const [step, setStep] = useState<StepId>(1);
  const [form, setForm] = useState<AppointmentRequest>(initialForm);
  const [errors, setErrors] = useState<FieldError>({});
  const [bookingId, setBookingId] = useState<number | null>(null);
  const [myAppts, setMyAppts] = useState<Appointment[]>(loadAppointments);
  const [activeTab, setActiveTab] = useState<"book" | "my">("book");

  useEffect(() => {
    setMyAppts(loadAppointments());
  }, []);

  const filteredDoctors = form.departmentId
    ? DOCTORS.filter((d) => d.departmentId === form.departmentId)
    : DOCTORS;

  const selectedDept = DEPARTMENTS.find((d) => d.id === form.departmentId);
  const selectedDoctor = DOCTORS.find((d) => d.id === form.doctorId);
  const selectedSlot = DISPLAY_TIME_SLOTS.find(
    (s) => s.startTime === form.timeSlot.startTime,
  );

  // Step navigation
  const goNext = () => {
    if (step === 1) {
      if (!form.departmentId) {
        toast.error("Please select a department.");
        return;
      }
    } else if (step === 2) {
      if (!form.date || !form.timeSlot.startTime) {
        toast.error("Please select a date and time slot.");
        return;
      }
    } else if (step === 3) {
      const newErrors: FieldError = {};
      if (!form.patientName.trim()) newErrors.patientName = "Name is required.";
      if (!/^[6-9]\d{9}$/.test(form.patientPhone))
        newErrors.patientPhone = "Enter a valid 10-digit Indian mobile number.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.patientEmail))
        newErrors.patientEmail = "Enter a valid email address.";
      setErrors(newErrors);
      if (Object.keys(newErrors).length > 0) return;
    }
    setStep((s) => (s < 4 ? ((s + 1) as StepId) : s));
  };

  const goPrev = () => setStep((s) => (s > 1 ? ((s - 1) as StepId) : s));

  const handleConfirm = () => {
    const id = Date.now();
    const newAppt: Appointment = {
      id,
      ...form,
      status: "pending",
      createdAt: id,
    };
    const updated = [newAppt, ...myAppts];
    saveAppointments(updated);
    setMyAppts(updated);
    setBookingId(id);
    toast.success(`Appointment booked! Booking ID: #${id}`);
  };

  const handleCancel = (apptId: number) => {
    const updated = myAppts.map((a) =>
      a.id === apptId ? { ...a, status: "cancelled" as const } : a,
    );
    saveAppointments(updated);
    setMyAppts(updated);
    toast.success("Appointment cancelled.");
  };

  const handleDelete = (apptId: number) => {
    const updated = myAppts.filter((a) => a.id !== apptId);
    saveAppointments(updated);
    setMyAppts(updated);
    toast.success("Record removed.");
  };

  const resetBooking = () => {
    setForm(initialForm);
    setErrors({});
    setStep(1);
    setBookingId(null);
  };

  return (
    <div data-ocid="appointments.page">
      {/* Page header */}
      <section className="bg-card border-b border-border py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="text-sm text-muted-foreground mb-3"
            aria-label="Breadcrumb"
          >
            <Link
              to="/"
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="inline w-3.5 h-3.5 mx-1" />
            <span className="text-foreground font-medium">
              Book Appointment
            </span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Book an Appointment
          </h1>
          <p className="text-muted-foreground max-w-xl">
            Schedule a consultation with our specialists in 4 easy steps.
          </p>
        </div>
      </section>

      <section className="bg-background py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div
            className="flex gap-1 p-1 rounded-xl bg-muted/50 border border-border mb-8 w-fit"
            role="tablist"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "book"}
              onClick={() => setActiveTab("book")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                activeTab === "book"
                  ? "bg-card shadow-sm text-primary border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-ocid="appointments.book_tab"
            >
              Book Appointment
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "my"}
              onClick={() => setActiveTab("my")}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
                activeTab === "my"
                  ? "bg-card shadow-sm text-primary border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-ocid="appointments.my_tab"
            >
              My Appointments
              {myAppts.length > 0 && (
                <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs">
                  {myAppts.length}
                </span>
              )}
            </button>
          </div>

          {activeTab === "book" &&
            (bookingId ? (
              <ConfirmationCard
                form={form}
                bookingId={bookingId}
                selectedDept={selectedDept}
                selectedDoctor={selectedDoctor}
                selectedSlot={selectedSlot}
                onReset={resetBooking}
                onViewAppointments={() => setActiveTab("my")}
              />
            ) : (
              <BookingForm
                step={step}
                form={form}
                setForm={setForm}
                errors={errors}
                setErrors={setErrors}
                filteredDoctors={filteredDoctors}
                selectedDept={selectedDept}
                selectedDoctor={selectedDoctor}
                selectedSlot={selectedSlot}
                goNext={goNext}
                goPrev={goPrev}
                onConfirm={handleConfirm}
              />
            ))}

          {activeTab === "my" && (
            <MyAppointments
              appointments={myAppts}
              onCancel={handleCancel}
              onDelete={handleDelete}
            />
          )}
        </div>
      </section>
    </div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────────

interface BookingFormProps {
  step: StepId;
  form: AppointmentRequest;
  setForm: (f: AppointmentRequest) => void;
  errors: FieldError;
  setErrors: (e: FieldError) => void;
  filteredDoctors: typeof DOCTORS;
  selectedDept: (typeof DEPARTMENTS)[number] | undefined;
  selectedDoctor: (typeof DOCTORS)[number] | undefined;
  selectedSlot: (typeof DISPLAY_TIME_SLOTS)[number] | undefined;
  goNext: () => void;
  goPrev: () => void;
  onConfirm: () => void;
}

function BookingForm({
  step,
  form,
  setForm,
  errors,
  setErrors,
  filteredDoctors,
  selectedDept,
  selectedDoctor,
  selectedSlot,
  goNext,
  goPrev,
  onConfirm,
}: BookingFormProps) {
  return (
    <Card
      className="border-border shadow-sm"
      data-ocid="appointments.form_card"
    >
      {/* Progress steps */}
      <div className="px-6 pt-6 pb-0">
        <div className="flex items-center justify-between mb-6">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            const isActive = step === s.id;
            const isDone = step > s.id;
            return (
              <div key={s.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isDone
                        ? "bg-primary border-primary text-primary-foreground"
                        : isActive
                          ? "bg-primary/10 border-primary text-primary"
                          : "bg-muted/50 border-border text-muted-foreground"
                    }`}
                    aria-current={isActive ? "step" : undefined}
                  >
                    {isDone ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Icon className="w-4 h-4" />
                    )}
                  </div>
                  <span
                    className={`text-xs font-medium hidden sm:block ${
                      isActive
                        ? "text-primary"
                        : isDone
                          ? "text-foreground"
                          : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 mb-5 rounded transition-all duration-300 ${
                      step > s.id ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <CardContent className="px-6 pb-6">
        {/* Step 1: Department & Doctor */}
        {step === 1 && (
          <div className="space-y-5" data-ocid="appointments.step1_panel">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-1">
                Choose a Specialist
              </h2>
              <p className="text-sm text-muted-foreground">
                Select the department and your preferred doctor.
              </p>
            </div>
            <div className="space-y-1.5">
              <Label>
                Department <span className="text-destructive">*</span>
              </Label>
              <Select
                value={form.departmentId ? String(form.departmentId) : ""}
                onValueChange={(v) =>
                  setForm({ ...form, departmentId: Number(v), doctorId: 0 })
                }
              >
                <SelectTrigger data-ocid="appointments.department_select">
                  <SelectValue placeholder="Select a department" />
                </SelectTrigger>
                <SelectContent>
                  {DEPARTMENTS.map((d) => (
                    <SelectItem key={d.id} value={String(d.id)}>
                      {d.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {form.departmentId > 0 && (
              <div className="space-y-1.5">
                <Label>Preferred Doctor (optional)</Label>
                <Select
                  value={form.doctorId ? String(form.doctorId) : ""}
                  onValueChange={(v) =>
                    setForm({ ...form, doctorId: Number(v) })
                  }
                >
                  <SelectTrigger data-ocid="appointments.doctor_select">
                    <SelectValue placeholder="Any available doctor" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredDoctors.map((d) => (
                      <SelectItem key={d.id} value={String(d.id)}>
                        <span className="font-medium">{d.name}</span>
                        <span className="text-muted-foreground ml-2 text-xs">
                          — {d.specialty}
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {selectedDoctor && (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/20">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground">
                    {selectedDoctor.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {selectedDoctor.specialty}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {selectedDoctor.yearsOfExperience} yrs exp · ₹
                    {selectedDoctor.consultationFee} fee ·{" "}
                    {selectedDoctor.consultationHours.days}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div className="space-y-5" data-ocid="appointments.step2_panel">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-1">
                Pick a Date & Time
              </h2>
              <p className="text-sm text-muted-foreground">
                Choose a convenient date and available time slot.
              </p>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="apptDate">
                Appointment Date <span className="text-destructive">*</span>
              </Label>
              <Input
                id="apptDate"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                data-ocid="appointments.date_input"
                className="max-w-xs"
              />
              {form.date && (
                <p className="text-xs text-muted-foreground">
                  {formatDate(form.date)}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label>
                Available Time Slots <span className="text-destructive">*</span>
              </Label>
              <div
                className="grid grid-cols-2 sm:grid-cols-3 gap-2.5"
                data-ocid="appointments.timeslot_grid"
              >
                {DISPLAY_TIME_SLOTS.map((slot, idx) => {
                  const isSelected = form.timeSlot.startTime === slot.startTime;
                  // Mark afternoon slots unavailable for visual demo
                  const isUnavailable = !form.date && idx >= 3;
                  return (
                    <button
                      key={slot.startTime}
                      type="button"
                      disabled={isUnavailable}
                      onClick={() =>
                        setForm({
                          ...form,
                          timeSlot: {
                            startTime: slot.startTime,
                            endTime: slot.endTime,
                          },
                        })
                      }
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium transition-all duration-200 ${
                        isSelected
                          ? "bg-primary text-primary-foreground border-primary shadow-sm"
                          : isUnavailable
                            ? "bg-muted/40 text-muted-foreground border-border cursor-not-allowed opacity-50"
                            : "bg-card border-border text-foreground hover:border-primary hover:bg-primary/5"
                      }`}
                      data-ocid={`appointments.timeslot.${idx + 1}`}
                    >
                      <Clock className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{slot.label}</span>
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary mr-1 align-middle" />
                Selected &nbsp;
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-muted border border-border mr-1 align-middle" />
                Available &nbsp;
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-muted/40 opacity-50 mr-1 align-middle" />
                Select a date to see all slots
              </p>
            </div>
          </div>
        )}

        {/* Step 3: Patient Details */}
        {step === 3 && (
          <div className="space-y-5" data-ocid="appointments.step3_panel">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-1">
                Patient Details
              </h2>
              <p className="text-sm text-muted-foreground">
                Please provide accurate contact information for confirmation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <Label htmlFor="patientName">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="patientName"
                  placeholder="Rohit Sharma"
                  value={form.patientName}
                  onBlur={() => {
                    if (!form.patientName.trim())
                      setErrors({
                        ...errors,
                        patientName: "Name is required.",
                      });
                    else setErrors({ ...errors, patientName: undefined });
                  }}
                  onChange={(e) => {
                    setForm({ ...form, patientName: e.target.value });
                    if (errors.patientName)
                      setErrors({ ...errors, patientName: undefined });
                  }}
                  data-ocid="appointments.name_input"
                  className={errors.patientName ? "border-destructive" : ""}
                />
                {errors.patientName && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="appointments.name_field_error"
                  >
                    {errors.patientName}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="patientPhone">
                  Mobile Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="patientPhone"
                  type="tel"
                  placeholder="9876543210"
                  maxLength={10}
                  value={form.patientPhone}
                  onBlur={() => {
                    if (!/^[6-9]\d{9}$/.test(form.patientPhone))
                      setErrors({
                        ...errors,
                        patientPhone:
                          "Enter a valid 10-digit Indian mobile number.",
                      });
                    else setErrors({ ...errors, patientPhone: undefined });
                  }}
                  onChange={(e) => {
                    setForm({ ...form, patientPhone: e.target.value });
                    if (errors.patientPhone)
                      setErrors({ ...errors, patientPhone: undefined });
                  }}
                  data-ocid="appointments.phone_input"
                  className={errors.patientPhone ? "border-destructive" : ""}
                />
                {errors.patientPhone && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="appointments.phone_field_error"
                  >
                    {errors.patientPhone}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="patientEmail">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <Input
                id="patientEmail"
                type="email"
                placeholder="rohit@example.com"
                value={form.patientEmail}
                onBlur={() => {
                  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.patientEmail))
                    setErrors({
                      ...errors,
                      patientEmail: "Enter a valid email address.",
                    });
                  else setErrors({ ...errors, patientEmail: undefined });
                }}
                onChange={(e) => {
                  setForm({ ...form, patientEmail: e.target.value });
                  if (errors.patientEmail)
                    setErrors({ ...errors, patientEmail: undefined });
                }}
                data-ocid="appointments.email_input"
                className={errors.patientEmail ? "border-destructive" : ""}
              />
              {errors.patientEmail && (
                <p
                  className="text-xs text-destructive"
                  data-ocid="appointments.email_field_error"
                >
                  {errors.patientEmail}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="notes">Additional Notes (optional)</Label>
              <Textarea
                id="notes"
                placeholder="Describe your symptoms or any special requirements…"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                rows={3}
                data-ocid="appointments.notes_textarea"
              />
            </div>
          </div>
        )}

        {/* Step 4: Review & Confirm */}
        {step === 4 && (
          <div className="space-y-5" data-ocid="appointments.step4_panel">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-1">
                Review & Confirm
              </h2>
              <p className="text-sm text-muted-foreground">
                Please review your details before confirming.
              </p>
            </div>

            <div className="rounded-xl border border-border overflow-hidden">
              <div className="bg-primary/5 px-5 py-3 border-b border-border">
                <p className="text-sm font-semibold text-primary">
                  Appointment Summary
                </p>
              </div>
              <div className="divide-y divide-border">
                <SummaryRow
                  label="Department"
                  value={selectedDept?.name ?? "—"}
                />
                <SummaryRow
                  label="Doctor"
                  value={
                    selectedDoctor
                      ? `${selectedDoctor.name} (${selectedDoctor.specialty})`
                      : "Any available doctor"
                  }
                />
                <SummaryRow label="Date" value={formatDate(form.date)} />
                <SummaryRow
                  label="Time Slot"
                  value={selectedSlot?.label ?? "—"}
                />
                <SummaryRow label="Patient Name" value={form.patientName} />
                <SummaryRow label="Phone" value={form.patientPhone} />
                <SummaryRow label="Email" value={form.patientEmail} />
                {form.notes && <SummaryRow label="Notes" value={form.notes} />}
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              By confirming, you agree that our staff will contact you at the
              provided number to finalize your appointment.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-7 pt-5 border-t border-border">
          <Button
            type="button"
            variant="outline"
            onClick={goPrev}
            disabled={step === 1}
            className="gap-1.5"
            data-ocid="appointments.prev_button"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </Button>

          {step < 4 ? (
            <Button
              type="button"
              onClick={goNext}
              className="gap-1.5"
              data-ocid="appointments.next_button"
            >
              Next <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="button"
              onClick={onConfirm}
              className="gap-1.5 bg-primary"
              data-ocid="appointments.confirm_button"
            >
              <Check className="w-4 h-4" /> Confirm Booking
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-start gap-4 px-5 py-3">
      <span className="text-sm text-muted-foreground shrink-0 w-32">
        {label}
      </span>
      <span className="text-sm text-foreground font-medium text-right break-words min-w-0">
        {value}
      </span>
    </div>
  );
}

interface ConfirmationCardProps {
  form: AppointmentRequest;
  bookingId: number;
  selectedDept: (typeof DEPARTMENTS)[number] | undefined;
  selectedDoctor: (typeof DOCTORS)[number] | undefined;
  selectedSlot: (typeof DISPLAY_TIME_SLOTS)[number] | undefined;
  onReset: () => void;
  onViewAppointments: () => void;
}

function ConfirmationCard({
  form,
  bookingId,
  selectedDept,
  selectedDoctor,
  selectedSlot,
  onReset,
  onViewAppointments,
}: ConfirmationCardProps) {
  return (
    <Card
      className="border-border shadow-sm"
      data-ocid="appointments.success_state"
    >
      <CardContent className="p-6 sm:p-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-1">
            Appointment Booked!
          </h2>
          <p className="text-muted-foreground text-sm">
            We'll contact you at{" "}
            <strong className="text-foreground">{form.patientPhone}</strong> to
            confirm.
          </p>
        </div>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 overflow-hidden mb-6">
          <div className="px-5 py-3 border-b border-emerald-100 flex items-center justify-between">
            <span className="text-sm font-semibold text-emerald-800">
              Booking Confirmed
            </span>
            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 font-mono text-xs">
              #{bookingId}
            </Badge>
          </div>
          <div className="divide-y divide-emerald-100">
            <SummaryRow label="Department" value={selectedDept?.name ?? "—"} />
            <SummaryRow
              label="Doctor"
              value={
                selectedDoctor ? selectedDoctor.name : "Any available doctor"
              }
            />
            <SummaryRow label="Date" value={formatDate(form.date)} />
            <SummaryRow label="Time" value={selectedSlot?.label ?? "—"} />
            <SummaryRow label="Patient" value={form.patientName} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={() => window.print()}
            className="gap-2"
            data-ocid="appointments.print_button"
          >
            <Printer className="w-4 h-4" /> Print / Save
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onViewAppointments}
            className="gap-2"
            data-ocid="appointments.view_my_button"
          >
            <FileText className="w-4 h-4" /> My Appointments
          </Button>
          <Button
            type="button"
            onClick={onReset}
            className="gap-2"
            data-ocid="appointments.book_another_button"
          >
            Book Another
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

interface MyAppointmentsProps {
  appointments: Appointment[];
  onCancel: (id: number) => void;
  onDelete: (id: number) => void;
}

function MyAppointments({
  appointments,
  onCancel,
  onDelete,
}: MyAppointmentsProps) {
  if (appointments.length === 0) {
    return (
      <div
        className="text-center py-20 rounded-xl border border-dashed border-border bg-muted/20"
        data-ocid="appointments.empty_state"
      >
        <CalendarDays className="w-12 h-12 text-muted-foreground/50 mx-auto mb-3" />
        <p className="font-semibold text-foreground mb-1">
          No appointments yet
        </p>
        <p className="text-sm text-muted-foreground">
          Your booked appointments will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3" data-ocid="appointments.my_list">
      {appointments.map((appt, idx) => {
        const dept = DEPARTMENTS.find((d) => d.id === appt.departmentId);
        const doctor = DOCTORS.find((d) => d.id === appt.doctorId);
        const slot = DISPLAY_TIME_SLOTS.find(
          (s) => s.startTime === appt.timeSlot.startTime,
        );
        return (
          <Card
            key={appt.id}
            className="border-border"
            data-ocid={`appointments.item.${idx + 1}`}
          >
            <CardContent className="p-5">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="font-semibold text-foreground">
                      {appt.patientName}
                    </span>
                    <StatusBadge status={appt.status} />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {dept?.name}
                    {doctor ? ` · ${doctor.name}` : ""}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {formatDate(appt.date)}
                    {slot ? ` · ${slot.label}` : ""}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">
                    ID #{appt.id}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {appt.status !== "cancelled" && (
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => onCancel(appt.id)}
                      className="gap-1 text-amber-600 border-amber-200 hover:bg-amber-50"
                      data-ocid={`appointments.cancel_button.${idx + 1}`}
                    >
                      <XCircle className="w-3.5 h-3.5" /> Cancel
                    </Button>
                  )}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(appt.id)}
                    className="gap-1 text-destructive hover:bg-destructive/10"
                    data-ocid={`appointments.delete_button.${idx + 1}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
