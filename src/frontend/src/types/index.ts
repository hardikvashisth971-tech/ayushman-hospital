export interface TimeSlot {
  startTime: string;
  endTime: string;
}

export type AppointmentStatus = "pending" | "confirmed" | "cancelled";

export interface AppointmentRequest {
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  departmentId: number;
  doctorId: number;
  date: string;
  timeSlot: TimeSlot;
  notes: string;
}

export interface Appointment {
  id: number;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  departmentId: number;
  doctorId: number;
  date: string;
  timeSlot: TimeSlot;
  notes: string;
  status: AppointmentStatus;
  createdAt: number;
}

export interface Department {
  id: number;
  name: string;
  description: string;
  iconName: string;
  keyTreatments: string[];
  availableEquipment: string[];
}

export interface ConsultationHours {
  days: string;
  startTime: string;
  endTime: string;
}

export interface Doctor {
  id: number;
  name: string;
  qualification: string;
  specialty: string;
  departmentId: number;
  yearsOfExperience: number;
  consultationFee: number;
  bio: string;
  consultationHours: ConsultationHours;
  imageUrl: string;
}

export interface WorkingHours {
  day: string;
  openTime: string;
  closeTime: string;
  isClosed: boolean;
}

export interface HospitalInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  website: string;
  workingHours: WorkingHours[];
  about: string;
  establishedYear: number;
  totalBeds: number;
}
