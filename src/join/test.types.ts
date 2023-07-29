type S1 = "admin" | "bank" | "user"; // account type
type S2 = "S" | "A" | "B" | "C" | "D" | "F"; // account score
type S3 = "private" | "public" | "hidden"; // account privacy status
type S4 = "pending" | "onhold" | "ongoing" | "done" | "dropped"; // task status
type S5 = "class" | "meeting" | "campaign" | "event"; // task type
type S6 = "archive" | "active"; // task archive status (derived from status + time)
type S7 = "overdue" | "punctual"; // task overdue status (derived from status + time)

export type Statuses = [S1, S2, S3, S4, S5, S6, S7];
