import { setHours, setMinutes, format, addMinutes } from "date-fns";

export function generateDayTimeList(
  date: Date,
  start_time_barbershop: number,
  end_time_barbershop: number,
  duration: number
): string[] {
  const startTime = setMinutes(setHours(date, start_time_barbershop ?? 8), 0); // Set start time to 09:00
  const endTime = setMinutes(setHours(date, end_time_barbershop ?? 22), 0); // Set end time to 21:00
  const interval = duration; // interval in minutes
  const timeList: string[] = [];

  let currentTime = startTime;

  while (currentTime <= endTime) {
    timeList.push(format(currentTime, "HH:mm"));
    currentTime = addMinutes(currentTime, interval);
  }

  return timeList;
}
