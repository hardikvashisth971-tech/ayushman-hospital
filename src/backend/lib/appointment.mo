import Common "../types/common";
import ApptTypes "../types/appointment";
import List "mo:core/List";
import Time "mo:core/Time";

module {
  public type Appointment = ApptTypes.Appointment;
  public type AppointmentRequest = ApptTypes.AppointmentRequest;
  public type TimeSlot = ApptTypes.TimeSlot;

  public func book(
    appointments : List.List<Appointment>,
    nextId : Nat,
    req : AppointmentRequest
  ) : (Appointment, Nat) {
    let appt : Appointment = {
      id = nextId;
      patientName = req.patientName;
      patientPhone = req.patientPhone;
      patientEmail = req.patientEmail;
      departmentId = req.departmentId;
      doctorId = req.doctorId;
      date = req.date;
      timeSlot = req.timeSlot;
      notes = req.notes;
      status = #confirmed;
      createdAt = Time.now();
    };
    appointments.add(appt);
    (appt, nextId + 1)
  };

  public func getById(
    appointments : List.List<Appointment>,
    id : Common.AppointmentId
  ) : ?Appointment {
    appointments.find(func(a) { a.id == id })
  };

  public func cancel(
    appointments : List.List<Appointment>,
    id : Common.AppointmentId
  ) : Bool {
    var found = false;
    appointments.mapInPlace(
      func(a) {
        if (a.id == id and a.status != #cancelled) {
          found := true;
          { a with status = #cancelled }
        } else { a }
      }
    );
    found
  };

  public func listAll(
    appointments : List.List<Appointment>
  ) : [Appointment] {
    appointments.toArray()
  };

  public func getAvailableSlots(
    appointments : List.List<Appointment>,
    doctorId : Common.DoctorId,
    date : Text
  ) : [TimeSlot] {
    let allSlots : [TimeSlot] = [
      { startTime = "09:00"; endTime = "09:30" },
      { startTime = "09:30"; endTime = "10:00" },
      { startTime = "10:00"; endTime = "10:30" },
      { startTime = "10:30"; endTime = "11:00" },
      { startTime = "11:00"; endTime = "11:30" },
      { startTime = "11:30"; endTime = "12:00" },
      { startTime = "14:00"; endTime = "14:30" },
      { startTime = "14:30"; endTime = "15:00" },
      { startTime = "15:00"; endTime = "15:30" },
      { startTime = "15:30"; endTime = "16:00" }
    ];
    let booked = appointments.filter(
      func(a) { a.doctorId == doctorId and a.date == date and a.status != #cancelled }
    );
    allSlots.filter(
      func(slot) {
        booked.find(func(a) { a.timeSlot.startTime == slot.startTime }) == null
      }
    )
  };
}
