import type { CalendarDay } from "../../components/ui/atoms/Calendar/Calendar.types";

/* Builds a month grid: leading days from the previous month,
   the month itself, then trailing days to fill six rows. */

function buildMonth(opts: {
    days: number;
    startOn: number;
    prevDays: number;
    today?: number;
    selected?: number[];
    disabled?: number[];
}): CalendarDay[] {
    const { days, startOn, prevDays, today, selected = [], disabled = [] } = opts;
    const grid: CalendarDay[] = [];

    for (let i = startOn - 1; i >= 0; i--) {
        grid.push({ date: prevDays - i, currentMonth: false });
    }

    for (let d = 1; d <= days; d++) {
        grid.push({
            date: d,
            currentMonth: true,
            today: d === today,
            selected: selected.includes(d),
            disabled: disabled.includes(d)
        });
    }

    let trailing = 1;
    while (grid.length < 42) {
        grid.push({ date: trailing++, currentMonth: false });
    }

    return grid;
}

/* 01 — Clinic appointment (eniyicihaz.com) */

export const clinicDays = buildMonth({
    days: 31,
    startOn: 1,
    prevDays: 30,
    today: 20,
    selected: [25],
    disabled: [5, 6, 12, 13, 19, 21, 22, 26, 27]
});

export const clinicWeekdays = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

export const clinicSlots = [
    { time: "09:30", audiologist: "Dr. Ayşe Yıldırım", free: true },
    { time: "11:00", audiologist: "Dr. Ayşe Yıldırım", free: true },
    { time: "13:30", audiologist: "Dr. Kemal Arslan", free: false },
    { time: "15:00", audiologist: "Dr. Kemal Arslan", free: true },
    { time: "16:30", audiologist: "Dr. Ayşe Yıldırım", free: true }
];

export const clinicLegend = [
    { label: "Müsait", tone: "free" },
    { label: "Dolu", tone: "busy" },
    { label: "Seçilen", tone: "picked" }
];

/* 02 — Hotel stay */

export const stayDays = buildMonth({
    days: 31,
    startOn: 4,
    prevDays: 31,
    selected: [14, 15, 16, 17, 18],
    disabled: [1, 2, 3, 4, 5, 6, 7, 8]
});

export const stayPricing = [
    { key: "5 nights", value: "€920" },
    { key: "Cleaning", value: "€65" },
    { key: "Service", value: "€112" }
];

export const stayProperty = {
    title: "Canal-side loft with a working fireplace",
    location: "Kralingen, Rotterdam",
    score: "4.94",
    reviews: "218"
};

/* 03 — Team availability */

export const teamDays = buildMonth({
    days: 30,
    startOn: 0,
    prevDays: 31,
    today: 20,
    selected: [8, 9, 10, 23, 24]
});

export const teamMembers = [
    { initials: "AL", name: "Amara", status: "In office", tone: "in" },
    { initials: "DO", name: "Daniel", status: "Remote", tone: "remote" },
    { initials: "YT", name: "Yuki", status: "Annual leave", tone: "off" },
    { initials: "JR", name: "Jonah", status: "In office", tone: "in" },
    { initials: "PA", name: "Priya", status: "Remote", tone: "remote" }
];

export const teamEvents = [
    { time: "09:30", label: "Design review", room: "Grain Store" },
    { time: "11:00", label: "Cycle planning", room: "Zoom" },
    { time: "15:00", label: "Candidate call — Senior PD", room: "Booth 2" }
];

/* 04 — Content schedule */

export const editorialDays = buildMonth({
    days: 31,
    startOn: 2,
    prevDays: 28,
    today: 20,
    selected: [4, 11, 18, 25]
});

export const editorialQueue = [
    { date: "Thu 24", title: "The scheduler papers, part 4", state: "Scheduled", tone: "ready" },
    { date: "Mon 28", title: "Density is a feature", state: "In review", tone: "review" },
    { date: "Thu 31", title: "Type tokens in the database", state: "Draft", tone: "draft" }
];

export const editorialChannels = [
    { label: "Journal", count: 4 },
    { label: "Newsletter", count: 4 },
    { label: "Changelog", count: 2 }
];

/* 05 — Race calendar */

export const seasonDays = buildMonth({
    days: 31,
    startOn: 5,
    prevDays: 31,
    selected: [12, 26],
    disabled: [1, 2, 3]
});

export const seasonRaces = [
    {
        round: "12",
        circuit: "Circuit de Spa-Francorchamps",
        country: "Belgium",
        date: "12 July",
        session: "Race · 15:00 CET",
        next: false
    },
    {
        round: "13",
        circuit: "Hungaroring",
        country: "Hungary",
        date: "26 July",
        session: "Race · 15:00 CET",
        next: true
    }
];

export const seasonStandings = [
    { pos: "1", driver: "L. Ødegård", points: "241" },
    { pos: "2", driver: "M. Brennan", points: "218" },
    { pos: "3", driver: "K. Asare", points: "196" }
];
