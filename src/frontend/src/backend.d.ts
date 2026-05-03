import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Department {
    id: bigint;
    name: string;
    description: string;
    iconName: string;
    availableEquipment: Array<string>;
    keyTreatments: Array<string>;
}
export type Timestamp = bigint;
export interface TimeSlot {
    startTime: string;
    endTime: string;
}
export interface ConsultationHours {
    startTime: string;
    endTime: string;
    days: string;
}
export type DoctorId = bigint;
export interface HospitalInfo {
    about: string;
    city: string;
    name: string;
    totalBeds: bigint;
    email: string;
    website: string;
    workingHours: Array<WorkingHours>;
    establishedYear: bigint;
    state: string;
    address: string;
    phone: string;
    pincode: string;
    emergencyPhone: string;
}
export type DepartmentId = bigint;
export interface Doctor {
    id: DoctorId;
    bio: string;
    yearsOfExperience: bigint;
    consultationHours: ConsultationHours;
    name: string;
    specialty: string;
    imageUrl: string;
    consultationFee: bigint;
    qualification: string;
    departmentId: DepartmentId;
}
export interface AppointmentRequest {
    doctorId: DoctorId;
    patientEmail: string;
    date: string;
    patientPhone: string;
    notes: string;
    patientName: string;
    departmentId: DepartmentId;
    timeSlot: TimeSlot;
}
export type AppointmentId = bigint;
export interface WorkingHours {
    startTime: string;
    endTime: string;
    days: string;
}
export interface Appointment {
    id: AppointmentId;
    status: AppointmentStatus;
    doctorId: DoctorId;
    patientEmail: string;
    date: string;
    createdAt: Timestamp;
    patientPhone: string;
    notes: string;
    patientName: string;
    departmentId: DepartmentId;
    timeSlot: TimeSlot;
}
export enum AppointmentStatus {
    cancelled = "cancelled",
    pending = "pending",
    confirmed = "confirmed"
}
export interface backendInterface {
    bookAppointment(req: AppointmentRequest): Promise<Appointment>;
    cancelAppointment(id: AppointmentId): Promise<boolean>;
    getAppointment(id: AppointmentId): Promise<Appointment | null>;
    getAvailableTimeSlots(doctorId: DoctorId, date: string): Promise<Array<TimeSlot>>;
    getDepartment(id: bigint): Promise<Department | null>;
    getDepartments(): Promise<Array<Department>>;
    getDoctor(id: DoctorId): Promise<Doctor | null>;
    getDoctors(): Promise<Array<Doctor>>;
    getDoctorsByDepartment(departmentId: DepartmentId): Promise<Array<Doctor>>;
    getHospitalInfo(): Promise<HospitalInfo>;
    listAppointments(): Promise<Array<Appointment>>;
}
