import Common "../types/common";
import ApptTypes "../types/appointment";
import AppointmentLib "../lib/appointment";
import List "mo:core/List";

mixin (
  appointments : List.List<ApptTypes.Appointment>,
  nextAppointmentId : { var value : Nat }
) {
  public func bookAppointment(req : ApptTypes.AppointmentRequest) : async ApptTypes.Appointment {
    let (appt, newId) = AppointmentLib.book(appointments, nextAppointmentId.value, req);
    nextAppointmentId.value := newId;
    appt
  };

  public query func getAppointment(id : Common.AppointmentId) : async ?ApptTypes.Appointment {
    AppointmentLib.getById(appointments, id)
  };

  public func cancelAppointment(id : Common.AppointmentId) : async Bool {
    AppointmentLib.cancel(appointments, id)
  };

  public query func listAppointments() : async [ApptTypes.Appointment] {
    AppointmentLib.listAll(appointments)
  };

  public query func getAvailableTimeSlots(
    doctorId : Common.DoctorId,
    date : Text
  ) : async [ApptTypes.TimeSlot] {
    AppointmentLib.getAvailableSlots(appointments, doctorId, date)
  };
}
