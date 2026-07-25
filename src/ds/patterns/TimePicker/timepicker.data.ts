/* 01 — Clinic appointment slot booking (eniyicihaz.com) */

export const bookingField = {
    id: "tp-booking",
    label: "Randevu saati",
    value: "09:00",
    min: "08:00",
    max: "18:00"
};

/* 02 — Meeting scheduler, dark, required */

export const meetingField = {
    id: "tp-meeting",
    label: "Start time",
    value: "14:30"
};

/* 03 — Alarm / reminder settings, step interval */

export const alarmField = {
    id: "tp-alarm",
    label: "Wake-up time",
    value: "06:45",
    step: 900,
    note: "Sessions in 15-minute increments"
};

/* 04 — Restaurant reservation, invalid state (outside hours) */

export const reservationField = {
    id: "tp-reservation",
    label: "Reservation time",
    value: "23:30",
    min: "17:00",
    max: "22:30",
    error: "We're closed at this time — last seating is 22:30"
};

/* 05 — Shift schedule, read-only confirmed slot */

export const shiftField = {
    id: "tp-shift",
    label: "Shift start",
    value: "07:00",
    note: "Assigned by your manager"
};
