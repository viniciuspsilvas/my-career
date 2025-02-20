import {
  format,
  formatDistanceToNow,
  formatDistanceToNowStrict,
  getDate,
  getMonth,
  getYear,
  isBefore,
  isToday,
  isTomorrow,
  isYesterday,
  parse,
} from "date-fns";

export const getHumanReadableDateFormat = (date: Date, addSuffix = true) => {
  return formatDistanceToNow(date, { addSuffix });
};

export const getDaysUntilBirthday = (dob: Date): string => {
  const today = TODAY; // Current date (using the exported `TODAY` constant)
  const currentYear = getYear(today); // Extract the current year

  // Extract the month (0-based) and day from the date of birth
  const dobMonth = getMonth(dob); // e.g., January = 0
  const dobDay = getDate(dob);

  // Create the next birthday date for the current year
  let nextBirthday = new Date(currentYear, dobMonth, dobDay);

  // If the birthday has already passed this year, move it to the next year
  if (isBefore(nextBirthday, today)) {
    nextBirthday = new Date(currentYear + 1, dobMonth, dobDay);
  }

  // Check if the birthday is today
  if (isToday(nextBirthday)) {
    return "Today!";
  }

  // Calculate the distance in days until the next birthday
  const daysUntil = formatDistanceToNowStrict(nextBirthday, {
    unit: "day", // Ensure the distance is calculated in days
    roundingMethod: "floor", // Round down to the nearest whole day
  });

  // Return a human-readable message
  return `In ${daysUntil}`;
};

export const getHumanReadableDateFormatInDays = (
  date: Date,
  addSuffix = true,
) => {
  if (isToday(date)) {
    return "Today";
  }

  if (isYesterday(date)) {
    return "Yesterday";
  }

  if (isTomorrow(date)) {
    return "Tomorrow";
  }

  return formatDistanceToNowStrict(date, {
    unit: "day",
    roundingMethod: "floor",
    addSuffix,
  });
};

export const TODAY = new Date();

export const TIME_FORMAT = "hh:mm aaa";
export const DD_MM_DATE_FORMAT = "dd/MM";
export const PPPP_DATE_FORMAT = "PPPP";
export const DD_MM_YY_DATE_FORMAT = "dd/MM/yy";
export const DD_MM_YY_HH_MM_DATE_FORMAT = "dd/MM/yy HH:mm";

export const parseTime = (dateString: string) => {
  return parse(dateString, TIME_FORMAT, new Date());
};

export const formatTime = (date: Date) => {
  return format(date, TIME_FORMAT);
};

export const formatDate = (
  date: Date,
  dateFormat: string = DD_MM_YY_DATE_FORMAT,
) => {
  return format(date, dateFormat);
};

// export function formatDate(input: string | number): string {
//   const date = new Date(input);
//   return date.toLocaleDateString("en-US", {
//     month: "long",
//     day: "numeric",
//     year: "numeric"
//   });
// }

// export const getUnixTime: typeof getUnixTimeFns = (date: Date) => getUnixTimeFns(date)

export enum WeekDays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export enum WeekShifts {
  Morning,
  Afternoon,
  Evening,
}

export const MONTH_LABELS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
